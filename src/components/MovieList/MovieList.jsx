import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

function MovieList({ movieList }) {
    // const [movieCast, setMovieCast] = useState('');
    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             // const data = await fetchMovies();
    //             // const dataQ = await fetchMoviesByQuery(formatQuery('    cat     life    '));
    //             // const dataDetails = await fetchMovieDetails(12);
    //             // setDataDetails(dataDetails);
    //             // const dataReviews = await fetchMovieReviews(12);
    //             const dataCredits = await fetchMovieCredits(12);
    //             // console.log(data.results);
    //             // setMovieList(data.results);
    //             // console.log(dataQ.results);
    //             // console.log(dataDetails);
    //             // console.log(getImageUrl(dataDetails.imdb_id));
    //             // console.log(dataReviews.results);
    //             console.log(dataCredits.cast);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getData();
    // }, []);
    return (
        <ul className={s.list}>
            {movieList.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default MovieList;
