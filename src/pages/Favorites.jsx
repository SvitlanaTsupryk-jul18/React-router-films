import { useState, useEffect } from "react";
import { getDetails } from "../services/movieServices";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let favoritesOld = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(favoritesOld);
  }, []);

  useEffect(() => {
    const getMovies = async (id) => {
      const result = await getDetails(id);
      setMovies((prevMovies) => [...prevMovies, result.data]);
    };
    favorites.forEach((id) => {
      getMovies(id);
    });
  }, [favorites]);

  return (
    <div className="container">
      <div className="favorites">
        {!!favorites.length
          ? movies.map((data) => {
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
            })
          : "Nothing here yet"}
      </div>
    </div>
  );
};

export default Favorites;
