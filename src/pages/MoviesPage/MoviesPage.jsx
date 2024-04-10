import { useAPI } from '../../hooks/useAPI';
import { fetchMoviesByQuery } from '../../api/TMDB';
import { useSearchParams } from 'react-router-dom';

import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

import s from './MoviesPage.module.css';

function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieList, setMovieList, { loading, error }] = useAPI(fetchMoviesByQuery, searchParams.get('query'));

    function handleSearch(e) {
        setSearchParams({ query: e.target.value });
        setMovieList();
    }
    return (
        <div className={s.div}>
            <div className={s.search}>
                <input type="text" placeholder="Search movies" value={searchParams.get('query')} className={s.input} onChange={handleSearch} />
            </div>
            {loading && <Loader />}
            {error && <Error />}
            {searchParams.get('query') && movieList ? (
                movieList?.total_results === 0 ? (
                    <p>No movies found matching &#x0022;{searchParams.get('query')}&#x0022;</p>
                ) : (
                    <MovieList movieList={movieList.results} />
                )
            ) : (
                ''
            )}
        </div>
    );
}

export default MoviesPage;
