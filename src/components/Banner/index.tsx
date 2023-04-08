import { useState, useEffect } from 'react';
import {
  Container,
  VideoBanner,
  Iframe,
  Header,
  Content,
  Buttons,
} from './Banner';
import Input from './Input';
import MovieModal from '../MovieModal';
import { getRandomMovie } from '../../apis/apis';
import { BsFillPlayFill } from 'react-icons/bs';

function Banner() {
  // 영화 상세 정보 state
  const [movie, setMovie]: any = useState({});
  // 영화 상세정보 모달 팝업 state
  const [openModal, setOpenModal] = useState(false);
  // 비디오 배너의 오픈 상태 state
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    parseMovieDetail();
  }, []);

  const parseMovieDetail = async () => {
    const response = await getRandomMovie();
    setMovie(response);
  };

  const truncateTexts = (text: string, limit: number) => {
    return text?.length > limit ? text.substr(0, limit - 1) + '...' : text;
  };

  const handlePlayButton = () => {
    setIsClicked((prev) => !prev);
  };

  const handleInfoButton = () => {
    setOpenModal((prev) => !prev);
  };

  if (!isClicked) {
    return (
      <>
        <Header
          movie={movie}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
          }}
        >
          <Content>
            <div className="content-position">
              <h1>{movie.title || movie.name || movie.original_name}</h1>
              <Buttons>
                <button className="play" onClick={handlePlayButton}>
                  <BsFillPlayFill />
                  Play
                </button>
                <button className="info" onClick={handleInfoButton}>
                  영화 정보
                </button>
              </Buttons>

              {truncateTexts(movie.overview, 100)
                ?.split('. ')
                .map((line: string, index: number) => (
                  <p key={index}>{line}</p>
                ))}

              <div className="fade-bottom" />
            </div>
          </Content>

          <Input />
        </Header>
        {openModal && movie && (
          <MovieModal {...movie} setOpenModal={setOpenModal} />
        )}
      </>
    );
  } else {
    return (
      <Container>
        <VideoBanner>
          <Iframe
            src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie?.videos?.results[0]?.key}`}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen;"
            allowFullScreen
          />
        </VideoBanner>
        <button onClick={handlePlayButton} className="close-video">
          돌아가기
        </button>
      </Container>
    );
  }
}

export default Banner;
