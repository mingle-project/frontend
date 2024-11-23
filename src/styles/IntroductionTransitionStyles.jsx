import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 852px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`;

export const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const pageTransitionStyles = styled.div`
  &.page-transition-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.page-transition-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  &.page-transition-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.page-transition-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 300ms, transform 300ms;
  }
`;
