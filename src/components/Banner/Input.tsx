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
          <Button type="submit">영화 추천해줘</Button>
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
    width: 200px;
    height: 200px;
  }

  .input-wrapper {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    input {
      width: 150px;
      padding: 10px;
    }
  }

  input {
    font-size: 1.5rem;
    width: 300px;
    padding: 20px;
    opacity: 0.9;
    border: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  background: linear-gradient(to right, #ff4f5c, #2eadfd);
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
  border: none;
  padding: 20px 40px;

  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;
