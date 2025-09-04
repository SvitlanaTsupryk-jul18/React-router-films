// import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";

const Search = ({ searchSet }) => {
  const [searchValue,setSearchValue] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();

    searchSet(searchValue);
  }
  return (
    <form className="search" onSubmit={handleSubmit}>
      {/* <IoSearch style={{ marginRight: 10 }} /> */}
      <input type="text" name="search" value={searchValue} className="search-input" onChange={(e) => setSearchValue(e.target.value)} />
      <button type="submit" className="btn search-btn">Submit form</button>
    </form>  );
};

export default Search;
