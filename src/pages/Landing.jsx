import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/LandingStyles";
import LogoImg from "../assets/minglelogo.svg";
import LoginBtn from "../assets/loginbtn.svg";

const Landing = () => {
  return (
    <L.Container>
      <L.Logo>
        <img id="LogoImg" src={LogoImg} />
      </L.Logo>
      <L.LoginBtn>
        <img id="LoginBtn" src={LoginBtn} />
      </L.LoginBtn>
      <L.IsItFirst>
        <p>
          밍글이 처음이신가요? <a>회원가입</a>
        </p>
      </L.IsItFirst>
      <L.LandingImg></L.LandingImg>
    </L.Container>
  );
};
export default Landing;
