import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

function MovieList() {
    return (
        <ul className={s.list}>
            <li>
                <Link to="/movies/1">Movie1</Link>
            </li>
            <li>
                <Link to="/movies/2">Movie2</Link>
            </li>
            <li>
                <Link to="/movies/3">Movie3</Link>
            </li>
        </ul>
    );
}

export default MovieList;
