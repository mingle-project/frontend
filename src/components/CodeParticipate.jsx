import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import CodeCopyBtn from "../assets/codecopybtn.svg";

export const CodeParticipateWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -120%);
  z-index: 90;
  width: 331px;
  height: 195px;
  border-radius: 20px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    margin-bottom: 10px;
    width: 198px;
    height: 38px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid var(--gray, #606060);
    background: #f3f3f3;
    color: #000;
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 100% */
    letter-spacing: -0.6px;
  }
  p {
    margin-bottom: 5px;
    color: #000;
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Noto Sans KR";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 153.846% */
    letter-spacing: -0.39px;
  }
`;

const CodeParticipate = () => {
  const [groupCode, setGroupCode] = useState(" ");
  const navigate = useNavigate();
  const groupCodeCopy = () => {
    navigator.clipboard
      .writeText(groupCode)
      .then(() => {
        console.log("클립보드에 코드가 복사되었습니다!");
        alert("코드가 클립보드에 복사되었습니다.");
        navigate("/main");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
        alert("코드 복사에 실패했습니다.");
      });
  };
  const galaxyId = useSelector((state) => state.user.galaxy_id);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    // Fetch the groupCode from an API
    const fetchGroupCode = async () => {
      try {
        const response = await axios.get(`/api/galaxy/me/code`, {
          headers: {
            Authorization: token,
          },
        }); // Replace with your API URL
        setGroupCode(response.data);
      } catch (error) {
        console.error("Failed to fetch group code", error);
      }
    };

    fetchGroupCode();
  }, []);
  return (
    <CodeParticipateWrap>
      <div>{groupCode}</div>
      <p>그룹코드를 복사해서 친구들을 초대하세요!</p>
      <img src={CodeCopyBtn} onClick={groupCodeCopy} />
    </CodeParticipateWrap>
  );
};
export default CodeParticipate;
