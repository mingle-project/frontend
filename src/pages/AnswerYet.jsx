import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import * as AY from "../styles/AnswerYetStyles";
import Blue from "../assets/ministarblue.png";
import Red from "../assets/ministarred.png";
import Yellow from "../assets/ministaryellow.png";

const AnswerYet = () => {
  return (
    <AY.Container>
      <Header1 />
      <AY.StarIcons>
        <img src={Blue} />
        <img src={Red} />
        <img src={Yellow} />
      </AY.StarIcons>
      <AY.QuestionText>오늘 점심 메뉴로 뭐 드셨나요?</AY.QuestionText>
      <AY.InfoText>
        아직 모든 멤버의 답변이 <br />
        완료되지 않았어요!
      </AY.InfoText>
    </AY.Container>
  );
};

export default AnswerYet;
