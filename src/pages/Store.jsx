import { React, useEffect, useState, useRef } from "react";
import * as S from "../styles/StoreStyles";
import Header1 from "../components/Header1";
import Bottom from "../assets/rectangle0.png";
import Bar from "../assets/rectangle1.png";
import Violet from "../assets/minglelogoviolet.png";
import Wearing from "../assets/partyhat.png";

import Crown from "../assets/crown.png";
import Coconut from "../assets/coconuts.png";
import Starfish from "../assets/starfish.png";
import Sunglass from "../assets/sunglasses.png";
import Sakura from "../assets/sakura.png";
import Guitar from "../assets/guitar.png";
import Drum from "../assets/drum.png";
import Sword from "../assets/sword.png";
import Snow from "../assets/snow.png";

import Minglewhite from "../assets/minglelogowhite0.png";
import Minglegreen from "../assets/minglelogogreen.png";
import Mingleyellow from "../assets/minglelogoyellow.png";
import Mingleviolet from "../assets/minglelogoviolet.png";
import Minglered from "../assets/minglelogored.png";

import Aurapink from "../assets/aurapink.png";
import Auragreen from "../assets/auragreen.png";
import Aurayellow from "../assets/aurayellow.png";
import Aurasky from "../assets/aurasky.png";
import Aurared from "../assets/aurared.png";
import Aurablue from "../assets/aurablue.png";

import Planetblue from "../assets/planetblue.png";
import Planetgray from "../assets/planetgray.png";
import Planetorange from "../assets/planetorange.png";
import Planetviolet from "../assets/planetviolet.png";
import Planetyellow0 from "../assets/planetyellow0.png";
import Planetyellow1 from "../assets/planetyellow1.png";

import Coin from "../assets/starcoin.png";

const Store = () => {
  const [items] = useState([
    { id: "Crown", src: Crown, price: 500, category: "아이템" },
    { id: "Coconut", src: Coconut, price: 500, category: "아이템" },
    { id: "Starfish", src: Starfish, price: 500, category: "아이템" },
    { id: "Sunglass", src: Sunglass, price: 500, category: "아이템" },
    { id: "Sakura", src: Sakura, price: 500, category: "아이템" },
    { id: "Guitar", src: Guitar, price: 500, category: "아이템" },
    { id: "Drum", src: Drum, price: 500, category: "아이템" },
    { id: "Sword", src: Sword, price: 500, category: "아이템" },
    { id: "Snow", src: Snow, price: 500, category: "아이템" },
    { id: "Minglewhite", src: Minglewhite, price: 500, category: "별" },
    { id: "Minglegreen", src: Minglegreen, price: 500, category: "별" },
    { id: "Mingleyellow", src: Mingleyellow, price: 500, category: "별" },
    { id: "Mingleviolet", src: Mingleviolet, price: 500, category: "별" },
    { id: "Minglered", src: Minglered, price: 500, category: "별" },
    { id: "Aurapink", src: Aurapink, price: 500, category: "오로라" },
    { id: "Auragreen", src: Auragreen, price: 500, category: "오로라" },
    { id: "Aurayellow", src: Aurayellow, price: 500, category: "오로라" },
    { id: "Aurasky", src: Aurasky, price: 500, category: "오로라" },
    { id: "Aurared", src: Aurared, price: 500, category: "오로라" },
    { id: "Aurablue", src: Aurablue, price: 500, category: "오로라" },
    { id: "Planetblue", src: Planetblue, price: 500, category: "행성" },
    { id: "Planetgray", src: Planetgray, price: 500, category: "행성" },
    { id: "Planetorange", src: Planetorange, price: 500, category: "행성" },
    { id: "Planetviolet", src: Planetviolet, price: 500, category: "행성" },
    { id: "Planetyellow0", src: Planetyellow0, price: 500, category: "행성" },
    { id: "Planetyellow1", src: Planetyellow1, price: 500, category: "행성" },
  ]);

  const lastItemRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observerInstance = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
      }
    }, options);

    if (lastItemRef.current) {
      observerInstance.observe(lastItemRef.current);
    }

    return () => {
      if (lastItemRef.current) {
        observerInstance.unobserve(lastItemRef.current);
      }
    };
  }, [lastItemRef]);

  const itemCategories = {
    아이템: items.filter((item) => item.category === "아이템"),
    별: items.filter((item) => item.category === "별"),
    오로라: items.filter((item) => item.category === "오로라"),
  };

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
        <S.ScrollableContent>
          {Object.keys(itemCategories).map((category) => (
            <div key={category}>
              <S.CategoryTitle>{category}</S.CategoryTitle>
              <S.ImageList>
                {itemCategories[category].map((item) => (
                  <S.ImageItem key={item.id}>
                    <img src={item.src} alt={item.id} />
                    <S.ItemPrice>
                      <img src={Coin} alt="Coin" />
                      {item.price}
                    </S.ItemPrice>
                  </S.ImageItem>
                ))}
              </S.ImageList>
            </div>
          ))}
        </S.ScrollableContent>
      </S.BottomBackground>
      <S.BottomBar>
        <img id="BottomBar" src={Bar} />
      </S.BottomBar>

      {/* 마지막 아이템을 감지하기 위한 div */}
      <div ref={lastItemRef}></div>
    </S.Container>
  );
};

export default Store;
