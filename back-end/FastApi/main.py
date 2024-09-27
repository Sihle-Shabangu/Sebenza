from fastapi import FastAPI, HTTPException
from models import UserProfile, CV, CareerPath, Company, Feedback
from routes.user_routes import router as user_router


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


app.include_router(user_router, prefix="/users", tags=["users"])

@app.get("/", tags=["root"])
async def read_root():
    return {"message": "Welcome to CareerBot API!"}