import { toast } from 'react-toastify';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingFilms = async () => {
  const searchParams = new URLSearchParams({
    api_key: 'f473c515ad1de0efd576d9ff7cafa2d6',
    page: 1,
  });

  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?${searchParams}`
    );

    return response.data.results;
  } catch (error) {
    toast.error('Something went wrong! An error occurred!', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
  }
};

// getTrendingFilms(76600);

export const getSearchedFilms = async query => {
  const searchParams = new URLSearchParams({
    api_key: 'f473c515ad1de0efd576d9ff7cafa2d6',
    query: `${query}`,
  });

  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?${searchParams}`
    );

    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieDetails = async movieId => {
  const searchParams = new URLSearchParams({
    api_key: 'f473c515ad1de0efd576d9ff7cafa2d6',
  });

  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?${searchParams}`
    );

    return response.data;
  } catch (error) {
    toast.error('Something went wrong! An error occurred!', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
  }
};

export const getMovieCast = async movieId => {
  const searchParams = new URLSearchParams({
    api_key: 'f473c515ad1de0efd576d9ff7cafa2d6',
  });

  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?${searchParams}`
    );

    console.log('getMovieCast', response.data.cast);

    return response.data.cast;
  } catch (error) {
    toast.error('Something went wrong! An error occurred!', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
  }
};

// getMovieCast(76600);

export const getReviews = async movieId => {
  const searchParams = new URLSearchParams({
    api_key: 'f473c515ad1de0efd576d9ff7cafa2d6',
  });

  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?${searchParams}`
    );

    console.log('response.data.reviews', response.data.results);

    return response.data.results;
  } catch (error) {
    toast.error('Something went wrong! An error occurred!', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
  }
};

// getReviews(76600);
