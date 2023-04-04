import styled from "styled-components";

export const DashBoardWrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
`;

export const MenuWrapper = styled.div`
  width: 300px;
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
`;

export const GameCardWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

export const GameCardContent = styled.div`
  width: 90%;
  height: 90%;
  padding: 30px;

  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: start;
  justify-items: center;
  grid-gap: 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  overflow: auto;
`;
