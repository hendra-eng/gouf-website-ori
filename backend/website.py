"""Public website enquiries. No access to the separate accounting application."""
import os
import time
import uuid
from collections import defaultdict, deque
from datetime import datetime, timedelta, timezone
from typing import Annotated, Literal, Optional
from bson import ObjectId
from fastapi import APIRouter, HTTPException, Request
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, BeforeValidator, ConfigDict, EmailStr, Field, field_validator
from pymongo.errors import DuplicateKeyError

client = AsyncIOMotorClient(os.environ['MONGO_URL'])
db = client[os.environ['DB_NAME']]
router = APIRouter(prefix='/api')
PyObjectId = Annotated[str, BeforeValidator(lambda value: str(value) if isinstance(value, ObjectId) else value)]

class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, extra='ignore')
    id: PyObjectId = Field(default_factory=lambda: str(ObjectId()), alias='_id')

    def to_mongo(self):
        data = self.model_dump(by_alias=True)
        data['_id'] = ObjectId(self.id)
        return data

    @classmethod
    def from_mongo(cls, doc):
        return cls.model_validate(doc)

class EnquiryCreate(BaseModel):
    jenis: Literal['demo', 'paket', 'kontak']
    nama: str = Field(min_length=2, max_length=100)
    email: EmailStr
    perusahaan: str = Field(min_length=2, max_length=150)
    jabatan: Optional[str] = Field(default=None, max_length=100)
    telepon: Optional[str] = Field(default=None, max_length=30)
    paket_minat: Optional[Literal['starter', 'pro', 'enterprise']] = None
    pesan: Optional[str] = Field(default=None, max_length=2000)
    client_request_id: str = Field(min_length=8, max_length=64)
    honeypot: Optional[str] = Field(default=None, max_length=200)

    @field_validator('nama', 'email', 'perusahaan', 'jabatan', 'telepon', 'pesan', mode='before')
    @classmethod
    def trim(cls, value):
        return value.strip() if isinstance(value, str) else value

class Enquiry(BaseDocument):
    jenis: str
    nama: str
    email: str
    perusahaan: str
    jabatan: Optional[str] = None
    telepon: Optional[str] = None
    paket_minat: Optional[str] = None
    pesan: Optional[str] = None
    client_request_id: str
    referensi: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = 'baru'

attempts = defaultdict(deque)

def confirmation(record, dedup=False):
    return {'referensi': record.referensi, 'dedup': dedup, 'email_konfirmasi': False,
            'created_at': record.created_at.isoformat()}

@router.get('/')
async def root():
    return {'message': 'zafeb website API'}

@router.get('/website/health')
async def health():
    await db.command('ping')
    return {'status': 'ok', 'db': True}

@router.post('/website/requests')
async def create_enquiry(payload: EnquiryCreate, request: Request):
    ip = (request.headers.get('x-forwarded-for') or request.client.host).split(',')[0].strip()
    now = time.monotonic()
    queue = attempts[ip]
    while queue and queue[0] < now - 600:
        queue.popleft()
    if len(queue) >= 8:
        raise HTTPException(429, detail={'message': 'Terlalu banyak percobaan. Tunggu beberapa menit, lalu coba lagi.'})
    queue.append(now)
    reference = f'ZF-{datetime.now(timezone.utc):%y%m}-{uuid.uuid4().hex[:8].upper()}'
    if payload.honeypot:
        return {'referensi': reference, 'dedup': True, 'email_konfirmasi': False}
    email = str(payload.email).lower()
    existing = await db.website_requests.find_one({'$or': [
        {'client_request_id': payload.client_request_id},
        {'email': email, 'jenis': payload.jenis, 'created_at': {'$gte': datetime.now(timezone.utc) - timedelta(minutes=10)}}
    ]})
    if existing:
        return confirmation(Enquiry.from_mongo(existing), True)
    record = Enquiry(**payload.model_dump(exclude={'honeypot', 'email'}), email=email, referensi=reference)
    try:
        await db.website_requests.insert_one(record.to_mongo())
    except DuplicateKeyError:
        existing = await db.website_requests.find_one({'client_request_id': payload.client_request_id})
        return confirmation(Enquiry.from_mongo(existing), True)
    return confirmation(record)

async def setup():
    await db.website_requests.create_index('client_request_id', unique=True)
    await db.website_requests.create_index([('email', 1), ('created_at', -1)])
