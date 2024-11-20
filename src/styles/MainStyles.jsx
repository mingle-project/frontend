import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  overflow: hidden;
  margin-top: 0px;
  background-color: #d9d9d9;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
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
  }
`;
export const Header = styled.div`
  margin-top: 20px; /*대표별 위 마진*/
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
  }
  #mypage {
    position: absolute;
    right: 30px;
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
export const body = styled.div``;
