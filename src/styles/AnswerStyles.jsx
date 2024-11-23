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
  position: relative;
  margin-top: 70px;
  top: -300px;
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
  top: 230px;
  width: 90%; /* 전체 컨테이너 대비 너비 설정 */
  max-width: 70%; /* 최대 너비 제한 */
  margin: 0 auto; /* 좌우 중앙 정렬 */
  text-align: center; /* 텍스트 가운데 정렬 */
  padding: 10px 20px; /* 텍스트 내부 여백 */
  box-sizing: border-box; /* 패딩 포함 크기 조정 */
  word-wrap: break-word; /* 긴 텍스트 줄바꿈 처리 */
`;

export const AnswerInput = styled.textarea`
  position: absolute;
  width: 100%;
  max-width: 265px;
  height: 162px;
  border: 2px solid #606060;
  border-radius: 15px;
  padding: 10px;
  font-size: 16px;
  resize: none;
  outline: none;
  margin-top: 25px;
  top: 320px;

  &:focus {
    border-color: #888888;
  }
`;

export const ButtonGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 237px;
  max-width: 350px;
  margin-top: 60px;
  top: 500px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.secondary ? "#606060" : "#606060")};
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 14px 20px;
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  height: 50px;

  ${(props) =>
    props.secondary &&
    `
    padding: 14px 20px;
    font-size: 17px;
    height: 50px;
    width: 196px;
    margin: 0 auto;
  `}

  &:hover {
    background-color: ${(props) => (props.secondary ? "#444" : "#444")};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoText = styled.p`
  position: absolute;
  font-size: 12px;
  color: #666;
  margin-top: 50px;
  line-height: 1.4;
  top: 645px;
`;
