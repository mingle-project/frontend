import React from "react";
import * as Q from "../styles/QuestionListStyles.jsx";
import Footer from "../components/Footer.jsx";
import MiniLogo from "../assets/minilogo.svg";
import QuestionDetail from "../components/QuestionDetail.jsx";
const QuestionList = () => {
  return (
    <Q.Container>
      <Q.Header>
        <div id="minilogo">
          <img src={MiniLogo} />
        </div>
      </Q.Header>

      <Q.body>
        <QuestionDetail />
      </Q.body>
      <Footer />
    </Q.Container>
  );
};
export default QuestionList;
