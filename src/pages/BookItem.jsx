import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as BI from "../styles/BookItemStyles";
import Violet from "../assets/minglelogoviolet.png";
import Bottom from "../assets/rectangle2.png";
import Bar from "../assets/rectangle1.png";
import Crown from "../assets/crown.png";
import PartyHat from "../assets/partyhat.png";
import Aura from "../assets/aurapink.png";
import Wearing from "../assets/partyhat.png";
import Arrow from "../assets/arrow.png";

const BookItem = () => {
  return (
    <BI.Container>
      <Header pageurl="/book" img={Arrow} />
      <BI.MainStar>
        <img id="Violet" src={Violet} />
      </BI.MainStar>
      <BI.Wearing>
        <img id="Wearing" src={Wearing} />
      </BI.Wearing>
      <BI.BottomBackground>
        <img id="BottomBackground" src={Bottom} />
      </BI.BottomBackground>
      <BI.BottomBar>
        <img id="BottomBar" src={Bar} />
      </BI.BottomBar>
      <BI.ItemText>아이템</BI.ItemText>
      <BI.Crown>
        <img id="Crown" src={Crown} />
      </BI.Crown>
      <BI.PartyHat>
        <img id="PartyHat" src={PartyHat} />
      </BI.PartyHat>
      <BI.AuraText>오로라</BI.AuraText>
      <BI.Aura>
        <img id="Aura" src={Aura} />
      </BI.Aura>
      <Footer />
    </BI.Container>
  );
};
export default BookItem;
