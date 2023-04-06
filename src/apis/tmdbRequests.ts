import axios from 'axios';

export const tmdbInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
    language: 'ko-KR',
  },
});

/** TMDB API 요청들 */
export const requests = {
  fetchSearchResult: '/search/movie',
  fetchNowPlaying: '/movie/now_playing',
  fetchNetflixOriginals: '/discover/tv?_networks=213',
  fetchTrending: '/trending/all/week',
  fetchTopRated: '/movie/top_rated',
  fetchActionMovies: '/discover/movie?with_genres=28',
  fetchComedyMovies: '/discover/movie?with_genres=35',
  fetchHorrorMovies: '/discover/movie?with_genres=27',
  fetchRomanceMovies: '/discover/movie?with_genres=10749',
  fetchDocumentaries: '/discover/movie?with_genres=99',
};
