import clsx from 'clsx';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

import { useAPI } from '../../hooks/useAPI';
import { fetchMovieDetails } from '../../api/TMDB';
import { getImageUrl } from '../../assets/helpers';

import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

import s from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
    const location = useLocation();
    const { movieId } = useParams();
    const [movie, , { loading, error }] = useAPI(fetchMovieDetails, movieId);
    return (
        <>
            <Link to={location.state || '/movies'} className={s.back}>
                <MdKeyboardBackspace size={32} />
            </Link>

            {loading && <Loader />}
            {error && <Error />}

            {movie && (
                <div className={s.card}>
                    <h2 className={clsx(s.title, s.row)}>{movie.title}</h2>
                    <div className={s.column}>
                        <img src={getImageUrl(movie.backdrop_path)} alt={movie.title} />
                    </div>
                    <div className={s.column}>
                        <div className={s.flex}>
                            <div className={s.small_column}>
                                <h4 className={s.heading}>UserScore:</h4>
                                <p className={s.text}>{Math.round(movie.vote_average * 10)}%</p>
                            </div>

                            <div className={s.small_column}>
                                <h4 className={s.heading}>Release date:</h4>
                                <p className={s.text}>{movie.release_date}</p>
                            </div>
                        </div>
                        <h4 className={s.heading}>Overview:</h4>
                        <p className={s.text}>{movie.overview}</p>

                        <div className={s.flex}>
                            <div className={s.small_column}>
                                <h4 className={s.heading}>Tag:</h4>
                                <p className={clsx(s.text, s.tag)}>{movie.tagline}</p>
                            </div>

                            <div className={s.small_column}>
                                <h4 className={s.heading}>Genres:</h4>
                                <p className={s.text}>{movie.genres.map(({ name }) => name).join(', ')}</p>
                            </div>
                        </div>
                    </div>

                    <ul className={clsx(s.row, s.list)}>
                        <li>
                            <Link to="cast" state={location.state}>
                                Cast
                            </Link>
                        </li>
                        <li>
                            <Link to="reviews" state={location.state}>
                                Reviews
                            </Link>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            )}
        </>
    );
}

export default MovieDetailsPage;
