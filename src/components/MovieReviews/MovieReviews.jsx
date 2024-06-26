import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import { useAPI } from '../../hooks/useAPI';
import { fetchMovieReviews } from '../../api/TMDB';
import { getCommentDate, getCommentTime } from '../../assets/helpers';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';

import s from './MovieReviews.module.css';

function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, , { loading, error }] = useAPI(fetchMovieReviews, movieId);
    return (
        <>
            {loading && <Loader />}
            {error && <Error />}
            {reviews?.total_results === 0 ? (
                <div className={s.div}>
                    <p>We do not have any reviews for this movie yet.</p>
                </div>
            ) : (
                <ul className={s.list}>
                    {reviews?.results.map(({ id, author, content, created_at }) => {
                        return (
                            <li key={id} className={s.card}>
                                <h4 className={s.title}>{author}</h4>
                                <div className={s.datetime}>
                                    <p className={s.date}>{getCommentDate(created_at)}</p>
                                    <p className={s.time}>{getCommentTime(created_at)}</p>
                                </div>
                                <p className={s.text}>{parse(content)}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}

export default MovieReviews;
