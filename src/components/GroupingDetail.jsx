import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as L from "../styles/LandingStyles";
import { updateGroupingDetails } from "../userSlice"; // Redux 연동 액션
import CodeParticipate from "./CodeParticipate";

const GroupingDetail = () => {
  const [age, setAge] = useState(""); // age 초기값을 빈 문자열로 변경
  const [gender, setGender] = useState(""); // gender 초기값을 빈 문자열로 변경
  const [relationship, setRelationship] = useState(""); // closeness 초기값을 빈 문자열로 변경
  const [name, setName] = useState(""); // 그룹명 상태 추가
  const [isCompleteBtnClicked, setIsCompleteBtnClicked] = useState(false);
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleRelationshipChange = (e) => {
    setRelationship(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleComplete = async () => {
    // 입력된 데이터를 Redux에 저장

    // axios로 서버에 데이터 전송
    try {
      const response = await axios.post(
        "/api/galaxy",
        {
          name,
          gender,
          age,
          relationship,
        },
        {
          headers: {
            Authorization: token, // Redux에서 가져온 token을 Authorization 헤더에 추가
          },
        }
      );

      if (response.status === 200) {
        const galaxy_id = response.data.galaxy_id;
        dispatch(updateGroupingDetails({ galaxy_id: galaxy_id }));
        console.log("galaxy_id가 저장되었습니다:", galaxy_id);
        // 그룹 생성 성공시 처리 (예: 그룹 상세 페이지로 이동 등)
        console.log("그룹 생성 성공:", response.data);
        setIsCompleteBtnClicked(true);
        // 필요시 navigate('/group/detail') 등 페이지 이동 처리
      } else {
        // 실패 시 처리
        console.error("그룹 생성 실패:", response);
      }
    } catch (error) {
      // 서버 요청 실패 시 처리
      console.error("서버 오류:", error);
    }
  };

  return (
    <L.GroupingDetail>
      <L.GroupingDetailForm>
        <div id="bar"></div>

        <div>
          <p>은하 이름</p>
          <input
            type="text"
            id="groupname"
            placeholder="그룹명"
            value={name}
            onChange={handleNameChange} // 그룹명 입력 값 변경
          />
        </div>

        {/* 성별 선택 */}
        <div>
          <p>성별</p>
          <label className={gender === "여자" ? "selected" : ""}>
            <input
              type="radio"
              name="gender"
              value="여자"
              checked={gender === "여자"}
              onChange={handleGenderChange}
            />
            여자
          </label>
          <label className={gender === "남자" ? "selected" : ""}>
            <input
              type="radio"
              name="gender"
              value="남자"
              checked={gender === "남자"}
              onChange={handleGenderChange}
            />
            남자
          </label>
          <label className={gender === "혼성" ? "selected" : ""}>
            <input
              type="radio"
              name="gender"
              value="혼성"
              checked={gender === "혼성"}
              onChange={handleGenderChange}
            />
            혼성
          </label>
        </div>

        {/* 연령대 선택 */}
        <div>
          <p>연령대</p>
          <div id="agediv">
            <div>
              <label className={age === "10대" ? "selected" : ""}>
                <input
                  type="radio"
                  name="age"
                  value="10대"
                  checked={age === "10대"}
                  onChange={handleAgeChange}
                />
                10대
              </label>
              <label className={age === "20대" ? "selected" : ""}>
                <input
                  type="radio"
                  name="age"
                  value="20대"
                  checked={age === "20대"}
                  onChange={handleAgeChange}
                />
                20대
              </label>
            </div>

            <div>
              <label className={age === "30대" ? "selected" : ""}>
                <input
                  type="radio"
                  name="age"
                  value="30대"
                  checked={age === "30대"}
                  onChange={handleAgeChange}
                />
                30대
              </label>
              <label className={age === "40대 이상" ? "selected" : ""}>
                <input
                  type="radio"
                  name="age"
                  value="40대 이상"
                  checked={age === "40대 이상"}
                  onChange={handleAgeChange}
                />
                40대 이상
              </label>
            </div>
          </div>
        </div>

        {/* 친밀도 선택 */}
        <div>
          <p>친밀도</p>
          <div id="closenessdiv">
            <label
              className={relationship === "알아가는 사이" ? "selected" : ""}
            >
              <input
                type="radio"
                name="closeness"
                value="알아가는 사이"
                checked={relationship === "알아가는 사이"}
                onChange={handleRelationshipChange}
              />
              알아가는 사이
            </label>
            <label className={relationship === "편한 사이" ? "selected" : ""}>
              <input
                type="radio"
                name="closeness"
                value="편한 사이"
                checked={relationship === "편한 사이"}
                onChange={handleRelationshipChange}
              />
              편한 사이
            </label>
            <label
              className={relationship === "비밀 없는 사이" ? "selected" : ""}
            >
              <input
                type="radio"
                name="closeness"
                value="비밀 없는 사이"
                checked={relationship === "비밀 없는 사이"}
                onChange={handleRelationshipChange}
              />
              비밀 없는 사이
            </label>
          </div>
        </div>
        {/* 완료 버튼 */}
        <button id="completebtn" onClick={handleComplete}>
          완료
        </button>
      </L.GroupingDetailForm>
      {isCompleteBtnClicked && (
        <>
          <L.Backdrop onClick={() => setIsCompleteBtnClicked(false)} />{" "}
          <CodeParticipate />
        </>
      )}
    </L.GroupingDetail>
  );
};

export default GroupingDetail;
