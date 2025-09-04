import { addFavorites } from "../services/movieServices";

const Card = ({
  id,
  Title,
  Poster,
  Year,
  Type,
  onClick,
  favorites,
  setFavorites,
}) => {
  const isFavorite = favorites.includes(id);

  let poster =
    Poster === "N/A"
      ? "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923"
      : Poster;
  return (
    <div className="card" onClick={onClick}>
      <img src={poster} alt={Title} />
      <div className="card-info">
        <h3>{Title}</h3>
        <p>
          <b>Year:</b> {Year}
        </p>
        <p>
          <b>Type:</b> {Type}
        </p>
        {!isFavorite ? (
          <button
            type="button"
            className={`btn fav-btn ${isFavorite ? "disabled" : ""}`}
            data-id={id}
            onClick={(e) => setFavorites(addFavorites(e, favorites))}
          >
            Add to favorites
          </button>
        ) : (
          <p>&#x2665;&#xfe0f;</p>
        )}
      </div>
    </div>
  );
};

export default Card;
