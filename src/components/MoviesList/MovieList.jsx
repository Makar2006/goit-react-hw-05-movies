import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.filmslist}>
      {movies.map(mov => (
        <li key={mov.id} className="FilmsItem">
          <Link to={`/movies/${mov.id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
              width={300}
              alt="Movie preview"
            />
            {mov.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
