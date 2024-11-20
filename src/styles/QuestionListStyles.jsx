import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  overflow: hidden;
  margin-top: 0px;
  background-color: #d9d9d9;
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
  width: 393px;
  background-color: #ffffff;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    margin-right: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
export const QuestionDetail = styled.div`
  #questionListDiv {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    flex-direction: row;
    margin: 0 20px;
  }
`;
export const MainImg = styled.div`
  margin-right: 10px;
`;
export const QuestionText = styled.div`
  margin-right: 5px;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 138%; /* 19.32px */
  letter-spacing: -0.42px;
`;
export const Date = styled.div``;
