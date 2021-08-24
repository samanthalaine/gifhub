import React from "react";

const Search = () => {
  return (
    <div className="searchbar">
      <label>Search Gif:</label>
      <input
        type="text"
        id="search"
        placeholder="Search for a gif..."
        onChange={(e) => console.log("searching")}
      ></input>
    </div>
  );
};

export default Search;
