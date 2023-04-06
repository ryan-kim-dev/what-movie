import { useState, useRef } from 'react';
import { getRecommendations } from '../../apis/apis';
import styled from 'styled-components';

function Input() {
  // Input 컴포넌트의 뒷 배경 이미지의 영화 정보 state
  // 영화 추천 키워드 input의 ref
  const inputRef = useRef<HTMLInputElement>(null);
  // recommendations : opeanai 추천 영화 목록의 state
  const [recommendations, setRecommendations] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      const response = await getRecommendations(inputRef.current.value);
      setRecommendations(response);
      inputRef.current.value = '';
    } else {
      alert('값을 입력해주세요');
    }
  };

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

      <pre>{recommendations}</pre>
    </>
  );
}

export default Input;
