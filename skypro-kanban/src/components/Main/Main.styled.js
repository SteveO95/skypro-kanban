import styled from "styled-components";
import { breakpoints } from "../../Global.styled";

export const StyledMain = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const StyledMainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const StyledMainContent = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${breakpoints.xl}px) {
    display: block;
  }
`;
