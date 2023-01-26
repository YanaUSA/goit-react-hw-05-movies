import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/Movies/MovieDetails/MovieDetails';
import { Cast } from '../pages/Movies/MovieDetails/Cast/Cast';
import { Reviews } from '../pages/Movies/MovieDetails/Reviews/Reviews';
import { ErrorImage } from './ErrorImage/ErrorImage';

// const Home = lazy() => import second from 'first'

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<ErrorImage />}></Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </Layout>
  );
};
