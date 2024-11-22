import React from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import Question from "../assets/question.png";
import Home from "../assets/Home.png";
import Book from "../assets/book.png";

export const FooterDesign = styled.div`
  position: absolute;
  bottom: 0;
  width: 393px;
  height: 140px;
  padding-top: 10px;
  border-radius: 20px 20px 0 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  z-index: 10;
`;

const Footer = () => {
  const navigate = useNavigate();
  const goQuestion = () => {
    navigate("/questionlist");
  };
  const goHome = () => {
    navigate("/main");
  };
  const goBook = () => {
    navigate("/book");
  };

  return (
    <FooterDesign>
      <img onClick={goQuestion} src={Question} />
      <img onClick={goHome} src={Home} />
      <img onClick={goBook} src={Book} />
    </FooterDesign>
  );
};

export default Footer;
