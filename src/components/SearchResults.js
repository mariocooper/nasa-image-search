import React from "react";
import "../styles/searchResults.css";

function SearchResults({ results }) {
    if (!results.length) {
        return <p>No results</p>
      } else {
        return (
          <div className="search-results">
            {results.map((image) => (
              <img className="card-image" src={image} alt="spaceImage" style={{
                margin: 17,
                height: 312,
                width: 312,
                padding: 10
              }}></img>
            ))}
          </div>
        );
    };
};

export default SearchResults;
