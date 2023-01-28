import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../../../service-api/service-api';
import noImage from '../../../../components/Images/no-img.jpg';
import {
  CastBox,
  CastList,
  CastItem,
  CastImage,
  CastName,
  CastCharacter,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(Number(movieId)).then(response => {
      if (!response) {
        return;
      }

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
    <CastBox>
      <CastList>
        {cast.map(({ id, profile_path, name, character }) => (
          <CastItem key={id}>
            {!profile_path ? (
              <CastImage src={noImage} alt={`${'No image available'}`} />
            ) : (
              <CastImage
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt={name}
              />
            )}

            <CastName>{name}</CastName>
            <CastCharacter>Character: {character}</CastCharacter>
          </CastItem>
        ))}
      </CastList>
    </CastBox>
  );
};

export default Cast;
