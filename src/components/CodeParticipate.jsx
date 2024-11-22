import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import CodeCopyBtn from "../assets/codecopybtn.svg";

export const CodeParticipateWrap = styled.div`
  position: absolute;
  bottom: 50%;
  right: 50%;
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
    width: 198px;
    height: 38px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid var(--gray, #606060);
    background: #f3f3f3;
    color: #000000;
  }
`;

const CodeParticipate = () => {
  const [groupCode, setGroupCode] = useState(null);
  const galaxyId = useSelector((state) => state.user.galaxy_id);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    // Fetch the groupCode from an API
    const fetchGroupCode = async () => {
      try {
        const response = await axios.get(`/api/galaxy/${galaxyId}/code`, {
          headers: {
            Authorization: token,
          },
        }); // Replace with your API URL
        setGroupCode(response.data.code); // Assuming response contains the code field
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
      <img src={CodeCopyBtn} />
    </CodeParticipateWrap>
  );
};
export default CodeParticipate;
