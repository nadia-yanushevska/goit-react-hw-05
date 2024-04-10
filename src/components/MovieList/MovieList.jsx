import { Link, useLocation } from 'react-router-dom';

import s from './MovieList.module.css';

function MovieList({ movieList = [] }) {
    const location = useLocation();
    console.log(location);
    return (
        <ul className={s.list}>
            {movieList.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={location}>
                            {movie.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default MovieList;
