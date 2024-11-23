import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header1 from "../components/Header1";
import * as A from "../styles/AnswerStyles";
import Blue from "../assets/ministarblue.png";
import Red from "../assets/ministarred.png";
import Yellow from "../assets/ministaryellow.png";
import axios from "axios";

const Answer = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(""); // 답변을 관리하는 state
  const token = useSelector((state) => state.user.token); // 사용자 토큰 가져오기
  const questionId = useSelector((state) => state.user.question_id); // galaxyId 가져오기
  const [todayQuestion, setTodayQuestion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/questions/today", {
          headers: {
            Authorization: token,
          },
        }); // 여기에 실제 API 엔드포인트를 넣어주세요.
        setTodayQuestion(response.data.subject);
      } catch (err) {
        console.error("데이터를 가져오는 데 실패했습니다."); // 에러 처리
      }
    };

    fetchData(); // 데이터 가져오기 호출
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트가 마운트될 때만 실행
  // 답변 등록 처리 함수
  const handleRegister = async () => {
    if (answer.trim() === "") {
      alert("답변을 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        `/api/questions/${questionId}/answers`,
        { content: answer },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 201) {
        alert("답변이 등록되었습니다.");
        setAnswer("");
        navigate("/answeropen");
      } else {
        alert("답변 등록에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("답변 등록 중 오류 발생:", error);
      console.log(answer);
      console.log("퀘스천 아이디", questionId);

      alert("오늘 이미 답변을 완료했습니다 내일 다시 와주세요.");
      navigate("/main");
    }
  };

  const handleCancel = async () => {
    const confirmCancel = window.confirm("답변 등록을 취소하시겠습니까?");
    if (!confirmCancel) return;

    try {
      const response = await axios.post(
        `/api/questions/${questionId}/answers`, // 엔드포인트 경로
        { content: "" }, // 요청 body
        {
          headers: {
            Authorization: token, // 인증 토큰
          },
        }
      );

      if (response.status === 201) {
        alert(response.data.message); // "대답을 포기하였습니다."
        setAnswer(""); // 입력된 답변 초기화

        navigate("/main"); // 홈 화면으로 이동
      }
    } catch (error) {
      console.error("답변 포기 처리 중 에러 발생:", error);
      console.log(answer);
      console.log("퀘스천 아이디", questionId);
      alert("답변 포기 처리 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <A.Container>
      <Header1 />
      <A.StarIcons>
        <img src={Blue} alt="Blue Star" />
        <img src={Red} alt="Red Star" />
        <img src={Yellow} alt="Yellow Star" />
      </A.StarIcons>
      <A.QuestionText>
        너라면 하루동안 동물이 될 수 있다면 뭐가 되고 싶어?
      </A.QuestionText>
      <A.AnswerInput
        value={answer}
        onChange={(e) => setAnswer(e.target.value)} // 입력값을 상태에 업데이트
      />
      <A.ButtonGroup>
        <A.Button onClick={handleRegister}>답변 등록하기</A.Button>
        <A.Button onClick={handleCancel} secondary>
          등록 포기하기
        </A.Button>
      </A.ButtonGroup>
      <A.InfoText>
        다른 멤버의 답변을 확인할 수 없고, <br />별 생성 효과가 감소합니다.
      </A.InfoText>
    </A.Container>
  );
};

export default Answer;
