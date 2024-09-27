# routes/database.py
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()
MONGODB_URL = os.getenv("MONGODB_URL")

if not MONGODB_URL:
    raise ValueError("MongoDB URL not set in .env file")

client = AsyncIOMotorClient(MONGODB_URL)

async def get_database():
    return client.career_guidance
