
from pydantic import BaseModel
from typing import List, Optional

class QueryRequest(BaseModel):
    query: str
    selected_text: Optional[str] = None
    user_context: Optional[str] = None

class QueryResponse(BaseModel):
    answer: str
    source_documents: List[str]
