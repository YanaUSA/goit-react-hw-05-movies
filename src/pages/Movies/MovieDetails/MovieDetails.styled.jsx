import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  padding-left: 38px;
`;

export const GoBackLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
`;

export const GoBackBox = styled.div`
  width: 80px;
  font-size: 14px;
  font-weight: 700;
  margin: 10px 0 10px 38px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MovieBox = styled.div`
  display: flex;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MovieContentBox = styled.div`
  padding-left: 20px;
`;

export const MovieImage = styled.img`
  width: 200px;
  object-fit: contain;
`;

export const MovieTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  padding-top: 20px;
`;

export const MovieDetailsText = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding-top: 20px;
  padding-top: 20px;
`;

export const MovieDetailsTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  padding-top: 20px;
`;

export const GenresList = styled.ul`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  padding-top: 20px;
`;

export const AddInfoBox = styled.div`
  font-size: 14px;
  font-weight: 400;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const AddInfoContext = styled.div`
  padding-left: 20px;
`;
