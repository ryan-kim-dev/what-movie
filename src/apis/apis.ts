import axios from 'axios';

const BASE_URL = 'https://what-movie-server.vercel.app';

/** openai api에게 영화 추천 요청 수행과 응답으로 프라미스를 리턴 */
export const getMovieRecommendations = async (prompt: string) => {
  const response = await axios.post(`${BASE_URL}/recommendations`, prompt);

  return response.data;
};
