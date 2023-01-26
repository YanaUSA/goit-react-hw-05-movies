import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../../../service-api/service-api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(Number(movieId)).then(response => {
      const fetchedCastData = response.map(
        ({ id, profile_path, name, character }) => ({
          id,
          profile_path,
          name,
          character,
        })
      );
      setCast(fetchedCastData);
    });
  }, [movieId]);
  if (!cast) {
    return null;
  }

  return (
    <div>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              style={{ width: 50 }}
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={name}
            />
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
