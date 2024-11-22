import { React, useState } from "react";
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
  const [answer, setAnswer] = useState("");
  const token = useSelector((state) => state.user.token);
  const galaxyId = useSelector((state) => state.user.galaxy_id);

  const handleRegister = () => {
    if (answer.trim() === "") {
      alert("답변을 입력해주세요.");
      return;
    }
    alert("답변이 등록되었습니다.");
    // 여기서 서버로 답변 데이터를 보낼 수 있음
    setAnswer("");
  };

  const handleCancel = async () => {
    const confirmCancel = window.confirm("답변 등록을 취소하시겠습니까?");
    if (!confirmCancel) return;

    try {
      const response = await axios.post(
        `/api/questions/${galaxyId}/forgive`, // 엔드포인트 경로
        { content: "" }, // 요청 body
        {
          headers: {
            Authorization: token, // 인증 토큰
          },
        }
      );

      if (response.status === 200) {
        alert(response.data.message); // "대답을 포기하였습니다."
        setAnswer(""); // 입력된 답변 초기화
        navigate("/main"); // 홈 화면으로 이동
      }
    } catch (error) {
      console.error("답변 포기 처리 중 에러 발생:", error);
      alert("답변 포기 처리 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <A.Container>
      <Header1 />
      <A.StarIcons>
        <img src={Blue} />
        <img src={Red} />
        <img src={Yellow} />
      </A.StarIcons>
      <A.QuestionText>오늘 점심 메뉴로 뭐 드셨나요?</A.QuestionText>
      <A.AnswerInput
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
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
