import { useParams } from "react-router-dom";
import { getDetails } from "../services/movieServices";
import { useState, useEffect } from "react";
import { addFavorites } from "../services/movieServices";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const id = useParams().id;
  let poster = "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923";
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites'))||[]);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    getDetails(id).then(({ data }) => {
      setMovie(data);
    });
  }, []);
  const isFavorite = favorites.includes(id);
  
  return (
    <div className="container">
      <h1>Detail info</h1>
      {movie && (
        <div className="info-wrapper">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster: poster}
            alt={movie.Title}
            className="info-img"
          />
          <div className="info-details">
            <div className="info-detail">
              <p className="info-title">Title:</p>
              <p className="info-data">{movie.Title}</p>
            </div>
            <div className="info-detail">
              <p className="info-title">Released:</p>
              <p className="info-data">{movie.Released}</p>
            </div>
            <div className="info-detail">
              <p className="info-title">Genre:</p>
              <p className="info-data">{movie.Genre}</p>
            </div>
            <div className="info-detail">
              <p className="info-title">Country:</p>
              <p className="info-data">{movie.Country}</p>
            </div>
            <div className="info-detail">
              <p className="info-title">Rating:</p>
              <p className="info-data">{movie.imdbRating}</p>
            </div>
            <div className="info-detail">
              <p className="info-title">Year:</p>
              <p className="info-data">{movie.Year}</p>
            </div>
            <div className="info-detail">
              <p className="info-title">Actors:</p>
              <p className="info-data">{movie.Actors}</p>
            </div>
            <div className="info-detail">
              <p className="info-title">Awards:</p>
              <p className="info-data">{movie.Awards}</p>
            </div>
            {!isFavorite ? (
            <button
            type="button"
            className={`btn fav-btn info-btn ${
              isFavorite ? "disabled" : ""
            }`}
            data-id={id}
            onClick={(e) => setFavorites(addFavorites(e, favorites))}>
            Add to favorites
          </button>
        ):(<p>&#x2665;&#xfe0f;</p>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
