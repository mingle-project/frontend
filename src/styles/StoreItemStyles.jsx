import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  background-color: #d9d9d9;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

export const MainStar = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 274px;
    height: auto;
  }
`;

export const Wearing = styled.div`
  position: absolute;
  top: 150px;
  left: 70%;
  transform: translateX(-50%);
  img {
    width: 90px;
    height: auto;
  }
`;

export const BottomBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 393px;
  height: 426px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  top: 440px;
  width: 96px;
  height: 5px;
  img {
    width: auto;
    height: auto;
  }
`;
