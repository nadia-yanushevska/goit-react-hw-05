import MovieList from '../../components/MovieList/MovieList';
import s from './MoviesPage.module.css';

function MoviesPage() {
    // input query
    return (
        <div className={s.div}>
            <h2>Movies</h2>
            <MovieList movieList={[]} />
        </div>
    );
}

export default MoviesPage;
