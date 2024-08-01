import React from 'react';
import PropTypes from 'prop-types';

const QuoteCard = ({ quote, loading, error, onNewQuote, onSaveQuote }) => (
  <div className="card">
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
      <>
        <blockquote>
          <p>{quote}</p>
        </blockquote>
        <button onClick={onSaveQuote}>Save to List</button>
      </>
    )}
    <button onClick={onNewQuote} id='Rup'>Get New Quote</button>
  </div>
);

QuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onNewQuote: PropTypes.func.isRequired,
  onSaveQuote: PropTypes.func.isRequired,
};

QuoteCard.defaultProps = {
  error: null,
};

export default QuoteCard;
