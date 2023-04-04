import styled from "styled-components";

export const ModalWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;

  justify-content: center;
  align-items: center;

  display: ${({ open }) => (open ? "flex" : "none")};
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  width: 550px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  box-sizing: border-box;
  padding: 35px;
  box-shadow: 0 10px 24px rgba(78, 78, 78, 0.2);
`;
