import styled from "styled-components";

export const StyledLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLoader = styled.div`
  width: 100px;
  height: 100px;
  display: grid;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    --c: radial-gradient(farthest-side, #36f47e 92%, #0000);
    background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%, var(--c) 0 50%;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    animation: s2 2s infinite;
  }

  &::before {
    margin: 8px;
    filter: hue-rotate(45deg);
    background-size: 16px 16px;
    animation-timing-function: linear;
  }

  @keyframes s2 {
    100% {
      transform: rotate(0.5turn);
    }
  }
`;

export const StyledLoaderError = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  background: #2ec065;
  border-radius: 50%;
  border: 4px solid white;

  &:before,
  &:after {
    position: absolute;
    content: "";
    width: 10%;
    left: 45%;
    top: 10%;
    height: 80%;
    background-color: white;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    animation: s2 1s infinite;
  }

  &:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    animation: s2 1s infinite;
  }

  @keyframes s2 {
    100% {
      transform: rotate(0.9turn);
    }
  }
`;
