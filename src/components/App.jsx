import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Theme from '../components/Theme/Theme';
import { Layout } from './Layout/Layout';
import Spinner from '../components/Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('../pages/Movies/MovieDetails/Cast/Cast'));
const Reviews = lazy(() =>
  import('../pages/Movies/MovieDetails/Reviews/Reviews')
);
const MovieDetails = lazy(() =>
  import('../pages/Movies/MovieDetails/MovieDetails')
);
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Theme>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </Layout>
    </Theme>
  );
};
