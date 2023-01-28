import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }`;

const LoaderBox = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: ${rotate};
  }
`;

const Loader = styled.div`
   {
    display: flex;
    justify-content: center;
  }
`;

const LoaderContainer = styled.div`
   {
    position: relative;
    display: flex;
    align-items: center;
    height: 40px;
  }
`;

const LoaderFilm = styled.div`
   {
    position: absolute;
    top: -30px;
    left: 0;
    display: flex;
  }
`;

const LoaderFilmImg = styled.div`
   {
    animation: rotate 1.5s linear infinite;
  }
`;

export { LoaderBox, Loader, LoaderContainer, LoaderFilm, LoaderFilmImg };
