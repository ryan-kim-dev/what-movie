import { searchedMovieProps } from '../../types';

interface MovieModalProps {
  movie?: searchedMovieProps;
  setModalOpen?: (movie: searchedMovieProps) => void;
}

function MovieModal({ movie, setModalOpen }: MovieModalProps) {
  return <div>MovieModal</div>;
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
