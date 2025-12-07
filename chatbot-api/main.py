
from fastapi import FastAPI
from .routers import chatbot

app = FastAPI(
    title="Physical AI Textbook RAG Chatbot API",
    description="API for the RAG Chatbot integrated with the Physical AI Textbook."
)

app.include_router(chatbot.router)

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to the Physical AI Textbook RAG Chatbot API!"}
