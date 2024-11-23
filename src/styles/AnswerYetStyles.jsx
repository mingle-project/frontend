import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StarIcons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 40px;
  top: 205px;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 25px;
    height: 25px;
  }
`;

export const QuestionText = styled.h2`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #606060;
  top: 270px;
`;

export const InfoText = styled.p`
  font-size: 20px;
  color: #606060;
  font-weight: normal;
  margin-top: 30px;
  text-align: center;
  line-height: 1.5;
`;
