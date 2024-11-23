import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  min-height: 100vh;
  background-color: #d9d9d9;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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

export const BottomBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 393px;
  height: 426px;
  img {
    width: auto;
    height: auto;
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  top: 480px;
  width: 96px;
  height: 5px;
  img {
    width: auto;
    height: auto;
  }
`;

export const Star = styled.div`
  position: relative;
  img {
    width: 100px;
    height: auto;
  }
`;
