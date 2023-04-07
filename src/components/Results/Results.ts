import styled from 'styled-components';

export const ResultSection = styled.section`
  background-color: transparent;
`;

export const ResultList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ResultItem = styled.li`
  cursor: pointer;
  width: 25%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
  }

  img {
    width: 100%;
  }

  h3 {
    padding: 1rem 0;
    color: white;
  }
`;
