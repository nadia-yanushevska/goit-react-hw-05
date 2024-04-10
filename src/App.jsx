import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import './App.css';

import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));

function App() {
    //TODO remove comment and logs!!
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
