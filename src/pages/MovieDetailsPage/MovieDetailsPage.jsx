import { useEffect, useState } from 'react';
import { getImageUrl } from '../../assets/helpers';
import s from './MovieDetailsPage.module.css';
import { Outlet, Link, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../api/TMDB';
import clsx from 'clsx';
import { useAPI } from '../../hooks/useAPI';

function MovieDetailsPage() {
    const { movieId } = useParams();
    console.log(movieId);
    const [movie] = useAPI(fetchMovieDetails, movieId);
    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             const dataDetails = await fetchMovieDetails(movieId);
    //             console.log(dataDetails);
    //             setMovie(dataDetails);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getData();
    // }, []);
    // const { title, backdrop_path, overview, vote_average, genres, release_date, tagline } = movie;
    return (
        movie && (
            <div className={s.card}>
                <h2 className={clsx(s.title, s.row)}>{movie.title}</h2>
                <div className={s.column}>
                    <img src={getImageUrl(movie.backdrop_path)} alt={movie.title} />
                </div>
                <div className={s.column}>
                    <h4 className={s.heading}>UserScore:</h4>
                    <p className={s.text}>{Math.round(movie.vote_average * 10)}%</p>
                    <h4 className={s.heading}>Overview:</h4>
                    <p className={s.text}>{movie.overview}</p>

                    <div className={s.flex}>
                        <div className={s.small_column}>
                            <h4 className={s.heading}>Tag:</h4>
                            <p className={clsx(s.text, s.tag)}>{movie.tagline}</p>
                            <h4 className={s.heading}>Release date:</h4>
                            <p className={s.text}>{movie.release_date}</p>
                        </div>

                        <div className={s.small_column}>
                            <h4 className={s.heading}>Genres:</h4>
                            <ul className={s.genre_list}>
                                {movie.genres.map(({ id, name }) => {
                                    return <li key={id}>{name}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <ul className={clsx(s.row, s.list)}>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        )
    );
}

export default MovieDetailsPage;
