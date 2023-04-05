import { useEffect, useState, useRef } from 'react';
import { getRecommendations } from '../../apis/apis';

function Input() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      const response = await getRecommendations(inputRef.current.value);
      setResponse(response);
      inputRef.current.value = '';
    } else {
      alert('값을 입력해주세요');
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt-input">
          <input
            type="text"
            placeholder="스트레스 풀기 좋은"
            id="prompt-input"
            ref={inputRef}
          />
        </label>
        <button type="submit">영화를 추천해줘</button>
      </form>

      <pre>{response}</pre>
    </>
  );
}

export default Input;
