import { useAPI } from '../../hooks/useAPI';
import { fetchMovies } from '../../api/TMDB';

import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

import s from './HomePage.module.css';

function HomePage() {
    const [movieList, , { loading, error }] = useAPI(fetchMovies);
    return (
        <div>
            <h2 className={s.title}>Trending now</h2>
            {loading && <Loader />}
            {error && <Error />}
            {movieList && <MovieList movieList={movieList.results} />}
        </div>
    );
}

export default HomePage;
