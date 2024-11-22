import React, { useState } from "react";
import axios from "axios";
import * as L from "../styles/LandingStyles";
import { useSelector } from "react-redux";

const CodeInputDetail = () => {
  const token = useSelector((state) => state.user.token);
  const [groupCode, setGroupCode] = useState(""); // State to manage the group code input

  const handleInputChange = (e) => {
    setGroupCode(e.target.value); // Update state with the input value
  };

  const handleSubmit = async () => {
    if (!groupCode) {
      alert("코드를 입력해주세요.");
      return;
    }

    try {
      // POST request to submit the group code
      const response = await axios.post(
        "/api/galaxy/join",
        { code: groupCode },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Check for successful response
      if (response.status === 200) {
        alert("그룹에 성공적으로 참여했습니다!");
        // You can redirect or update the UI based on the response
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
