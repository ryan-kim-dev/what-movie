import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Row() {
  const recommendations = useSelector(
    (state: any) => state.recommendation.recommendations,
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
  );

  const moviesArray = recommendations
    .split(/\d+\.\s+/)
    .slice(1)
    .map((movie: string) => movie.replace(/\s*\(.+?\)\s*/, ''));

  useEffect(() => {}, []);

  return (
    <>
      <pre>{recommendations}</pre>
    </>
  );
}

export default Row;
