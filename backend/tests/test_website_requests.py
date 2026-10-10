"""Regression tests for /api/website/* public enquiry endpoints."""
import os
import uuid
import time
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://website-draft-16.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


def _crid():
    return uuid.uuid4().hex


def _payload(**overrides):
    base = {
        "jenis": "demo",
        "nama": "TEST Budi Santoso",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "perusahaan": "TEST PT Cahaya",
        "jabatan": "CFO",
        "telepon": "+628123456789",
        "pesan": "Permintaan demo pengujian otomatis",
        "client_request_id": _crid(),
    }
    base.update(overrides)
    return base


# ---------------- Health ----------------
class TestHealth:
    def test_health_ok(self):
        r = requests.get(f"{API}/website/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert data.get("db") is True

    def test_root(self):
        r = requests.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        assert "zafeb" in r.json().get("message", "").lower()


# ---------------- Create enquiries (demo/paket/kontak) ----------------
class TestCreateEnquiry:
    def test_create_demo(self):
        p = _payload(jenis="demo")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["referensi"].startswith("ZF-")
        assert data["dedup"] is False
        assert data["email_konfirmasi"] is False

    def test_create_paket(self):
        p = _payload(jenis="paket", paket_minat="pro")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 200, r.text
        assert r.json()["referensi"].startswith("ZF-")

    def test_create_kontak(self):
        p = _payload(jenis="kontak")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 200, r.text
        assert r.json()["referensi"].startswith("ZF-")

    def test_whitespace_trimmed_and_email_lowercased(self):
        email = f"TEST_UPPER_{uuid.uuid4().hex[:6]}@Example.COM"
        p = _payload(nama="   Padded Name   ", email=email)
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 200, r.text
        # Re-submit same email+jenis to trigger email-based dedup (lowercased)
        p2 = _payload(jenis=p["jenis"], email=email.lower())
        r2 = requests.post(f"{API}/website/requests", json=p2, timeout=15)
        assert r2.status_code == 200
        assert r2.json()["dedup"] is True


# ---------------- Validation ----------------
class TestValidation:
    def test_invalid_jenis(self):
        p = _payload(jenis="invalid")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 422

    def test_invalid_email(self):
        p = _payload(email="not-an-email")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 422

    def test_short_name(self):
        p = _payload(nama="A")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 422

    def test_short_perusahaan(self):
        p = _payload(perusahaan="x")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 422

    def test_invalid_paket(self):
        p = _payload(jenis="paket", paket_minat="gold")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 422

    def test_pesan_too_long(self):
        p = _payload(pesan="x" * 2500)
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 422

    def test_missing_client_request_id(self):
        p = _payload()
        p.pop("client_request_id")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 422


# ---------------- Honeypot ----------------
class TestHoneypot:
    def test_honeypot_not_saved(self):
        p = _payload(honeypot="iambot@spam.com")
        r = requests.post(f"{API}/website/requests", json=p, timeout=15)
        assert r.status_code == 200
        data = r.json()
        # Must still return a reference but marked dedup True and no email
        assert data.get("dedup") is True
        assert data.get("email_konfirmasi") is False
        # Subsequent legit request with same client_request_id must NOT return the honeypot's record
        # (i.e. honeypot never persisted). Submitting same crid should create a NEW record (dedup False) OR
        # if same crid never persisted, the second submission should succeed with dedup False.
        p2 = dict(p)
        p2.pop("honeypot", None)
        r2 = requests.post(f"{API}/website/requests", json=p2, timeout=15)
        assert r2.status_code == 200
        assert r2.json()["dedup"] is False, "Honeypot submission appears to have been persisted"


# ---------------- Idempotency ----------------
class TestIdempotency:
    def test_same_client_request_id_is_dedup(self):
        crid = _crid()
        p1 = _payload(client_request_id=crid)
        r1 = requests.post(f"{API}/website/requests", json=p1, timeout=15)
        assert r1.status_code == 200
        ref1 = r1.json()["referensi"]
        # Resubmit same crid with different email -> should still be dedup and same ref
        p2 = _payload(client_request_id=crid)
        r2 = requests.post(f"{API}/website/requests", json=p2, timeout=15)
        assert r2.status_code == 200
        assert r2.json()["dedup"] is True
        assert r2.json()["referensi"] == ref1

    def test_same_email_and_jenis_within_window_is_dedup(self):
        email = f"test_dedup_{uuid.uuid4().hex[:8]}@example.com"
        p1 = _payload(email=email, jenis="demo")
        r1 = requests.post(f"{API}/website/requests", json=p1, timeout=15)
        assert r1.status_code == 200
        ref1 = r1.json()["referensi"]
        p2 = _payload(email=email, jenis="demo")  # different crid, same email+jenis
        r2 = requests.post(f"{API}/website/requests", json=p2, timeout=15)
        assert r2.status_code == 200
        assert r2.json()["dedup"] is True
        assert r2.json()["referensi"] == ref1


# ---------------- No public list ----------------
class TestNoPublicList:
    def test_no_list_endpoint(self):
        r = requests.get(f"{API}/website/requests", timeout=15)
        assert r.status_code in (404, 405)


# ---------------- Rate limiting (RUN LAST) ----------------
@pytest.mark.order("last")
class TestRateLimit:
    def test_rate_limit_triggers_429(self):
        # Send >8 fresh requests rapidly from this IP
        got_429 = False
        for _ in range(12):
            p = _payload()
            r = requests.post(f"{API}/website/requests", json=p, timeout=15)
            if r.status_code == 429:
                got_429 = True
                break
        assert got_429, "Rate limit did not kick in after 12 requests"
