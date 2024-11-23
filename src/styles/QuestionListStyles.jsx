import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  overflow: hidden;
  margin-top: 0px;
  background-color: #f9f9f9;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Header = styled.div`
  margin: 20px 0; /*대표별 위 마진*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  width: 393px;
`;
export const body = styled.div`
  height: 60%;
  width: 385px;
  overflow-y: auto;
  margin-right: 4px;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
export const QuestionDetail = styled.div`
  #questionListDiv {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    flex-direction: row;
    margin-left: 20px;
  }
`;
export const MainImg = styled.div`
  margin-right: 10px;
`;
export const QuestionText = styled.div`
  margin-right: 5px;
  margint-top: 10px;
  color: #000;
  text-align: left;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 138%; /* 19.32px */
  letter-spacing: -0.42px;
  #date {
    color: #000000;
    font-family: Inter;
    font-size: 10px;
    font-style: italic;
    font-weight: 400;
    line-height: 138%; /* 13.8px */
    letter-spacing: -0.3px;
  }
`;
export const Date = styled.div`
  color: #000000;
  font-family: Inter;
  font-size: 10px;
  font-style: italic;
  font-weight: 400;
  line-height: 138%; /* 13.8px */
  letter-spacing: -0.3px;
`;
