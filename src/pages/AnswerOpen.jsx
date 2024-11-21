import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import * as AO from "../styles/AnswerOpenStyles";
import Blue from "../assets/ministarblue.png";
import Red from "../assets/ministarred.png";
import Yellow from "../assets/ministaryellow.png";

const AnswerOpen = () => {
  // 예시 데이터, 실제로는 API나 상위 컴포넌트에서 받아올 수 있음
  const answerData = [
    {
      name: "수연",
      answer: "맛있는 고기",
    },
    { name: "슬아", answer: "맛있는 채소" },
  ];

  return (
    <AO.Container>
      <Header1 />
      <AO.StarIcons>
        <img src={Blue} />
        <img src={Red} />
        <img src={Yellow} />
      </AO.StarIcons>
      <AO.QuestionText>오늘 점심 메뉴로 뭐 드셨나요?</AO.QuestionText>

      {answerData.map((item, index) => (
        <AO.AnswerWrapper key={index}>
          <AO.AnswerName>{item.name}</AO.AnswerName>
          <AO.AnswerText>{item.answer}</AO.AnswerText>
        </AO.AnswerWrapper>
      ))}
    </AO.Container>
  );
};

export default AnswerOpen;
