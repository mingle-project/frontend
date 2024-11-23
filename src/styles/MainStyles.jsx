import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  overflow: hidden;
  margin-top: 0px;
  background-color: #f9f9f9;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  #moon {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  #cart {
    position: absolute;
    right: 30px;
    top: 85px;
  }
`;
export const Header = styled.div`
  position: absolute;
  top: 20px; /*대표별 위 마진*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  width: 393px;
  #point {
    gap: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;
    position: absolute;
    left: 30px;
    top: 15px;
  }
  #img {
    position: absolute;
    left: 30px;
    top: 23px;
  }
  #mypage {
    position: absolute;
    cursor: pointer;
    right: 30px;
    top: 20px;
  }

  p {
    color: var(--gray, #606060);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Beiruti;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -1.2px;
  }
`;

export const body = styled.div`
  position: absolute;
  bottom: 400px;
  z-index: 20;
  button {
    margin-top: 10px;
    width: 198px;
    height: 38px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid var(--gray, #606060);
    background: #f3f3f3;
    color: #000;
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 100% */
    letter-spacing: -0.6px;
  }
`;
