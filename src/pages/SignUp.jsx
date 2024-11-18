import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/LandingStyles";
import LogoImg from "../assets/logofinal.svg";
import SignUpBtn from "../assets/signupbtn.svg";
import Globe from "../assets/globe.svg";
import Ministarpink from "../assets/ministarpink.png";
import Ministaryellow from "../assets/ministaryellow.png";
import Ministarneon from "../assets/ministary_green.png";
import Ministarred from "../assets/ministarred.png";
import Ministargreen from "../assets/ministargreen.png";
import Ministarblue from "../assets/ministarblue.png";
import UserId from "../assets/mail.png";
import UserPassword from "../assets/password.png";
import UserNickName from "../assets/human.png";
const SignUp = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    setIsLoginClicked(true);
  };
  return (
    <L.Container>
      <L.Logo>
        <img id="LogoImg" src={LogoImg} />
      </L.Logo>
      <L.LoginForm>
        <div className="userlogin">
          <img id="userId" src={UserId} />
          <input type="text" placeholder="아이디" />
        </div>
        <div className="userlogin">
          <img id="userPassword" src={UserPassword} />
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="userlogin">
          <img id="userNickName" src={UserNickName} />
          <input type="text" placeholder="닉네임" />
        </div>
      </L.LoginForm>
      <L.LoginBtn onClick={handleSignUpClick}>
        <img id="SignUpBtn" src={SignUpBtn} />
      </L.LoginBtn>
      <L.IsItFirst>
        <p>
          이미 계정이 있으신가요? <a onClick={handleLoginClick}>로그인</a>
        </p>
      </L.IsItFirst>

      <L.LandingImg style={{ bottom: "-150px" }}>
        <L.Stars>
          <img id="Ministarpink" src={Ministarpink} />
          <img id="Ministaryellow" src={Ministaryellow} />
          <img id="Ministarneon" src={Ministarneon} />
          <img id="Ministarred" src={Ministarred} />
          <img id="Ministargreen" src={Ministargreen} />
          <img id="Ministarblue" src={Ministarblue} />
        </L.Stars>
        <img src={Globe} />
      </L.LandingImg>
    </L.Container>
  );
};
export default SignUp;
