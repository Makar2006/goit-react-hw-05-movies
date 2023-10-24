import css from './MovieDetails.module.css';
import axios from 'axios';
import React, { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '1adabd4496cd17ddf47ee307481418a1';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieImg, setMovieImg] = useState('');
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then(resp => {
        setMovieDetails(resp.data);
      })
      .catch(error => {
        console.error('Ups, something went wrong:', error);
      });

    axios
      .get(`${BASE_URL}/${movieId}/images`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then(resp => {
        if (resp.data.posters && resp.data.posters.length > 0) {
          setMovieImg(
            `https://image.tmdb.org/t/p/w500${resp.data.posters[0].file_path}`
          );
        }
      })
      .catch(error => {
        console.error('Ups, something went wrong:', error);
      });
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref.current} className={css.backBtn}>
        Go Back
      </Link>
      <h1>{movieDetails.title}</h1>
      <img src={movieImg} alt={movieDetails.title} className={css.imgDetails} />
      <p className={css.ratingText}>Рейтинг: {movieDetails.vote_average}</p>
      <p className={css.descriTxt}>Опис: {movieDetails.overview}</p>
      <ul className={css.btnList}>
        <li className={css.btnListItem}>
          <Link to={`/movies/${movieId}/cast`} className={css.castBtn}>
            Cast
          </Link>
        </li>
        <li className={css.btnListItem}>
          <Link to={`/movies/${movieId}/reviews`} className={css.reviewBtn}>
            Reviews
          </Link>
        </li>
      </ul>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default MovieDetails;
