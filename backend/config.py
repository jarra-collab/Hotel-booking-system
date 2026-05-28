import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "secret")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-secret")
    SQLALCHEMY_DATABASE_URI = "sqlite:///hotel.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False