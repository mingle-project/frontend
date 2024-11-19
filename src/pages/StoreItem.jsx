import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StoreItemStyles";
import Header1 from "../components/Header1";
import Bottom from "../assets/rectangle0.png";
import Bar from "../assets/rectangle1.png";
import Violet from "../assets/minglelogoviolet.png";
import Wearing from "../assets/partyhat.png";

const StoreItem = () => {
  return (
    <S.Container>
      <Header1 />
      <S.MainStar>
        <img id="Violet" src={Violet} />
      </S.MainStar>
      <S.Wearing>
        <img id="Wearing" src={Wearing} />
      </S.Wearing>
      <S.BottomBackground>
        <img id="BottomBackground" src={Bottom} />
      </S.BottomBackground>
      <S.BottomBar>
        <img id="BottomBar" src={Bar} />
      </S.BottomBar>
    </S.Container>
  );
};
export default StoreItem;
