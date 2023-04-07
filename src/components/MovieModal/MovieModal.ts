import styled from 'styled-components';
export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgb(0 0 0 / 71%);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
  z-index: 1;

  @media screen and (max-height: 768px) {
    align-items: unset;
    padding-top: 2rem;
    padding: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  z-index: 1;
  color: white;
  background-color: transparent;
  border: none;
  font-size: 20px;
`;

export const ModalPoster = styled.img`
  width: 100%;
  height: auto;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 800px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: #111;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;

  ::-webkit-scrollbar {
    display: none;
    visibility: hidden;
  }
  -ms-overflow-style: none; /* IE and Edge 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox 스크롤바 숨기기 */
  padding: 40px;
  color: white;

  @media screen and (max-width: 768px) {
    overflow-y: scroll;
  }
`;

export const ModalTitle = styled.h2`
  padding: 0;
  font-size: 40px;
  margin: 16px 0;
`;

export const ModalDetails = styled.p`
  font-weight: 600;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ModalOverview = styled.p`
  font-size: 20px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ModalUserScore = styled.span`
  color: #46d369;
`;
