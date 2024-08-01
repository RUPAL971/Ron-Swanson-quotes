import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import QuoteCard from './components/QuoteCard';
import SavedQuotesList from './components/SavedQuotesList';


const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (err) {
      setError('Failed to fetch quote');
    } finally {
      setLoading(false);
    }
  }, []);

  const saveQuote = () => {
    if (quote && ! savedQuotes.includes(quote)) {
      setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ron Swanson Quote</h1>
        <QuoteCard
          quote={quote}
          loading={loading}
          error={error}
          onNewQuote={fetchQuote}
          onSaveQuote={saveQuote}
        />
        <SavedQuotesList savedQuotes={savedQuotes} />
      </header>
    </div>
  );
};

export default App;
