import React, { useState } from "react";
import axios from "axios";
import * as L from "../styles/LandingStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CodeInputDetail = () => {
  const token = useSelector((state) => state.user.token);
  const [groupCode, setGroupCode] = useState(""); // State to manage the group code input
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setGroupCode(e.target.value); // Update state with the input value
  };

  const handleSubmit = async () => {
    if (!groupCode) {
      alert("코드를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/galaxy/join",
        { group_code: groupCode },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        alert("그룹에 성공적으로 참여했습니다!");
        navigate("/main");
      } else {
        alert("잘못된 코드입니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error submitting group code:", error);
      alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <L.GroupingDetail style={{ width: "393px", height: "181px" }}>
      <L.GroupingDetailForm>
        <div id="bar"></div>
        <div>
          <p>코드</p>
          <input
            type="text"
            id="groupname"
            placeholder="코드"
            value={groupCode} // Bind the input field to the state
            onChange={handleInputChange} // Update state on input change
          />
        </div>

        <button id="completebtn" onClick={handleSubmit}>
          완료
        </button>
      </L.GroupingDetailForm>
    </L.GroupingDetail>
  );
};

export default CodeInputDetail;
