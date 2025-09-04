import axios from "axios";

const base_url = "http://www.omdbapi.com/?apikey=a1a8539b&";

export const getMovies = (title, page = 1, type) => {
  console.log(
    `${base_url}s=${title}&page=${page}${type ? "&type=" + type : ""}`
  );
  return axios.get(
    `${base_url}s=${title}&page=${page}${type ? "&type=" + type : ""}`
  );
};

export const getDetails = (id) => {
  return axios.get(`${base_url}i=${id}`);
};

export const addFavorites = (e, favorites) => {
  e.stopPropagation();
  let newFavorites = favorites.includes(e.target.dataset.id)? favorites: [...favorites, e.target.dataset.id];
  return (newFavorites);
};

////////TODO remove from favorites
// export const removeFavorites = (e, favorites) => {
//   e.stopPropagation();
//   const newFavorites = favorites.filter(
//     (item) => item !== e.target.dataset.id
//   );
//   console.log('removeFavorites newFavorites',newFavorites);

//   return newFavorites;
// };
