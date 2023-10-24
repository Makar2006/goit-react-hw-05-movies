import css from './Home.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MovieList } from '../components/MoviesList/MovieList';

const API_KEY = '1adabd4496cd17ddf47ee307481418a1';
function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
        params: {
          api_key: API_KEY,
        },
      })
      .then(resp => {
        setPopularMovies(resp.data.results);
      })
      .catch(error => {
        console.error('Ups, something went wrong:', error);
      });
  }, []);

  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeHeader}>Популярні фільми:</h1>
      <MovieList movies={popularMovies} />
    </div>
  );
}

export default Home;
