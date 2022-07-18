import axios from "axios";
import { API_KEY, API_URL } from "./config";

export const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const apiSettings = {
  getList: (category, type) => {
    axios
      .get(`${API_URL}/${category}/${type}?api_key=${API_KEY}`)
      .then((res) => res)
      .then((err) => err);
  },

  getVideos: (category, id) => {
    axios
      .get(`${API_URL}/${category}/${id}/videos?api_key=${API_KEY}`)
      .then((res) => res)
      .then((err) => err);
  },

  getDetails: (category, id) => {
    axios
      .get(`${API_URL}/${category}/${id}?api_key=${API_KEY}`)
      .then((res) => res)
      .then((err) => err);
  },

  getCredits: (category, id) => {
    axios
      .get(`${API_URL}/${category}/${id}/credits?api_key=${API_KEY}`)
      .then((res) => res)
      .then((err) => err);
  },

  getSimilar: (category, id) => {
    axios
      .get(`${API_URL}/${category}/${id}/similar?api_key=${API_KEY}`)
      .then((res) => res)
      .then((err) => err);
  },

  searchMovie: (category, searchTerm, page = 1) => {
    axios
      .get(
        searchTerm
          ? `${API_URL}/search/${category}?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${page}`
          : `${API_URL}/${category}/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => res)
      .then((err) => err);
  },
};

export default apiSettings;
