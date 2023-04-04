import { useEffect } from 'react';
import { getMovies } from './apis/apis';

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};

const Input = () => {
  return <div>Input</div>;
};

function App() {
  useEffect(() => {
    getMovies().then((res) => console.log(res));
  }, []);

  return (
    <>
      <Header />
      <Input />
    </>
  );
}

export default App;
