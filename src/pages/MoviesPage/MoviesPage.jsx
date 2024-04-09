import s from './MoviesPage.module.css';
import { Link } from 'react-router-dom';

function MoviesPage() {
    return (
        <div className={s.div}>
            <h2>Movies</h2>
            <ul>
                <li>
                    <Link to="/movies/1">Movie1</Link>
                </li>
                <li>
                    <Link to="/movies/1">Movie2</Link>
                </li>
            </ul>
        </div>
    );
}

export default MoviesPage;
