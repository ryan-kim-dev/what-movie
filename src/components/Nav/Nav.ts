import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }

  // 애니메이션
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const Spacer = styled.div`
  height: 30px;
`;
