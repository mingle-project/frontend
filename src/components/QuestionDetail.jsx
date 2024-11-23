import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Q from "../styles/QuestionListStyles.jsx";
import axios from "axios"; // axios 임포트
import Ministarpink from "../assets/ministarpink.png";
import Ministaryellow from "../assets/ministaryellow.png";
import Ministarneon from "../assets/ministary_green.png";
import Ministarred from "../assets/ministarred.png";
import Ministargreen from "../assets/ministargreen.png";
import Ministarblue from "../assets/ministarblue.png";
import { useSelector } from "react-redux";

const QuestionDetail = () => {
  const [questions, setQuestions] = useState([]); // 질문과 날짜를 저장할 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const goAnswerOpen = () => {
    navigate("/answeropen", {
      state: { questionId: questions.question_id }, // questionId를 state로 전달
    });
  };

  const images = [
    { id: "Ministarpink", src: Ministarpink },
    { id: "Ministaryellow", src: Ministaryellow },
    { id: "Ministarneon", src: Ministarneon },
    { id: "Ministarred", src: Ministarred },
    { id: "Ministargreen", src: Ministargreen },
    { id: "Ministarblue", src: Ministarblue },
  ];

  // 서버에서 질문과 날짜를 가져오는 함수
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("/api/galaxy/questions", {
          headers: {
            Authorization: token, // Redux에서 가져온 token을 Authorization 헤더에 추가
          },
        }); // 서버에서 데이터 가져오기
        setQuestions(response.data.questions); // response.data.questions로 수정
        setIsLoading(false); // 로딩 상태 종료
        console.log(response.data);
      } catch (error) {
        setError("데이터를 가져오는 데 실패했습니다."); // 에러 상태 설정
        setIsLoading(false); // 로딩 상태 종료
      }
    };

    fetchQuestions(); // 질문 데이터를 가져오는 함수 호출
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  // 로딩 중일 때
  if (isLoading) {
    return <p></p>;
  }

  // 에러 발생 시
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Q.QuestionDetail>
      {questions.map((questionData, index) => {
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

            <Q.QuestionText onClick={goAnswerOpen}>
              <p style={{ display: "inline" }}>{questionData.subject}</p>
              <p id="date" style={{ display: "inline", marginLeft: "10px" }}>
                {questionData.date}
              </p>
            </Q.QuestionText>
          </div>
        );
      })}
    </Q.QuestionDetail>
  );
};

export default QuestionDetail;
