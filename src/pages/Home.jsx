import { useEffect, useState, useMemo } from "react";
import Controls from "../components/Controls";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites'))||[]);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const moviesSearch = (search, total) => {
    setMovies(search);
    setTotalResults(total);
  };

  return (
    <div className="container">
      <h1>Find film</h1>
      <Controls currentPage={currentPage} onSearch={moviesSearch} />
      <div className="movies">
        {movies &&
          movies.map((data) => {
            return (
              <Card
                key={data.imdbID}
                id={data.imdbID}
                onClick={() => navigate(`/movie/${data.imdbID}`)}
                {...data}
                setFavorites={setFavorites}
                favorites={favorites}
              />
            );
          })}
      </div>
      <Pagination
        className="pagination"
        currentPage={currentPage}
        totalResults={totalResults}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Home;
