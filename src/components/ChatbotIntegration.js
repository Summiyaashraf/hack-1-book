
import React, { useState } from 'react';
import styles from './ChatbotIntegration.module.css';

function ChatbotIntegration() {
  const [query, setQuery] = useState('');
  const [responseText, setResponseText] = useState('Ask me anything about Physical AI!');
  const [loading, setLoading] = useState(false);

  const handleQuery = async (endpoint) => {
    setLoading(true);
    setResponseText('Thinking...');
    try {
      const response = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
      });
      const data = await response.json();
      setResponseText(data.answer + "\n\nSources: " + data.source_documents.join(", "));
    } catch (error) {
      console.error('Error querying chatbot:', error);
      setResponseText('Failed to get a response. Is the chatbot API running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <h3>Physical AI Chatbot</h3>
      <textarea
        className={styles.queryInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your question here..."
        rows="4"
      />
      <div className={styles.buttonGroup}>
        <button onClick={() => handleQuery('query_full_book')} disabled={loading}>
          Ask Full Book
        </button>
        <button onClick={() => handleQuery('query_selected_text')} disabled={loading}>
          Ask Selected Text (placeholder)
        </button>
      </div>
      <div className={styles.responseArea}>
        <p>{responseText}</p>
      </div>
    </div>
  );
}

export default ChatbotIntegration;
