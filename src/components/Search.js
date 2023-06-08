import React, { useState } from "react";
import "../styles/search.css"
import getImages from "../requests/getImages";
import { ImSearch } from "react-icons/im";

function Search({ setSearchResults }) {
    const [value, setValue] = useState();

    async function handleSubmit(event) {
        event.preventDefault();
        setSearchResults(await getImages(value));
    };

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
               <input  className="search-input" type="text" onChange={(e) => setValue(e.target.value)} placeholder="Search"></input>
               <button className="search-button" type="submit"><ImSearch /></button>
           </form>
        </div>
    );
};

export default Search;
