export interface RequestPayload {
  jenis: "demo" | "paket" | "kontak";
  nama: string;
  email: string;
  perusahaan: string;
  jabatan?: string;
  telepon?: string;
  paket_minat?: string;
  pesan?: string;
  client_request_id: string;
  honeypot?: string;
}

export interface RequestResponse {
  id?: string;
  referensi: string;
  dedup: boolean;
  email_konfirmasi?: boolean;
  created_at?: string;
}

export class ApiError extends Error {
  status: number;
  fields?: Record<string, string>;
  constructor(message: string, status: number, fields?: Record<string, string>) {
    super(message);
    this.status = status;
    this.fields = fields;
  }
}

export async function submitRequest(payload: RequestPayload): Promise<RequestResponse> {
  let res: Response;
  try {
    res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/website/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ApiError("Koneksi bermasalah. Isian Anda tetap tersimpan di halaman ini - silakan coba lagi.", 0);
  }
  const data = res.headers.get("content-type")?.includes("application/json") ? await res.json().catch(() => null) : null;
  if (!res.ok) {
    const detail = data?.detail;
    if (res.status === 422 && detail?.fields) {
      throw new ApiError(detail.message || "Periksa kembali isian formulir Anda.", 422, detail.fields);
    }
    throw new ApiError(detail?.message || "Permintaan gagal diproses. Coba beberapa saat lagi.", res.status);
  }
  return data as RequestResponse;
}
