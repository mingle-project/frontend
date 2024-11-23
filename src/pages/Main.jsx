import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as M from "../styles/MainStyles.jsx";
import Footer from "../components/Footer.jsx";
import Moon from "../assets/earthgray.png";
import MyPageBtn from "../assets/menu.png";
import MiniLogo from "../assets/minilogo.svg";
import PointImg from "../assets/starcoin.png";
import Cart from "../assets/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { main } from "../userSlice";

const Main = () => {
  const [point, setPoint] = useState(0);
  const [image, setImage] = useState("");
  const [creatingStar, setCreatingStar] = useState(false);
  const [todayQuestion, setTodayQuestion] = useState("");
  const [showStartQuestion, setShowStartQuestion] = useState(false);
  const [questionMessage, setQuestionMessage] = useState("");
  const [isQuestionStarted, setIsQuestionStarted] = useState(false); // 질문 시작 여부 상태

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const galaxyId = useSelector((state) => state.user.galaxy_id);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pointResponse, starResponse] = await Promise.all([
          axios.get("/api/galaxy/me/cash", {
            headers: { Authorization: token },
          }),
          axios.get("/api/galaxy/me/stars/pet", {
            headers: { Authorization: token },
          }),
        ]);

        if (pointResponse.status === 200) {
          setPoint(pointResponse.data.cash);
        } else {
          console.error("포인트 정보를 가져오는 데 실패했습니다.");
        }

        if (starResponse.status === 200 && starResponse.data) {
          setImage(starResponse.data.data.image);
          setShowStartQuestion(true);
        } else {
          await createNewStar(); // 새로운 별 생성
        }
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    if (galaxyId) {
      fetchData();
    }
  }, [galaxyId, token]);

  const createNewStar = async () => {
    try {
      setCreatingStar(true);
      const response = await axios.get("/api/galaxy/me/stars/pet/new", {
        headers: { Authorization: token },
      });

      if (response.status === 200) {
        setImage(response.data.data.image);
        setShowStartQuestion(true);
      } else {
        console.error("별 생성 실패");
      }
    } catch (error) {
      console.error("별 생성 중 오류 발생:", error);
    } finally {
      setCreatingStar(false);
    }
  };

  const handleStartQuestion = async () => {
    try {
      const response = await axios.get("/api/galaxy/me/start-question", {
        headers: { Authorization: token },
      });

      if (response.status === 200) {
        setShowStartQuestion(false);

        setIsQuestionStarted(true);
        setQuestionMessage(" 별을 눌러 질문을 시작하세요! ");
      } else {
        console.error("질문 시작 실패");
      }
    } catch (error) {
      console.error("질문 시작 중 오류 발생:", error);
    }
  };

  const handleStarClick = async () => {
    if (!isQuestionStarted) return;

    try {
      const questionResponse = await axios.get("/api/questions/today", {
        headers: { Authorization: token },
      });

      if (questionResponse.status === 200) {
        setTodayQuestion(questionResponse.data.subject);
        const question_id = questionResponse.data.question_id;
        dispatch(main({ question_id }));
        setQuestionMessage("질문을 눌러 답변을 시작하세요.");
      } else {
        console.error("질문 데이터를 가져오는 데 실패했습니다.");
      }
    } catch (error) {
      console.error("질문 데이터 가져오는 중 오류 발생:", error);
    }
  };

  const goAnswer = () => {
    navigate("/answer");
  };

  return (
    <M.Container>
      <M.Header>
        <div id="point">
          <img src={PointImg} alt="Starcoin" /> <p>{point}</p>
        </div>
        <div id="minilogo">
          <img src={MiniLogo} alt="Mini Logo" />
        </div>
        <div id="mypage" onClick={() => navigate("/memberinformation")}>
          <img src={MyPageBtn} alt="My Page Button" />
        </div>
      </M.Header>

      <img
        id="cart"
        src={Cart}
        onClick={() => navigate("/bookitem")}
        alt="Cart"
      />

      <M.body>
        {image ? (
          <img
            id="star"
            src={image}
            alt="Star"
            style={{ width: "250px", height: "250px" }}
            onClick={handleStarClick}
          />
        ) : (
          <div>
            <p>별이 생성되지 않았습니다.</p>
            <button onClick={createNewStar} disabled={creatingStar}>
              {creatingStar ? "별 생성 중..." : "새로운 별 생성하기"}
            </button>
          </div>
        )}

        {showStartQuestion && (
          <div>
            <button
              onClick={handleStartQuestion}
              style={{ marginBottom: "10px" }}
            >
              질문 시작하기
            </button>
          </div>
        )}

        <div>
          <p>{questionMessage}</p>
          {todayQuestion && <p onClick={goAnswer}>{todayQuestion}</p>}
        </div>
      </M.body>

      <Footer />
      <img id="moon" src={Moon} alt="Moon" />
    </M.Container>
  );
};

export default Main;
