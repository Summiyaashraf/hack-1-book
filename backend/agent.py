import os
import json
import logging
import asyncio
import time
from typing import Dict, List, Any
from dotenv import load_dotenv

# SDK Imports
from agents import Agent, Runner
from agents import function_tool

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@function_tool
def retrieve_information(query: str) -> Dict:
    """
    Knowledge base se information nikalne ka tool.
    """
    try:
        from retrieving import RAGRetriever
        retriever = RAGRetriever()
        
        # Qdrant se data lana
        json_response = retriever.retrieve(query_text=query, top_k=5, threshold=0.3)
        results = json.loads(json_response)

        formatted_results = []
        for result in results.get('results', []):
            formatted_results.append({
                'content': result['content'],
                'url': result['url'],
                'similarity_score': result.get('similarity_score', 0)
            })

        return {
            'retrieved_chunks': formatted_results,
            'total_results': len(formatted_results)
        }
    except Exception as e:
        logger.error(f"Retrieval Error: {e}")
        return {'retrieved_chunks': [], 'total_results': 0, 'error': str(e)}

class RAGAgent:
    def __init__(self):
        # Agent ki instructions aur tools set karna
        self.agent = Agent(
            name="RAG Assistant",
            instructions=(
                "You are a helpful assistant. Use the retrieve_information tool to find facts. "
                "Always answer based on the retrieved documents. If you find the answer, "
                "mention the source URL at the end of your response."
            ),
            tools=[retrieve_information]
        )
        logger.info("RAG Agent initialized successfully.")

    def query_agent(self, query_text: str) -> Dict:
        """
        Main function jo FastAPI call karegi.
        """
        start_time = time.time()
        try:
            # Async function ko run karna
            result = asyncio.run(self._async_query_agent(query_text))
            return result
        except Exception as e:
            logger.error(f"Agent Query Error: {e}")
            return {
                "answer": "Technical error occurred while processing your request.",
                "sources": [],
                "query_time_ms": (time.time() - start_time) * 1000
            }

    async def _async_query_agent(self, query_text: str) -> Dict:
        start_time = time.time()
        try:
            # Runner ke zariye agent ko chalana
            result = await Runner.run(self.agent, query_text)
            
            # Agent ka final jawab nikalna
            assistant_response = result.final_output if hasattr(result, 'final_output') else str(result)

            # Response ko format karna jo api.py ko chahiye
            return {
                "answer": assistant_response if assistant_response else "I'm sorry, I couldn't find an answer in the docs.",
                "sources": [], # Optionally aap yahan URLs extract karke daal sakti hain
                "query_time_ms": (time.time() - start_time) * 1000,
                "status": "success"
            }
        except Exception as e:
            logger.error(f"Async Error: {e}")
            raise

# Convenience function for direct testing
def query_agent(query_text: str) -> Dict:
    agent = RAGAgent()
    return agent.query_agent(query_text)

if __name__ == "__main__":
    # Test run
    agent = RAGAgent()
    print(agent.query_agent("What is this documentation about?"))