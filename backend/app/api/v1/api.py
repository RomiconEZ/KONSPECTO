# backend/app/api/v1/api.py
from fastapi import APIRouter

from .endpoints import agent, search, transcribe, video

api_router = APIRouter(prefix="/v1", tags=["v1"])
api_router.include_router(agent.router, prefix="/agent", tags=["agent"])
api_router.include_router(search.router, prefix="/search", tags=["search"])
api_router.include_router(transcribe.router, prefix="/transcribe", tags=["transcribe"])
api_router.include_router(video.router, prefix="/video", tags=["video"])
