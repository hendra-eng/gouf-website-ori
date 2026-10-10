from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

app = FastAPI()

from website import router as website_router, setup as setup_website, client
app.include_router(website_router)

@app.on_event('startup')
async def startup_website():
    await setup_website()

@app.exception_handler(RequestValidationError)
async def validation_error(request, exc):
    labels = {'nama': 'Isi nama 2–100 karakter.', 'email': 'Alamat email tidak valid.', 'perusahaan': 'Isi nama perusahaan 2–150 karakter.'}
    fields = {str(e['loc'][-1]): labels.get(str(e['loc'][-1]), 'Periksa isian ini.') for e in exc.errors()}
    return JSONResponse(status_code=422, content={'detail': {'message': 'Periksa kembali isian formulir Anda.', 'fields': fields}})

app.add_middleware(
    CORSMiddleware,
    allow_credentials=False,
    allow_origins=os.environ['CORS_ORIGINS'].split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()