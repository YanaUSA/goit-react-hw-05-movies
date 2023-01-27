import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { getMovieDetails } from '../../../service-api/service-api';
import Spinner from '../../../components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(Number(movieId)).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  const linkItem = [
    { href: 'cast', name: 'Cast' },
    { href: 'reviews', name: 'Reviews' },
  ];

  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main style={{ padding: 20, backgroundColor: 'bisque' }}>
      <Link to={backLinkHref} style={{ border: 2, width: 200 }}>
        <BsArrowLeft />
        Go back
      </Link>
      <div>
        <img
          style={{ width: 200 }}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        Additional information:
        <ul>
          {linkItem.map(({ href, name }) => (
            <li key={href} style={{ padding: 10 }}>
              <Link to={href} state={{ from: backLinkHref }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
