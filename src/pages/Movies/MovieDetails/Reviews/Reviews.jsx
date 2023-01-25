import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../../../service-api/service-api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(Number(movieId)).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }
  console.log('reviews', reviews);
  return (
    <div>
      <ul>
        {reviews.map(({ content, author }) => (
          <li>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
