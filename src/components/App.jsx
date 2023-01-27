import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { ErrorImage } from '../components/ErrorImage/ErrorImage';

const Cast = lazy(() => import('../pages/Movies/MovieDetails/Cast/Cast'));
const Reviews = lazy(() =>
  import('../pages/Movies/MovieDetails/Reviews/Reviews')
);
const MovieDetails = lazy(() =>
  import('../pages/Movies/MovieDetails/MovieDetails')
);

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
