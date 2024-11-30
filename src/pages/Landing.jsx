import React, { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import * as L from "../styles/LandingStyles";
import LogoImg from "../assets/logofinal.svg";
import LoginBtn from "../assets/loginbtn.svg";
import Globe from "../assets/globe2.svg";
import Ministarpink from "../assets/ministarpink.png";
import Ministaryellow from "../assets/ministaryellow.png";
import Ministarneon from "../assets/ministary_green.png";
import Ministarred from "../assets/ministarred.png";
import Ministargreen from "../assets/ministargreen.png";
import Ministarblue from "../assets/ministarblue.png";

const Landing = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <L.Container>
      <L.Logo>
        <img id="LogoImg" src={LogoImg} />
      </L.Logo>
      <L.LoginBtn onClick={handleLoginClick}>
        <img id="LoginBtn" src={LoginBtn} />
      </L.LoginBtn>
      <L.IsItFirst>
        <p>
          밍글이 처음이신가요? <a onClick={handleSignUpClick}>회원가입</a>
        </p>
      </L.IsItFirst>

      <L.LandingImg>
        <L.Stars>
          <img id="Ministarpink" src={Ministarpink} />
          <img id="Ministaryellow" src={Ministaryellow} />
          <img id="Ministarneon" src={Ministarneon} />
          <img id="Ministarred" src={Ministarred} />
          <img id="Ministargreen" src={Ministargreen} />
          <img id="Ministarblue" src={Ministarblue} />
        </L.Stars>
        <img id="globe" src={Globe} />
      </L.LandingImg>
    </L.Container>
  );
};
export default Landing;
