import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import noImage from '../../../components/Images/no-img.jpg';
import {
  MovieDetailsContainer,
  GoBackLink,
  GoBackBox,
  MovieContentBox,
  MovieBox,
  MovieImage,
  MovieTitle,
  MovieDetailsTitle,
  GenresList,
  MovieDetailsText,
  AddInfoBox,
  AddInfoContext,
} from './MovieDetails.styled';
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
    <main>
      {' '}
      <GoBackBox>
        <GoBackLink to={backLinkHref}>
          <BsArrowLeft style={{ marginRight: 4 }} />
          Go back
        </GoBackLink>
      </GoBackBox>
      <MovieDetailsContainer>
        <MovieBox>
          {!poster_path ? (
            <MovieImage src={noImage} alt={`${'No image available'}`} />
          ) : (
            <MovieImage
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={title}
            />
          )}
          <MovieContentBox>
            <MovieTitle>{title}</MovieTitle>
            <MovieDetailsText>
              User score: {Math.round(vote_average * 10)}%
            </MovieDetailsText>
            <MovieDetailsTitle>Overview</MovieDetailsTitle>
            <MovieDetailsText>{overview}</MovieDetailsText>
            <MovieDetailsTitle>Genres</MovieDetailsTitle>
            <GenresList>
              {genres.map(({ id, name }) => (
                <li key={id} style={{ paddingRight: 14 }}>
                  {name}
                </li>
              ))}
            </GenresList>
          </MovieContentBox>
        </MovieBox>
        <AddInfoBox>
          <AddInfoContext>
            <MovieDetailsText>Additional information:</MovieDetailsText>
            <ul>
              {linkItem.map(({ href, name }) => (
                <li key={href} style={{ padding: 10 }}>
                  <Link to={href} state={{ from: backLinkHref }}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </AddInfoContext>
        </AddInfoBox>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </MovieDetailsContainer>
    </main>
  );
};

export default MovieDetails;
