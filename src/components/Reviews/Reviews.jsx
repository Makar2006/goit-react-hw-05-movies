import css from './Reviews.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '1adabd4496cd17ddf47ee307481418a1';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${movieId}/reviews`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then(resp => {
        setReviews(resp.data.results);
      })
      .catch(error => {
        console.error('Ups, error getting movie reviews:', error);
      });
  }, [movieId]);

  return (
    <div className={css.reviewContainer}>
      <h2 className={css.reviewHeadeer}>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {reviews.map(rev => (
            <li key={rev.id} className={css.reviewItem}>
              <p>{rev.author}</p>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviewText}>There are no reviews</p>
      )}
    </div>
  );
}

export default Reviews;
