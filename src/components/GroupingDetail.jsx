import React, { useState } from "react";
import * as L from "../styles/LandingStyles";

const GroupingDetail = () => {
  const [age, setAge] = useState(false);
  const [gender, setGender] = useState(false);
  const [closeness, setCloseness] = useState(false);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleClosenessChange = (e) => {
    setCloseness(e.target.value);
  };
  return (
    <L.GroupingDetail>
      <L.GroupingDetailForm>
        <div id="bar"></div>
        <div>
          <p>은하 이름</p>
          <input type="text" id="groupname" placeholder="그룹명" />
        </div>
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
            <label className={closeness === "알아가는 사이" ? "selected" : ""}>
              <input
                type="radio"
                name="closeness"
                value="알아가는 사이"
                checked={closeness === "알아가는 사이"}
                onChange={handleClosenessChange}
              />
              알아가는 사이
            </label>
            <label className={closeness === "편한 사이" ? "selected" : ""}>
              <input
                type="radio"
                name="closeness"
                value="편한 사이"
                checked={closeness === "편한 사이"}
                onChange={handleClosenessChange}
              />
              편한 사이
            </label>
            <label className={closeness === "비밀 없는 사이" ? "selected" : ""}>
              <input
                type="radio"
                name="closeness"
                value="비밀 없는 사이"
                checked={closeness === "비밀 없는 사이"}
                onChange={handleClosenessChange}
              />
              비밀 없는 사이
            </label>
          </div>
        </div>
        <button id="completebtn">완료</button>
      </L.GroupingDetailForm>
    </L.GroupingDetail>
  );
};
export default GroupingDetail;
