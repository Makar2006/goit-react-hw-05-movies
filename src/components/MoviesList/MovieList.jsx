import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.filmsList}>
      {movies.map(mov => (
        <li key={mov.id} className={css.filmsItem}>
          <Link
            to={`/movies/${mov.id}`}
            state={{ from: location }}
            className={css.filmsLink}
          >
            {mov.poster_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                width={300}
                alt="Movie preview"
              />
            ) : (
              <img
                src={
                  'https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif'
                }
                width={300}
                height={450}
                alt={mov.name + ' poster'}
              />
            )}
            {mov.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
