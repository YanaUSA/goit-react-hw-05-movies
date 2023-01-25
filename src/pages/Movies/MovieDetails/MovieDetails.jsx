import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../../service-api/service-api';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

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

  return (
    <main style={{ padding: 20, backgroundColor: 'bisque' }}>
      {/* <Link to="movies"></Link> */}
      <div>
        <img src={poster_path} alt={title} />
        <h2>{title}</h2>
        <p>User score: {vote_average}</p>
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
              <Link to={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
