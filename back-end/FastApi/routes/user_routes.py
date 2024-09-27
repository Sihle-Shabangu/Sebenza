# routes/user_routes.py
from fastapi import APIRouter, HTTPException
from typing import List
from models import UserProfile
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import Depends
from db import get_database

router = APIRouter()

@router.post("/", response_model=UserProfile)
async def create_user(user: UserProfile, db: AsyncIOMotorClient = Depends(get_database)):
    await db.users.insert_one(user.dict())
    return user

@router.get("/", response_model=List[UserProfile])
async def read_all_users(db: AsyncIOMotorClient = Depends(get_database)):
    users = await db.users.find().to_list(100)  # Fetch up to 100 users
    return users

@router.get("/{user_id}", response_model=UserProfile)
async def read_user(user_id: str, db: AsyncIOMotorClient = Depends(get_database)):
    user = await db.users.find_one({"user_id": user_id})
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/{user_id}", response_model=UserProfile)
async def update_user(user_id: str, user: UserProfile, db: AsyncIOMotorClient = Depends(get_database)):
    result = await db.users.update_one({"user_id": user_id}, {"$set": user.dict()})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.delete("/{user_id}")
async def delete_user(user_id: str, db: AsyncIOMotorClient = Depends(get_database)):
    result = await db.users.delete_one({"user_id": user_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"detail": "User deleted"}
