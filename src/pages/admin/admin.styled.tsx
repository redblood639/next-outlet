import styled from "styled-components";

export const AdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*   */
  height: 80px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const UserInfoWrapper = styled.div`
  padding: 0px 20px;
  cursor: pointer;
`;

export const ModalWrapper = styled.div<{ modalMenu: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: ${({ modalMenu }) => (modalMenu ? "block" : "none")};
  z-index: 2;
`;

export const ModalMenu = styled.div`
  position: absolute;
  right: 20px;
  top: 60px;
  padding: 20px 30px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & > *:first-child {
    padding-right: 10px;
  }
`;
