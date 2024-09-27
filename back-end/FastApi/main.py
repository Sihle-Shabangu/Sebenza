from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from models import UserProfile, CV, CareerPath, Company, Feedback
from dotenv import load_dotenv
import os

load_dotenv()


app = FastAPI(
    name="CareerBot",
    title="CareerBot API",
    description="A chatbot that helps you with your career",
    summary="CareerBot API",
    version="0.0.1",
    # contact={
    #     "name": "",
    #     "url": "https://github.com/katlegorphele",
    #     "email": "katlegophele95@gmail.com"
    # },
    license_info={
        "name":"MIT LICENSE",
        "identifier":"MIT",
    },
)

# Connect to MongoDB
MONGO_DETAILS = os.getenv("MONGO_DETAILS")
if not MONGO_DETAILS:
    raise ValueError("MongoDB not configured")
client = AsyncIOMotorClient(MONGO_DETAILS)
db = client.careerbot

@app.get("/")
async def root():
    return {"message": "Chatbot API"}