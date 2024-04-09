import { useEffect, useState } from 'react';

export function useAPI(callback, param) {
    const [data, setData] = useState();

    useEffect(() => {
        async function getData() {
            try {
                setData(await callback(param));
                // const data = await fetchMovies();
                // const dataQ = await fetchMoviesByQuery(formatQuery('    cat     life    '));
                // const dataDetails = await fetchMovieDetails(12);
                // setDataDetails(dataDetails);
                // const dataReviews = await fetchMovieReviews(12);
                // const dataCredits = await fetchMovieCredits(12);
                // console.log(data.results);
                // setMovieList(data.results);
                // console.log(dataQ.results);
                // console.log(dataDetails);
                // console.log(getImageUrl(dataDetails.imdb_id));
                // console.log(dataReviews.results);
                // console.log(dataCredits.cast);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);
    return [data, setData];
}