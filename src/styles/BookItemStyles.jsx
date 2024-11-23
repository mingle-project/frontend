import { styled } from "styled-components";

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

export const MainStar = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 274px;
    height: auto;
  }
`;

export const BottomBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 393px;
  height: 426px;
  img {
    width: auto;
    height: auto;
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  top: 545px;
  width: 96px;
  height: 5px;
  img {
    width: auto;
    height: auto;
  }
`;

export const Crown = styled.div`
  position: absolute;
  top: 620px;
  left: 45px;
  img {
    width: 71px;
    height: auto;
  }
`;

export const PartyHat = styled.div`
  position: absolute;
  top: 600px;
  left: 155px;
  img {
    width: 90px;
    height: auto;
  }
`;

export const ItemText = styled.div`
  position: absolute;
  top: 590px;
  left: 50px;
  font-size: 14px;
  color: #606060;
  font-weight: bold;
`;

export const AuraText = styled.div`
  position: absolute;
  top: 700px;
  left: 50px;
  font-size: 14px;
  color: #606060;
  font-weight: bold;
`;

export const Aura = styled.div`
  position: absolute;
  top: 720px;
  left: 30px;
  img {
    width: 100px;
    height: auto;
  }
`;

export const Wearing = styled.div`
  position: absolute;
  top: 150px;
  left: 70%;
  transform: translateX(-50%);
  img {
    width: 90px;
    height: auto;
  }
`;
