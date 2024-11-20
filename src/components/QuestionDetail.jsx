import React from "react";
import * as Q from "../styles/QuestionListStyles.jsx";
import Ministarpink from "../assets/ministarpink.png";
import Ministaryellow from "../assets/ministaryellow.png";
import Ministarneon from "../assets/ministary_green.png";
import Ministarred from "../assets/ministarred.png";
import Ministargreen from "../assets/ministargreen.png";
import Ministarblue from "../assets/ministarblue.png";

const QuestionDetail = () => {
  const images = [
    { id: "Ministarpink", src: Ministarpink },
    { id: "Ministaryellow", src: Ministaryellow },
    { id: "Ministarneon", src: Ministarneon },
    { id: "Ministarred", src: Ministarred },
    { id: "Ministargreen", src: Ministargreen },
    { id: "Ministarblue", src: Ministarblue },
  ];

  const QuestionText = [
    "친구와 함께 여행을 간다면 어디로 가고 싶어?",
    "너의 가장 기억에 남는 순간은 언제였어?",
    "우리가 만난 지 얼마나 되었지?",
    "내가 힘들 때, 너는 어떻게 나를 도와줄 수 있을까?",
    "친구 관계에서 가장 중요한 것은 무엇이라고 생각해?",
    "dsfdlk;sfl",
    "dsfd",
    "dfsdfsf",
    "dsfsfdf",
    "sfdsdddddddddddd",
    "dsfsfds",
    "sssssssseeee",
    "sdffffffffffffffffffff",
    "dfsssssssssssss",
    "dfsssssss",
    "rrrrr",
  ];

  const Date = ["24-08-12", "24-06-21", "24-05-05", "24-05-01", "24-04-30"];

  return (
    <Q.QuestionDetail>
      {QuestionText.map((question, index) => {
        // 이미지를 순차적으로 반복해서 할당
        const imageIndex = index % images.length; // index가 이미지 개수보다 클 경우, 처음부터 다시 시작
        const image = images[imageIndex]; // 해당하는 이미지를 선택

        return (
          <div key={index} id="questionListDiv">
            <Q.MainImg>
              <img
                key={image.id}
                id={image.id}
                src={image.src}
                alt={image.id}
                style={{ height: "25px", width: "25px" }}
              />
            </Q.MainImg>

            <Q.QuestionText>
              <p style={{ display: "inline" }}>{question}</p>
              <p id="date" style={{ display: "inline", marginLeft: "10px" }}>
                {Date[index]}
              </p>
            </Q.QuestionText>
          </div>
        );
      })}
    </Q.QuestionDetail>
  );
};

export default QuestionDetail;
