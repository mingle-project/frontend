import { styled } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  margin: 0 auto;
  margin-top: 440px;
  width: 393px;
  background-color: #150f69;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const StarRed = styled.div`
  position: absolute;
  transform: translate(500%, -80%);
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  img {
    width: 30px;
  }
`;

export const Earth = styled.div`
  position: absolute;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  img {
    margin-top: -3%;
  }
`;
