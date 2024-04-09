import axios from 'axios';

const API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlODRjMTNmZTRhM2NlOTQxOWUxYTEzNmNhZmRlYSIsInN1YiI6IjY2MTUxY2IxMTVhNGExMDE0YWY3ZDY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Ve4BxZ9RDwxc_21AWMU2B_1i23w7-lW30PCnKoR2Zk`;

const options = {
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
};

async function getMovies(url) {
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function fetchMovies() {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    return getMovies(url);
}

export async function fetchMoviesByQuery(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    return getMovies(url);
}

export async function fetchMovieDetails(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    return getMovies(url);
}

export async function fetchMovieCredits(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    return getMovies(url);
}

export async function fetchMovieReviews(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
    return getMovies(url);
}
