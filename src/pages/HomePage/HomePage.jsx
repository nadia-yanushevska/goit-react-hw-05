import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';
import { fetchMovies } from '../../api/TMDB';
import { useAPI } from '../../hooks/useAPI';

function HomePage() {
    const [movieList] = useAPI(fetchMovies);
    return (
        <div>
            <h2 className={s.title}>Trending now</h2>
            {movieList && <MovieList movieList={movieList.results} />}
        </div>
    );
}

export default HomePage;
