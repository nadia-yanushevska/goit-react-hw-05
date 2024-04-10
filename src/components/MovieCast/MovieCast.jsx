import { useParams } from 'react-router-dom';

import { useAPI } from '../../hooks/useAPI';
import { fetchMovieCredits } from '../../api/TMDB';
import { getImageUrl } from '../../assets/helpers';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';

import s from './MovieCast.module.css';

function MovieCast() {
    const { movieId } = useParams();
    const [movieCredits, , { loading, error }] = useAPI(fetchMovieCredits, movieId);
    console.log(movieCredits);
    return (
        <>
            {loading && <Loader />}
            {error && <Error />}
            {movieCredits?.cast.length === 0 ? (
                <div className={s.div}>
                    <p>No cast available.</p>
                </div>
            ) : (
                <ul className={s.list}>
                    {movieCredits?.cast.map(({ id, name, character, profile_path }) => {
                        return (
                            <li key={id} className={s.item}>
                                <div className={s.content}>
                                    <h4>{name}</h4>
                                    <p>Character: {character}</p>
                                </div>
                                <img src={getImageUrl(profile_path)} alt={name} className={s.img} />
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}

export default MovieCast;
