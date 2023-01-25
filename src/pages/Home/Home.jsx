import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingFilms } from '../../service-api/service-api';

export const Home = () => {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(setFilmData);
  }, []);

  return (
    <main style={{ padding: 20, backgroundColor: 'bisque' }}>
      <h1>Trending today</h1>
      <ul>
        {filmData.length > 0 &&
          filmData.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
