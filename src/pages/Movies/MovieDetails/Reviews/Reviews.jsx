import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../../../service-api/service-api';
import {
  ReviewBox,
  ReviewList,
  ReviewItem,
  ReviewText,
  ReviewAuthor,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(Number(movieId)).then(response => {
      if (!response) {
        return;
      }

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
    <ReviewBox>
      {!reviews.length && <p>We don't have any reviews for this movie.</p>}
      <ReviewList>
        {reviews.map(({ id, content, author }) => (
          <ReviewItem key={id}>
            <ReviewAuthor>Author: {author}</ReviewAuthor>
            <ReviewText>{content}</ReviewText>
          </ReviewItem>
        ))}
      </ReviewList>
    </ReviewBox>
  );
};

export default Reviews;
