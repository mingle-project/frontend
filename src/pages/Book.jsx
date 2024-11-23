import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookHeader from "../components/BookHeader";
import Footer from "../components/Footer";
import * as B from "../styles/BookStyles";
import White from "../assets/minglelogowhite0.png";
import Green from "../assets/minglelogogreen.png";
import Yellow from "../assets/minglelogoyellow.png";
import Violet from "../assets/minglelogoviolet.png";
import Red from "../assets/minglelogored.png";
import Bottom from "../assets/rectangle2.png";
import Bar from "../assets/rectangle1.png";
import Wearing from "../assets/partyhat.png";
const Book = () => {
  return (
    <B.Container>
      <BookHeader />
      <B.MainStar>
        <img id="Violet" src={Violet} />
      </B.MainStar>
      <B.Wearing>
        <img id="Wearing" src={Wearing} />
      </B.Wearing>
      <B.BottomBackground>
        <img id="BottomBackground" src={Bottom} />
      </B.BottomBackground>
      <B.BottomBar>
        <img id="BottomBar" src={Bar} />
      </B.BottomBar>
      <B.BottomStar1>
        <img id="White" src={White} />
      </B.BottomStar1>
      <B.BottomStar2>
        <img id="Green" src={Green} />
      </B.BottomStar2>
      <B.BottomStar3>
        <img id="Yellow" src={Yellow} />
      </B.BottomStar3>
      <B.BottomStar4>
        <img id="Violet" src={Violet} />
      </B.BottomStar4>
      <B.BottomStar5>
        <img id="Red" src={Red} />
      </B.BottomStar5>
      <Footer />
    </B.Container>
  );
};
export default Book;
