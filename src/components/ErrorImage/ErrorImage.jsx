import { Navigate } from 'react-router-dom';
import image from '../ErrorImage/404_pages.jpg';
import { ErrorContainer } from './ErrorImage.styled';
import { Home } from '../../pages/Home/Home';

export const ErrorImage = () => {
  return (
    <ErrorContainer>
      <Navigate to="/home" element={<Home />} />
      <img src={image} alt="error 404" style={{ borderRadius: '5px' }} />
    </ErrorContainer>
  );
};
