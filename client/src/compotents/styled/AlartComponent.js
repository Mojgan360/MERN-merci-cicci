import styled, { keyframes } from "styled-components";
const coolBoxKeyframes = keyframes`
  0% {
    opacity:0;
    height: 0px;
    font-size: 0.1rem;
  }
  100% {
     opacity:1;
   height: 70px;
    font-size: 2rem;
  }
`;
export const AlertComponent = styled.div`
  position: relative;
  left: 0px;
  top: 0px;
  background: ${(props) =>
    props.alertType === "success"
      ? "var(--success-color)"
      : "var(--danger-color)"};
  color: var(--light-color);
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 1;

  animation-name: ${coolBoxKeyframes};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;
