import React, { useState } from "react";
import * as L from "../styles/LandingStyles";

const CodeInputDetail = () => {
  return (
    <L.GroupingDetail style={{ width: "393px", height: "181px" }}>
      <L.GroupingDetailForm>
        <div id="bar"></div>
        <div>
          <p>코드</p>
          <input type="text" id="groupname" placeholder="코드" />
        </div>

        <button id="completebtn">완료</button>
      </L.GroupingDetailForm>
    </L.GroupingDetail>
  );
};
export default CodeInputDetail;
