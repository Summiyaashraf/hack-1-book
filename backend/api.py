import os
import asyncio
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict
from dotenv import load_dotenv
import logging

load_dotenv()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

from agent import RAGAgent

app = FastAPI(title="RAG Agent API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # React app ka URL yahan dalna production mein zaroori hai
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- UPDATED MODELS ---
class QueryRequest(BaseModel):
    message: str  # Frontend 'message' bhej raha hai, 'query' nahi

class QueryResponse(BaseModel):
    reply: str    # Frontend 'reply' dhoond raha hai
    answer: str
    sources: List[str]
    status: str
    error: Optional[str] = None

rag_agent = None

@app.on_event("startup")
async def startup_event():
    global rag_agent
    rag_agent = RAGAgent()
    logger.info("RAG Agent Ready!")

# --- UPDATED ENDPOINT ---
@app.post("/chat", response_model=QueryResponse) # '/ask' ko '/chat' kar diya
async def ask_rag(request: QueryRequest):
    logger.info(f"Query: {request.message}")
    try:
        # Agent se response lena
        response = rag_agent.query_agent(request.message)
        
        return QueryResponse(
            reply=response.get("answer", ""), # Extra key for React
            answer=response.get("answer", ""),
            sources=response.get("sources", []),
            status="success"
        )
    except Exception as e:
        logger.error(f"Error: {e}")
        return QueryResponse(reply="Error occurred", answer="", sources=[], status="error", error=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)