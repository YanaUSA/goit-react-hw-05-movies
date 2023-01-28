import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingFilms } from '../../service-api/service-api';
import { MainTitle, FilmList } from './Home.styled';

const Home = () => {
  const [filmData, setFilmData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingFilms().then(response => {
      if (!response) {
        return;
      }

      const fetchedFilmData = response.map(({ id, title }) => ({
        id,
        title,
      }));
      setFilmData(fetchedFilmData);
    });
  }, []);

  return (
    <main>
      <MainTitle>Trending today</MainTitle>
      <FilmList>
        {filmData.length > 0 &&
          filmData.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </FilmList>
    </main>
  );
};

export default Home;
