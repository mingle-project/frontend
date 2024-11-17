import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 700px;
  margin-top: 0px;
  background-color: #d9d9d9;
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Logo = styled.div`
  #LogoImg {
    z-index: 2;
    margin-top: 20px;
  }
`;
export const LoginBtn = styled.div`
  margin-top: 15px;
`;
export const IsItFirst = styled.div`
  margin-top: 10px;
  a {
    color: #8086ff;
  }
`;
export const LandingImg = styled.div``;
