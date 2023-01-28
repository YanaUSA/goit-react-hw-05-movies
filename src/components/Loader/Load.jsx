import {
  LoaderBox,
  Loader,
  LoaderContainer,
  LoaderFilm,
  LoaderFilmImg,
} from '../Loader/Load.styled';

export const CameraLoader = () => {
  return (
    <LoaderBox>
      <Loader>
        <LoaderContainer>
          <LoaderFilm>
            <LoaderFilmImg>
              src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1"
              alt=""
            </LoaderFilmImg>
            <LoaderFilmImg>
              src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1"
              alt=""
            </LoaderFilmImg>
          </LoaderFilm>
          <LoaderFilmImg>
            src="https://www.dropbox.com/s/348z6yvtt9hbos2/camera.png?raw=1"
            alt=""
          </LoaderFilmImg>
        </LoaderContainer>
      </Loader>
    </LoaderBox>
  );
};
