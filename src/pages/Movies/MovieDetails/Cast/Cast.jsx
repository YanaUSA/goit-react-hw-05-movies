import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../../../service-api/service-api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(Number(movieId)).then(setCast);
  }, [movieId]);
  if (!cast) {
    return null;
  }
  console.log('cast', cast);
  return (
    <div>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img src={profile_path} alt={name} />
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
