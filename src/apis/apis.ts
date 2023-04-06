import axios from 'axios';
import { requests, tmdbInstance } from './tmdbRequests';

const BASE_URL = 'https://what-movie-server.vercel.app';

/** openai api에게 영화 추천 요청 수행과 응답으로 프라미스를 리턴 */
export const getRecommendations = async (prompt: string) => {
  const response = await axios.post(`${BASE_URL}/recommendations`, prompt);

  return response.data;
};

/** openai input 영역 뒷 배경 영역에 보여지는 영화의 정보를 랜덤하게 가져오는 함수 */
export const getRandomMovie = async () => {
  const response = await tmdbInstance.get(requests.fetchNowPlaying);

  /** 현재 상영작들의 정보를 받아와 랜덤하게 특정 영화를 선택하여 id값을 변수화 */
  const movieId =
    response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id;

  /** 인풋영역 배너 처리를 위해 필요한 랜덤하게 선택된 특정 영화의 상세 정보 가져오기 */
  const { data: movieDetail } = await tmdbInstance.get(`movie/${movieId}`, {
    // 참고: https://developers.themoviedb.org/3/getting-started/append-to-response
    params: {
      append_to_response: 'videos',
    },
  });

  return movieDetail;
};
