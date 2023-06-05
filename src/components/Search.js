import React, { useState } from "react";
import "../styles/search.css"
import getImages from "../requests/getImages";

function Search({ setSearchResults }) {
    const [value, setValue] = useState();

    async function handleSubmit(event) {
        event.preventDefault();
        setSearchResults(await getImages(value));
    };

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
               <input  className="search-input" type="text" onChange={(e) => setValue(e.target.value)}></input>
               <button className="search-button" type="submit">Search</button>
           </form>
        </div>
    );
};

export default Search;
