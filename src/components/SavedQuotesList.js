import React from 'react';
import PropTypes from 'prop-types';

const SavedQuotesList = ({ savedQuotes }) => (
  <div className="saved-quotes">
    <h2>Saved Quotes</h2>
    {savedQuotes.length === 0 ? (
      <p>No saved quotes yet.</p>
    ) : (
      <ul>
        {savedQuotes.map((quote, index) => (
          <li key={index} className="saved-quote">
            <blockquote>
              <p>{quote}</p>
            </blockquote>
          </li>
        ))}
      </ul>
    )}
  </div>
);

SavedQuotesList.propTypes = {
  savedQuotes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SavedQuotesList;
