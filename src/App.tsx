import axios from 'axios';
import { useEffect, useState } from 'react';
// import { getMovies, queryToOpenai } from './apis/apis';

// const Header = () => {
//   return (
//     <header>
//       <h1>Header</h1>
//     </header>
//   );
// };

// const Input = () => {
//   return <div>Input</div>;
// };

function App() {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<any>('');
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post('https://what-movie-server.vercel.app/recommendations', { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    // getMovies().then((res) => console.log(res));
  }, []);

  return (
    <>
      {/* <Header />
      <Input /> */}
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <input
              type="text"
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="ex) 스트레스 풀기 좋은"
            />
          </label>
          <button type="submit">영화를 추천해줘</button>
        </form>
      </div>
    </>
  );
}

export default App;
