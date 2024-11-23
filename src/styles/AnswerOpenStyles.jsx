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

export const QuestionText = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  color: #606060;
  top: 260px;
  width: 90%; /* 전체 컨테이너 대비 너비 설정 */
  max-width: 70%; /* 최대 너비 제한 */
  margin: 0 auto; /* 좌우 중앙 정렬 */
  text-align: center; /* 텍스트 가운데 정렬 */
  padding: 10px 20px; /* 텍스트 내부 여백 */
  box-sizing: border-box; /* 패딩 포함 크기 조정 */
  word-wrap: break-word; /* 긴 텍스트 줄바꿈 처리 */
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
  max-width: 350px;
  margin-top: 30px;
  margin-left: 70px;
  position: relative;
  top: -10px;
`;

export const AnswerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  text-align: left;
`;

export const AnswerName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #606060;
  text-align: left;
`;

export const AnswerText = styled.p`
  font-size: 20px;
  color: #606060;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: left; /* 왼쪽 정렬 */
  margin: 0;
  font-weight: lighter;
`;
