import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.$width};
  height: 30px;
  border-radius: 4px;
  background-color: ${(props) => (props.$inverted ? "transparent" : "#565eef")};
  color: ${(props) => (props.$inverted ? "#565eef" : "#ffffff")};
  border: ${(props) => (props.$inverted ? "1px solid #565eef" : " none")};
  font-size: 14px;
  line-height: 1;
  font-weight: 500;

  & * {
    color: ${(props) => (props.$inverted ? "#565eef" : "#ffffff")};
  }
`;
