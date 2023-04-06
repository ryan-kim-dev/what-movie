import styled from 'styled-components';
import { MovieDetails } from '../../types';

interface InputProps {
  movie: MovieDetails | undefined;
  stype?: string;
  children: React.ReactNode;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  .close-video {
    position: absolute;
    bottom: 5%;
  }
`;

export const VideoBanner = styled.div`
  width: 100%;
  height: 100%;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.header<InputProps>`
  background-image: ${({ movie }) =>
    movie?.backdrop_path
      ? `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`
      : 'none'};
  background-position: top center;
  background-size: cover;
  color: rgba(255, 255, 255, 0.4);
  object-fit: contain;
  height: 448px;
  width: 100vw;

  // * 반응형 대응 미디어 쿼리
  @media (min-width: 1500px) {
    position: relative;
    height: 600px;

    .fade-bottom {
      position: absolute;
      bottom: 0;
      width: 100px;
      height: 40rem;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  height: 448px;
  width: 100%;
  z-index: 1;
  display: flex;

  h1 {
    color: #fff;
    font-size: 2rem;
    letter-spacing: 1.2px;
    z-index: -1;
  }

  .content-position {
    position: absolute;
    left: 2%;
    bottom: 10%;
  }

  @media (max-width: 480px) {
    p {
      display: none;
    }

    .content-position {
      top: 15%;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin: 5px;
  width: max-content;
  height: max-content;
  button {
    font-size: 13px;
    border: none;
    /* opacity: 0.9; */
  }

  .play {
    background-color: #555;
    color: #fff;
  }

  .info {
  }
`;
