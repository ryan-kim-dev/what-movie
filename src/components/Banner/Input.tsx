import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getRecommendations } from '../../apis/apis';
import { setRecommendation } from '../../redux/reducer';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
function Input() {
  // Input 컴포넌트의 뒷 배경 이미지의 영화 정보 state
  // 영화 추천 키워드 input의 ref
  const inputRef = useRef<HTMLInputElement>(null);
  // 타 컴포넌트로 추천목록을 보내기 위한 redux의 dispatch
  const dispatch = useDispatch();

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
        <img src={logo} alt="logo" />
        <div className="input-wrapper">
          <label htmlFor="prompt-input">
            <input
              type="text"
              placeholder="스트레스 풀기 좋은"
              id="prompt-input"
              ref={inputRef}
            />
          </label>
          <Button type="submit">영화를 추천해줘</Button>
        </div>
      </Form>
    </>
  );
}

export default Input;

const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 100px;
    height: 100px;
  }

  .input-wrapper {
    display: flex;
    @media (max-width: 480px) {
      flex-direction: column;
  }

  input {
    padding: 10px;
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, #ff4f5c, #2eadfd);
  border: none;
  padding: 11px;
`;
