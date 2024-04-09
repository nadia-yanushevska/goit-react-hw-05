import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';
import { fetchMovies } from '../../api/TMDB';

function HomePage() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        async function getData() {
            try {
                const data = await fetchMovies();
                console.log(data.results);
                setMovieList(data.results);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);
    return (
        <div>
            <h2 className={s.title}>Trending now</h2>
            <MovieList movieList={movieList} />
        </div>
    );
}

export default HomePage;
