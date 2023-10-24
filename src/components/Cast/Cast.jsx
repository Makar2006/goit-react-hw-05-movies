import css from './Cast.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '1adabd4496cd17ddf47ee307481418a1';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${movieId}/credits`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then(resp => {
        setCast(resp.data.cast);
      })
      .catch(error => {
        console.error('Ups, something went wrong:', error);
      });
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <h2 className={css.castHeader}>Cast:</h2>
      <ul className={css.actorList}>
        {cast.map(act => (
          <li key={act.id} className={css.actorItem}>
            {act.profile_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${act.profile_path}`}
                alt={act.name + ' portret'}
                className={css.actorPortret}
              />
            ) : (
              <img
                src={
                  'https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif'
                }
                width={200}
                height={300}
                alt={act.name + ' portret'}
              />
            )}
            <p className={css.actorName}>Name: {act.name}</p>
            {act.character && (
              <p className={css.actorChar}>Character: {act.character}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
