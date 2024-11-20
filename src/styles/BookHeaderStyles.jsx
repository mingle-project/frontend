import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  margin: 0;
  margin-top: -780px;
  width: 393px;
  background-color: #150f69;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const Hanger = styled.div`
  position: absolute;
  transform: translateX(-450%);
  margin: 0 auto;
  margin-top: 7%;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  img {
    width: 32px;
    height: auto;
    margin-top: 8%;
  }
`;

export const MingleLogo = styled.div`
  position: absolute;
  transform: translateX(0%);
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  display: block;
  img {
    width: 75px;
    height: 75px;
    display: block;
    margin: 0;
  }
`;
