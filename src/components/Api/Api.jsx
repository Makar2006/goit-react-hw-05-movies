import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '1adabd4496cd17ddf47ee307481418a1';

export const MoviesApi = query => {
  return axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
};
