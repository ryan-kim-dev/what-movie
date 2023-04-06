import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendations } from '../../apis/apis';
import { setRecommendation } from '../../redux/reducer';
import styled from 'styled-components';

function Input() {
  // Input 컴포넌트의 뒷 배경 이미지의 영화 정보 state
  // 영화 추천 키워드 input의 ref
  const inputRef = useRef<HTMLInputElement>(null);
  // 타 컴포넌트로 추천목록을 보내기 위한 redux의 dispatch
  const dispatch = useDispatch();
  const recommendations = useSelector(
    (state: any) => state.recommendations?.value
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      const response = await getRecommendations(inputRef.current.value);
      dispatch(setRecommendation(response));
      inputRef.current.value = '';
    } else {
      alert('값을 입력해주세요');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="prompt-input">
          <input
            type="text"
            placeholder="스트레스 풀기 좋은"
            id="prompt-input"
            ref={inputRef}
          />
        </label>
        <button type="submit">영화를 추천해줘</button>
      </Form>

      <pre>{recommendations}</pre>
    </>
  );
}

export default Input;

const Form = styled.form``;
