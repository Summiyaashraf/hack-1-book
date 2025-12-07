
from fastapi import APIRouter, Depends
from ..models import QueryRequest, QueryResponse
from ..services.db_service import get_db_connection
from ..services.vector_service import get_vector_store_client

router = APIRouter()

@router.post("/query_full_book", response_model=QueryResponse)
async def query_full_book(request: QueryRequest, db=Depends(get_db_connection), vector_store=Depends(get_vector_store_client)):
    # Placeholder for RAG logic querying the full textbook
    print(f"Querying full book with: {request.query}")
    return QueryResponse(
        answer=f"This is a placeholder answer for \"{request.query}\" from the full book.",
        source_documents=["docs/week1/week-01-introduction.mdx", "docs/week2/week-02-introduction.mdx"]
    )

@router.post("/query_selected_text", response_model=QueryResponse)
async def query_selected_text(request: QueryRequest, db=Depends(get_db_connection), vector_store=Depends(get_vector_store_client)):
    # Placeholder for RAG logic querying user-selected text
    print(f"Querying selected text: \"{request.selected_text}\" with query: \"{request.query}\"")
    return QueryResponse(
        answer=f"This is a placeholder answer for \"{request.query}\" based on selected text: \"{request.selected_text}\".",
        source_documents=["docs/weekX/chapterY.mdx"]
    )
