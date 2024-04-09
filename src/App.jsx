import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';

import Layout from './components/Layout/Layout';

import './App.css';
import { fetchMovieCredits, fetchMovieDetails, fetchMovieReviews, fetchMovies, fetchMoviesByQuery } from './api/TMDB';
import { formatQuery, getImageUrl } from './assets/helpers';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));

function App() {
    return (
        <>
            <Navigation />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/movies" element={<MoviesPage />} />
                        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                            <Route path="" element={<Layout />}>
                                <Route path="cast" element={<MovieCast />} />
                                <Route path="reviews" element={<MovieReviews />} />
                            </Route>
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
