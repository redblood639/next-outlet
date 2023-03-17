import styled from "styled-components";

export const DashBoardWrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
`;

export const MenuWrapper = styled.div`
  width: 400px;
  height: 100%;
  background: #11192a;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 15px;

  box-sizing: border-box;
  padding: 30px 0;

  @media screen and (max-width: 1440px) {
    width: 300px;
  }
`;

export const MenuItem = styled.div`
  width: 90%;
  height: 71px;

  background: #1f2737;
  border-radius: 5px;

  cursor: pointer;
  box-sizing: border-box;
  padding: 0 0 0 50px;

  display: flex;
  align-items: center;

  &:hover {
    background: #2e384b;
  }
`;

export const DetailWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

export const DetailContent = styled.div`
  width: 90%;
  height: 90%;

  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
