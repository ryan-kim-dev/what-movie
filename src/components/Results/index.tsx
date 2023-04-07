// Row 컴포넌트에서 moviesArray 상태를 관리하기 위한 useState 추가
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSearchedMovie } from '../../apis/apis';
import { ResultSection, ResultList, ResultItem } from './Results';
import { MovieModalProps } from '../../types';

function Results() {
  const [searchedMovies, setSearchedMovies] = useState<MovieModalProps[]>([]);
  const [openModal, setOpenModal] = useState(false);

  /** 추천 영화 클릭 시 상세정보 모달 팝업 onClick 핸들러 */
  const handleItemClick = (movie: MovieModalProps) => {
    console.log(movie);
    setOpenModal((prev: boolean) => !prev);
  };

  /** redux store의 추천 영화 목록 state를 가져오기 위한 useSelector */
  const recommendations = useSelector(
    (state: { recommendation: { recommendations: string } }) =>
      state.recommendation.recommendations,
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
  );

  /** 추천 영화 목록 전체의 string에서 각각의 영화를 요소로 분리한 배열로 변환 */
  const moviesArray: string[] = recommendations
    .split(/\d+\.\s+/)
    .slice(1)
    .map((movie: string) => movie.replace(/\s*\(.+?\)\s*/, ''));

  /** 추천 영화 목록을 이용하여 영화 검색 후 화면에 렌더링 */
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
    <ResultSection>
      <ResultList>
        {searchedMovies.length !== 0 &&
          searchedMovies.map((movie: MovieModalProps) => (
            <ResultItem
              key={Math.random()}
              onClick={() => handleItemClick(movie)}
            >
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
