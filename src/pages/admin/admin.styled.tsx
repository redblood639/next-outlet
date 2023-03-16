import styled from "styled-components";
import UserImg from "@/assets/images/user.png";

export const AdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*   */
  height: 100px;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 0 0 100px;
  gap: 100px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${UserImg});
  /* pointer cursor */
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
  right: 10px;
  top: 80px;
  width: 362px;
  height: 480px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 120px;

  background: #e7e8ea;
  border-radius: 10px 10px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  display: flex;
  justify-content: center;
  box-sizing: border-box;
  & > div {
    width: 309px;
    height: 57px;

    cursor: pointer;

    padding: 0 10px;
    box-sizing: border-box;
    background: #f5f2f2;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background: #dddada;
    }
  }
`;

export const ModalFooter = styled.div`
  padding: 26px 90px;
  text-align: center;
  box-sizing: border-box;
  border-top: 1px solid #aaa4a4;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    cursor: pointer;
  }
`;
