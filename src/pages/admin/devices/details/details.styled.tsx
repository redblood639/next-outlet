import styled from "styled-components";

export const DetailWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 42px 24px 20px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentFooter = styled.div`
  box-sizing: border-box;
  border-top: 1px solid #aaa4a4;
  padding: 35px 0;

  display: flex;
  justify-content: center;
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 50px 110px;
  & > div {
    width: 50%;
    font-size: 30px;
    line-height: 36px;

    @media screen and (max-width: 1440px) {
      font-size: calc(30px * 0.7);
    }
    table {
      border-spacing: 15px;
      text-align: left;
      tr {
        td:nth-child(odd) {
          font-weight: 700;
        }
      }
    }
  }
`;
