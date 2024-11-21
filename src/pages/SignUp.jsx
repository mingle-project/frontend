import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios import 추가
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
  const [userId, setUserId] = useState(""); // 아이디 상태 추가
  const [userPassword, setUserPassword] = useState(""); // 비밀번호 상태 추가
  const [userNickName, setUserNickName] = useState(""); // 닉네임 상태 추가
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const navigate = useNavigate();

  // 로그인 버튼 클릭 시 로그인 페이지로 이동
  const handleLoginClick = () => {
    navigate("/login");
  };

  // 회원가입 버튼 클릭 시 API 요청 보내기
  const handleSignUpClick = async () => {
    try {
      // 회원가입 데이터
      const signUpData = {
        username: userId,
        password: userPassword,
        nickname: userNickName,
      };

      // axios를 사용하여 POST 요청 보내기
      const response = await axios.post("/api/signup", signUpData);

      // 요청이 성공하면 로그 메시지 출력 (또는 페이지 이동)
      console.log("회원가입 성공:", response.data);

      // 로그인 페이지로 이동
      navigate("/login");
    } catch (error) {
      // 오류가 발생한 경우
      console.error(
        "회원가입 실패:",
        error.response ? error.response.data : error.message
      );
      alert(
        "회원가입 실패: " +
          (error.response ? error.response.data : error.message)
      );
    }
  };

  return (
    <L.Container>
      <L.Logo>
        <img id="LogoImg" src={LogoImg} />
      </L.Logo>
      <L.LoginForm>
        <div className="userlogin">
          <img id="userId" src={UserId} />
          <input
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)} // 입력 값 변경 시 상태 업데이트
          />
        </div>
        <div className="userlogin">
          <img id="userPassword" src={UserPassword} />
          <input
            type="password"
            placeholder="비밀번호"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)} // 비밀번호 상태 업데이트
          />
        </div>
        <div className="userlogin">
          <img id="userNickName" src={UserNickName} />
          <input
            type="text"
            placeholder="닉네임"
            value={userNickName}
            onChange={(e) => setUserNickName(e.target.value)} // 닉네임 상태 업데이트
          />
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
