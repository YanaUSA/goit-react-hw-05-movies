import styled from 'styled-components';

export const CastBox = styled.div`
  font-size: 14px;
  font-weight: 400;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const CastList = styled.ul`
  font-size: 14px;
  font-weight: 400;
  padding: 20px 0 0 20px;
`;

export const CastItem = styled.li`
  margin-bottom: 20px;
`;

export const CastImage = styled.img`
  width: 80px;
  object-fit: contain;
`;

export const CastName = styled.h4`
  font-size: 14px;
  font-weight: 700;
  padding-top: 20px;
`;

export const CastCharacter = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding-top: 10px;
`;
