import axios from 'axios';

export const getMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  );

  return response.data;
};
