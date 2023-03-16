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
`;

export const DetailWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

export const DetailContent = styled.div`
  width: 1359px;
  height: 811px;

  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
