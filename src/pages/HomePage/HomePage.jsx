import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';

function HomePage() {
    return (
        <div className={s.div}>
            <h2>Home</h2>
            <MovieList />
        </div>
    );
}

export default HomePage;
