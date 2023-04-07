// Row 컴포넌트에서 moviesArray 상태를 관리하기 위한 useState 추가
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSearchedMovie } from '../../apis/apis';
import { ResultSection, ResultList, ResultItem } from './Results';

function Results() {
  const [searchedMovies, setSearchedMovies]: any = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleItemClick = () => {
    setOpenModal((prev: boolean) => !prev);
  };

  const recommendations = useSelector(
    (state: any) => state.recommendation.recommendations,
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
  );

  const moviesArray = recommendations
    .split(/\d+\.\s+/)
    .slice(1)
    .map((movie: string) => movie.replace(/\s*\(.+?\)\s*/, ''));

  useEffect(() => {
    console.log('fired');

    const fetchMoviesArray = async () => {
      const movies = await Promise.all(
        moviesArray.map(async (movieTitle: string) => {
          const movie = await getSearchedMovie(movieTitle);
          return movie;
        })
      );
      setSearchedMovies(movies);
    };
    if (moviesArray.length !== 0 && searchedMovies.length === 0)
      fetchMoviesArray();
  }, [moviesArray, searchedMovies]);

  return (
    // moviesArray를 이용하여 검색 결과를 렌더링
    <ResultSection>
      <ResultList>
        {searchedMovies.length !== 0 &&
          searchedMovies.map((movie: any) => (
            <ResultItem key={Math.random()} onClick={handleItemClick}>
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  movie && movie.backdrop_path
                }`}
                alt="movie poster"
              />
              <h3>{movie && movie.title}</h3>
            </ResultItem>
          ))}
      </ResultList>
    </ResultSection>
  );
}

export default Results;

/**
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
