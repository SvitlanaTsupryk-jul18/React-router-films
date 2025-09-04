import { useState } from "react";

const Search = ({ searchSet }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchSet(searchValue);
  };
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={searchValue}
        className="search-input"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" className="btn search-btn">
        Submit form
      </button>
    </form>
  );
};

export default Search;
