const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "original";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";

const CATEGORY = {
  movie: "movie",
  tv: "tv",
};

const MOVIE_TYPES = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

const TV_TYPES = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  CATEGORY,
  MOVIE_TYPES,
  TV_TYPES,
};
