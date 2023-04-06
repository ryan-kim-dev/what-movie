import { useState, useEffect } from 'react';
import { Header, Content } from './Banner';
import Input from './Input';
import { getRandomMovie } from '../../apis/apis';

function Banner() {
  const [movie, setMovie]: any = useState({});
  const parseMovieDetail = async () => {
    const response = await getRandomMovie();
    console.log(response, typeof response);
    setMovie(response);
  };

  const truncateTexts = (text: string, limit: number) => {
    return text.length > limit ? text.substr(0, limit - 1) + '...' : text;
  };

  useEffect(() => {
    parseMovieDetail();
  }, []);
  return (
    <Header
      movie={movie}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <Content>
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <div>
          <button className="play">Play</button>
          <button className="info">영화 정보</button>
        </div>

        <p className="description">{truncateTexts(movie.overview, 100)}</p>

        <div className="fade-bottom" />
      </Content>

      <Input />
    </Header>
  );
}

export default Banner;