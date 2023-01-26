import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingFilms } from '../../service-api/service-api';

export const Home = () => {
  const [filmData, setFilmData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingFilms().then(response => {
      const fetchedFilmData = response.map(({ id, title }) => ({
        id,
        title,
      }));
      setFilmData(fetchedFilmData);
    });
  }, []);

  return (
    <main style={{ padding: 20, backgroundColor: 'bisque' }}>
      <h1>Trending today</h1>
      <ul>
        {filmData.length > 0 &&
          filmData.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
