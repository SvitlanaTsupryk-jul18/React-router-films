import { useState, useEffect } from "react";
import Search from "./Search";
import { getMovies } from "../services/movieServices";
import Select from "react-select";
const options = [
  { value: "movie", label: "Movie" },
  { value: "series", label: "Serias" },
  { value: "episode", label: "Episode" },
];

const Controls = ({ currentPage, onSearch }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);

  useEffect(() => {
    console.log("Controls", search, category, category?.value);
    const categoryValue = category?.value || "";

    getMovies(search, currentPage, categoryValue).then(({ data }) => {
      console.log("data", data);
      onSearch(data.Search, data.totalResults);
    });
  }, [search, category, currentPage]);

  const searchSet = (value) => {
    setSearch(value);
  };

  return (
    <div className="controls">
      <Search searchSet={searchSet} />
      <Select
        placeholder="Filter type"
        isCleareble
        isSearchable="false"
        className="select"
        value={category}
        onChange={setCategory}
        options={options}
      />
    </div>
  );
};

export default Controls;
