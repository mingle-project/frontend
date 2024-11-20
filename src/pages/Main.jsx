import React from "react";
import * as M from "../styles/MainStyles.jsx";
import Footer from "../components/Footer.jsx";
import Moon from "../assets/earthgray.png";
import MyPageBtn from "../assets/menu.png";
import MiniLogo from "../assets/minilogo.svg";
import Point from "../assets/starcoin.png";
import Cart from "../assets/cart.png";
const Main = () => {
  return (
    <M.Container>
      <M.Header>
        <div id="point">
          <img src={Point} /> <p>100</p>
        </div>
        <div id="minilogo">
          <img src={MiniLogo} />
        </div>
        <div id="mypage">
          <img src={MyPageBtn} />
        </div>
      </M.Header>

      <img id="cart" src={Cart} />

      <M.body></M.body>
      <Footer />
      <img id="moon" src={Moon} />
    </M.Container>
  );
};
export default Main;
