from pydantic import BaseModel
from typing import List, Optional

class UserProfile(BaseModel):
    user_id: str  # Unique identifier for the user
    name: str  # User's name
    email: str  # User's email address
    highest_qualification: str  # User's highest qualification
    interests: List[str]  # List of user's interests
    skills: List[str]  # List of user's skills
    cv: Optional[str]  # Link to user's CV or raw CV text
    career_paths: Optional[List[str]]  # Suggested career paths for the user

class CV(BaseModel):
    user_id: str  # Reference to the user
    content: str  # CV content or text
    created_at: str  # Date the CV was created
    updated_at: Optional[str]  # Date the CV was last updated

class CareerPath(BaseModel):
    title: str  # Title of the career path
    description: str  # Description of the career path
    required_skills: List[str]  # Skills typically needed for this career
    qualifications: List[str]  # Qualifications often required
    salary_range: Optional[str]  # Expected salary range
    job_outlook: Optional[str]  # Job outlook information

class Company(BaseModel):
    name: str  # Name of the company
    industry: str  # Industry the company operates in
    summary: str  # Summary of the company
    values: List[str]  # Core values of the company
    job_openings: List[str]  # List of job openings

class Feedback(BaseModel):
    user_id: str  # Reference to the user providing feedback
    rating: int  # Rating scale (1 to 5)
    comments: Optional[str]  # Additional comments
    created_at: str  # Timestamp of when the feedback was provided
