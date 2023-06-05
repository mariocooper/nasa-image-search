import React from "react";
import "../styles/searchResults.css";

function SearchResults({ results }) {
    if (!results.length) {
        return <p>No results</p>
      } else {
        return (
          <div className="search-results">
            {results.map((image) => (
              <img className="card-image" src={image} alt="spaceImage"></img>
            ))}
          </div>
        );
    };
};

export default SearchResults;
