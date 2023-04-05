import { useEffect, useState, useRef } from 'react';
import { getMovieRecommendations } from './apis/apis';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      const response = await getMovieRecommendations(inputRef.current.value);
      setResponse(response);
      inputRef.current.value = '';
    } else {
      alert('값을 입력해주세요');
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      {/* <Header />
      <Input /> */}
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="prompt-input">
            <input
              type="text"
              placeholder="ex) 스트레스 풀기 좋은"
              id="prompt-input"
              ref={inputRef}
            />
          </label>
          <button type="submit">영화를 추천해줘</button>
        </form>
      </div>
      <pre>{response}</pre>
    </>
  );
}

export default App;
