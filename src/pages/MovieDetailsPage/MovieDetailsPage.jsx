import s from './MovieDetailsPage.module.css';
import { Outlet, Link } from 'react-router-dom';

function MovieDetailsPage() {
    return (
        <div className={s.div}>
            <h2>Movie Details</h2>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default MovieDetailsPage;
