import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #eaeef6;
`;

export const StyledContainer = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const StyledModalTitle = styled.div`
  & h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`;

export const StyledModalFormLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & Input:not(:last-child) {
    margin-bottom: 7px;
  }

  & Button {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 500;
  }
`;

export const StyledModalFormGroup = styled.div`
  text-align: center;

  & p,
  & a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  & a {
    text-decoration: underline;
  }
`;
