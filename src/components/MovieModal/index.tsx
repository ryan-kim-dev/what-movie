import { searchedMovieProps } from '../../types';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ModalWrapper,
  ModalCloseButton,
  ModalPoster,
  ModalContent,
  ModalTitle,
  ModalDetails,
  ModalOverview,
  ModalUserScore,
} from './MovieModal';

function MovieModal({
  backdrop_path,
  title,
  overview,
  popularity,
  release_date,
  vote_average,
  setOpenModal,
}: searchedMovieProps) {
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalCloseButton onClick={() => setOpenModal(false)}>
          <AiOutlineClose />
        </ModalCloseButton>
        <ModalPoster
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt="selected movie poster"
        />
        <ModalDetails>
          <ModalUserScore>추천도: {popularity}% </ModalUserScore>
          {release_date}
        </ModalDetails>
        <ModalTitle>{title}</ModalTitle>
        <ModalOverview>평점: {vote_average}</ModalOverview>
        <ModalOverview>{overview}</ModalOverview>
      </ModalContent>
    </ModalWrapper>
  );
}

export default MovieModal;

/** props
 {
  adult, 
  backdrop_path, 
  genre_ids, 
  id, 
  original_language, 
  original_title, 
  overview, 
  popularity, 
  poster_path, 
  release_date, 
  title, 
  video, 
  vote_average, 
  vote_count
}
 */
