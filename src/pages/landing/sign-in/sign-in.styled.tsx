import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  /*  */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  max-height: 100%;
  min-width: 100%;
  overflow: scroll;
`;

export const LoginCard = styled.div`
  position: relative;

  background: #ffffff;

  /*  */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;

  padding: 76px 80px 50px 80px;
  box-sizing: border-box;
`;

export const FormItem = styled.div`
  width: 100%;
`;
