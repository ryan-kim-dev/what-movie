import styled from 'styled-components';
import { MovieDetails } from '../../types';

interface InputProps {
  movie: MovieDetails | undefined;
  stype?: string;
  children: React.ReactNode;
}

export const Header = styled.header<InputProps>`
  background-image: ${({ movie }) =>
    movie?.backdrop_path
      ? `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`
      : 'none'};
  background-position: top center;
  background-size: cover;

  color: #fff;
  object-fit: contain;
  height: 448px;

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

export const Content = styled.div``;
