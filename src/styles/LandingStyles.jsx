import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 393px;
  height: 800px;
  overflow: hidden;
  margin-top: 0px;
  background-color: #d9d9d9;
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  justify-content: center;
  text-align: center;
`;
export const Logo = styled.div`
  #LogoImg {
    margin-top: 40px;
  }
`;
export const LoginBtn = styled.div`
  margin-top: 15px;
`;
export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  .userlogin {
    display: flex;
    width: 236px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #606060;
    background: var(--ff, #fff);
    text-align: left;
    padding-left: 15px;
    align-items: center;
  }
  input {
    border: none;
    background: none;
    color: #606060;
    font-family: "Noto Sans KR";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 138%; /* 16.56px */
    letter-spacing: -0.36px;
    padding-left: 5px;
  }
  input:focus {
    outline: none;
    background: none;
  }
`;
export const IsItFirst = styled.div`
  margin-top: 10px;
  a {
    color: #8086ff;
    cursor: pointer;
  }
`;
export const Stars = styled.div`
  position: relative;
  z-index: 2;

  img {
    margin: 0px;
  }
  #Ministarpink {
    position: absolute;
    bottom: 0;
    left: 20px;
  }
  #Ministaryellow {
    position: absolute;
    bottom: 50px;
    left: 70px;
  }
  #Ministarneon {
    position: absolute;
    bottom: 30px;
    left: 140px;
  }
  #Ministarred {
    position: absolute;
    bottom: 60px;
    left: 210px;
  }
  #Ministargreen {
    position: absolute;
    bottom: 20px;
    right: 90px;
  }
  #Ministarblue {
    position: absolute;
    bottom: 40px;
    right: 20px;
  }
`;
export const LandingImg = styled.div`
  position: absolute;
  bottom: -4px;
  hieght: 50px;
`;
