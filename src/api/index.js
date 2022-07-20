import { API_KEY, API_URL } from "./config";

export const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const apiSettings = {
  getList: async (category, type, page) => {
    const endpoint = `${API_URL}/${category}/${type}?api_key=${API_KEY}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },

  getVideos: async (category, id) => {
    const endpoint = `${API_URL}/${category}/${id}/videos?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  getDetails: async (category, id) => {
    const endpoint = `${API_URL}/${category}/${id}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  getCredits: async (category, id) => {
    const endpoint = `${API_URL}/${category}/${id}/credits?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  getSimilar: async (category, id) => {
    const endpoint = `${API_URL}/${category}/${id}/similar?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  getSearch: async (category, keyword) => {
    const endpoint = `${API_URL}/search/${category}?api_key=${API_KEY}&query=${keyword}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
