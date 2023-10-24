import css from './Movies.module.css';
import React, { useState, useEffect } from 'react';
import { MovieList } from '../MoviesList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { MoviesApi } from '../Api/Api';

function Movies() {
  const [request, setRequest] = useState('');
  const [results, setResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) return;

    MoviesApi(query)
      .then(resp => {
        const result = resp.data.results;
        setResults(result);
      })
      .catch(error => {
        console.error('Ups. Error while searching for videos:', error);
      });
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!request) {
      alert('Please fill the field');
      return;
    }
    setSearchParams({ query: request });
  };

  return (
    <div className={css.moiveContainer}>
      <h1 className={css.mainHeader}>Пошук фільмів</h1>
      <form onSubmit={handleSubmit} className={css.moviesForm}>
        <input
          className={css.searchInput}
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Введіть ключове слово"
          value={request}
          onChange={e => setRequest(e.target.value)}
        />

        <button type="submit" className={css.searchButton}>
          Пошук
        </button>
      </form>
      <MovieList movies={results} />
    </div>
  );
}

export default Movies;
