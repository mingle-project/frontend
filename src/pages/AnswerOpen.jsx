import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import * as AO from "../styles/AnswerOpenStyles";
import Blue from "../assets/ministarblue.png";
import Red from "../assets/ministarred.png";
import Yellow from "../assets/ministaryellow.png";
import axios from "axios";
import Arrow from "../assets/arrow.png";

const AnswerOpen = () => {
  const [questionData, setQuestionData] = useState(null); // 초기값을 null로 설정
  const questionId = useSelector((state) => state.user.question_id); // galaxyId 가져오기
  const token = useSelector((state) => state.user.token); // 사용자 토큰 가져오기

  // useEffect에서 데이터를 가져오는 함수
  useEffect(() => {
    const fetchAnswerData = async () => {
      try {
        const response = await axios.get(
          `/api/questions/${questionId}/answers`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (response.status === 200) {
          setQuestionData(response.data); // 받은 데이터를 상태에 저장
        } else {
          console.error("데이터를 가져오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("서버에 연결할 수 없습니다.");
        console.error(error);
      }
    };

    fetchAnswerData();
  }, [questionId, token]); // questionId나 token이 변경될 때마다 호출

  // 질문 데이터가 없거나 로딩 중일 때 처리
  if (questionData === null) {
    return <p>Loading...</p>;
  }

  return (
    <AO.Container>
      <Header pageurl="/main" img={Arrow} />
      <AO.StarIcons>
        <img src={Blue} alt="Blue Star" />
        <img src={Red} alt="Red Star" />
        <img src={Yellow} alt="Yellow Star" />
      </AO.StarIcons>

      <AO.QuestionText>{questionData.subject}</AO.QuestionText>

      {questionData.answers && questionData.answers.length > 0 ? (
        // 답변이 있을 경우 렌더링
        questionData.answers.map((item) => (
          <AO.AnswerWrapper key={item.answer_id}>
            <AO.AnswerName>{item.ninkname}</AO.AnswerName>
            <AO.AnswerText>{item.content}</AO.AnswerText>
          </AO.AnswerWrapper>
        ))
      ) : (
        <p>답변이 없습니다.</p> // 답변이 없을 경우
      )}
    </AO.Container>
  );
};

export default AnswerOpen;
