import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 430px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-top: 0px;
  background-color: #f9f9f9;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
export const Backdrop = styled.div`
  position: absolute;
  width: 393px;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;
export const Logo = styled.div`
  position: relative;
  margin: 5vh 0 0 0;
  #LogoImg {
    height: 25vh;
  }
`;
export const Welecome = styled.div`
  margin-top: 10px;
`;
export const LoginBtn = styled.div`
  margin-top: 10px;
  #LoginBtn {
    height: 5vh;
  }
  #SignUpBtn {
    height: 5vh;
  }
`;
export const IsItFirst = styled.div`
  margin-top: 10px;
  a {
    color: #8086ff;
    cursor: pointer;
  }
`;
export const GroupingBtn = styled.div`
  margin-top: 0.1rem;
`;

export const GroupingDetail = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 0;
  width: 393px;
  height: 450px;
  border-radius: 30px 30px 0 0;
  background: #f3f3f3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const GroupingDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
  #bar {
    width: 96px;
    height: 5px;
    background: #d9d9d9;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  #groupname {
    width: 198px;
    height: 38px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid var(--gray, #606060);
    background: #f3f3f3;
  }
  #groupname:focus {
    outline: none;
    background: none;
    font-size: 20px;
  }
  #agediv {
    display: flex;
    gap: 7px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 206.4px;
  }
  #closenessdiv {
    display: flex;
    gap: 7px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 206.4px;
  }
  p {
    color: #606060;
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Noto Sans KR";
    font-size: 25px;
    font-style: normal;
    font-weight: 900;
    line-height: 20px;
    letter-spacing: -0.75px;
    width: 150px;
  }
  input[type="radio"] {
    display: none;
  }
  label {
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 20px;
    background: #606060;
    color: var(--ff, #fff);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 20px; /* 100% */
    letter-spacing: -0.6px;
    cursor: pointer;
    height: 32px;
    width: auto;
    min-width: 10px;
    box-sizing: border-box;
  }
  label.selected {
    background-color: #444;
    color: #d9d9d9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  #completebtn {
    width: 86px;
    height: 43px;
    border-radius: 17px;
    background: #606060;
    border: none;
    color: var(--ff, #fff);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 20px;
    letter-spacing: -0.6px;
    margin-bottom: 10px;
    &:active {
      background: #444;
      color: #d9d9d9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
  }
`;
export const CodeInputBtn = styled.div`
  margin-top: 8px;
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
    border-radius: 20px;
    border: 2px solid #606060;
    background: var(--ff, #fff);
    text-align: left;
    padding-left: 15px;
    align-items: center;
    height: 4.5vh;
    width: 50vw;
  }
  img {
    height: 3vh;
  }
  input {
    border: none;
    background: none;
    color: #606060;
    font-family: "Noto Sans KR";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 138%;
    letter-spacing: -0.36px;
    padding-left: 5px;
  }
  input:focus {
    outline: none;
    background: none;
  }
`;

export const Stars = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;

  img {
    margin: 0px;
    max-width: 30px;
    width: 7vw;
  }
  #Ministarpink {
    position: absolute;
    bottom: -2vh;
    left: 10%;
    transform: translateX(-50%);
  }

  #Ministaryellow {
    position: absolute;
    bottom: 5vh;
    left: 23%;
    transform: translateX(-50%);
  }

  #Ministarneon {
    position: absolute;
    bottom: 2vh;
    left: 42%;
    transform: translateX(-50%);
  }

  #Ministarred {
    position: absolute;
    bottom: 7vh;
    left: 59%;
    transform: translateX(-50%);
  }

  #Ministargreen {
    position: absolute;
    bottom: 1vh;
    left: 73%;
    transform: translateX(-50%);
  }

  #Ministarblue {
    position: absolute;
    bottom: 4vh;
    left: 90%;
    transform: translateX(-50%);
  }
`;
export const LandingImg = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  #globe {
    height: 35vh;
  }
`;
