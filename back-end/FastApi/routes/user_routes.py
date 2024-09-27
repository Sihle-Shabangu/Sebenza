# routes/user_routes.py
from fastapi import APIRouter, HTTPException
from typing import List
from models import UserProfile, UserCreate
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import Depends
from db import get_database

router = APIRouter()

@router.post("/", response_model=UserProfile)
async def create_user(user: UserCreate, db = Depends(get_database)):
    user_profile = UserProfile(**user.model_dump())
    await db.users.insert_one(user_profile.model_dump())
    return user_profile

@router.get("/", response_model=List[UserProfile])
async def read_all_users(db = Depends(get_database)):
    users = await db.users.find().to_list(100)  # Fetch up to 100 users
    return users

@router.get("/{user_id}", response_model=UserProfile)
async def read_user(user_id: str, db = Depends(get_database)):
    user = await db.users.find_one({"user_id": user_id})
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/{user_id}", response_model=UserProfile)
async def update_user(user_id: str, user: UserCreate, db = Depends(get_database)):
    result = await db.users.update_one({"user_id": user_id}, {"$set": user.model_dump()})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.delete("/{user_id}")
async def delete_user(user_id: str, db = Depends(get_database)):
    result = await db.users.delete_one({"user_id": user_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"detail": "User deleted"}
