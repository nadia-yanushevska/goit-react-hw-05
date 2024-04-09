import MovieList from '../../components/MovieList/MovieList';
import s from './MoviesPage.module.css';

function MoviesPage() {
    return (
        <div className={s.div}>
            <h2>Movies</h2>
            <MovieList />
        </div>
    );
}

export default MoviesPage;
