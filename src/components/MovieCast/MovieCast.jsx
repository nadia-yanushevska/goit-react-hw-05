import { fetchMovieCredits } from '../../api/TMDB';
import { getImageUrl } from '../../assets/helpers';
import { useAPI } from '../../hooks/useAPI';
import s from './MovieCast.module.css';
import { useParams } from 'react-router-dom';

function MovieCast() {
    const { movieId } = useParams();
    const [movieCredits] = useAPI(fetchMovieCredits, movieId);
    console.log(movieCredits);
    return (
        <>
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
        </>
    );
}

export default MovieCast;
