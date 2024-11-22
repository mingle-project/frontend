import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/MainStyles.jsx"; // 스타일 파일의 경로를 확인하세요
import MiniLogo from "../assets/minilogo.svg";

const Header = ({ pageurl, img }) => {
  // props를 객체 형태로 받음
  const navigate = useNavigate();

  const goBackPage = () => {
    navigate(pageurl); // 페이지 이동 함수 수정
  };

  return (
    <M.Header>
      <div id="img">
        <img
          src={img}
          onClick={goBackPage}
          alt="Back Button"
          style={{ height: "30px", width: "35px" }}
        />
      </div>
      <div id="minilogo">
        <img src={MiniLogo} alt="Mini Logo" />
      </div>
    </M.Header>
  );
};

export default Header;
