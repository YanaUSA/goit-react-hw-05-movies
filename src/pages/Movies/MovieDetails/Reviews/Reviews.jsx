import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../../../service-api/service-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(Number(movieId)).then(response => {
      const fetchedReviewsData = response.map(({ id, content, author }) => ({
        id,
        content,
        author,
      }));
      setReviews(fetchedReviewsData);
    });
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <div>
      {!reviews.length && <p>We don't have any reviews for this movie.</p>}
      <ul>
        {reviews.map(({ id, content, author }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
