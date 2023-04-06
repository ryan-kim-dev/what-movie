import styled from 'styled-components';

interface NavbarProps {
  show: boolean;
}

/** nav영역 전체의 nav 태그 */
export const Navbar = styled.nav<NavbarProps>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  padding: 5px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ show }) => (show ? 'black' : 'transparent')};

  img {
    width: 30px;
    height: 30px;
    background-color: ${({ show }) => (show ? '#fff' : 'transparent')};
  }

  // 애니메이션
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

/** navbar 영역 fixed 위치와 본문 영역 간섭을 막기 위한 div */
// export const Spacer = styled.div`
//   height: 40px;
//   background-color: transparent;
// `;
