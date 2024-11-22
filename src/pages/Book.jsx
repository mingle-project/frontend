import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import { useSelector } from "react-redux";
import axios from "axios";
import BookHeader from "../components/BookHeader";

import Footer from "../components/Footer";
import * as B from "../styles/BookStyles";
import Bottom from "../assets/rectangle2.png";
import Bar from "../assets/rectangle1.png";
import Wearing from "../assets/partyhat.png";
import Hanger from "../assets/hanger.png";


const Book = () => {
  const [stars, setStars] = useState([]); // 별 데이터를 저장할 상태
  const [mainStar, setMainStar] = useState(null); // 메인 별 데이터를 저장할 상태
  const token = useSelector((state) => state.user.token); // Redux에서 토큰 가져오기
  const galaxyId = useSelector((state) => state.user.galaxy_id); // Redux에서 Galaxy ID 가져오기

  // 별 데이터 가져오기
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get(`/api/galaxy/${galaxyId}/stars`, {
          headers: {
            Authorization: token, // 토큰을 Authorization 헤더에 추가
          },
        });

        if (response.status === 200 && response.data.설명 === "성공") {
          setStars(response.data.data); // 별 데이터 설정 (data 배열을 저장)
        } else {
          console.error("데이터를 가져오지 못했습니다: ", response.data.설명);
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    if (token && galaxyId) {
      fetchStars();
    }
  }, [token, galaxyId]);

  // 메인 별 데이터 가져오기
  useEffect(() => {
    const fetchMainStar = async () => {
      try {
        const response = await axios.get(`/api/galaxy/${galaxyId}/stars/main`, {
          headers: {
            Authorization: token, // 토큰을 Authorization 헤더에 추가
          },
        });

        if (response.status === 200 && response.data.설명 === "성공") {
          setMainStar(response.data); // 메인 별 데이터 설정
        } else {
          console.error(
            "메인 별 데이터를 가져오지 못했습니다: ",
            response.data.설명
          );
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    if (token && galaxyId) {
      fetchMainStar();
    }
  }, [token, galaxyId]);

  // 별을 메인 별로 설정
  const handleSelectMainStar = async (starId) => {
    try {
      const response = await axios.put(
        `/api/galaxy/${galaxyId}/stars/main`,
        { star_id: starId },
        {
          headers: {
            Authorization: token, // 토큰을 Authorization 헤더에 추가
          },
        }
      );

      if (response.status === 200 && response.data.status === "success") {
        console.log(response.data.message); // 성공 메시지
        // 새로운 메인 별 데이터 가져오기
        const updatedMainStarResponse = await axios.get(
          `/api/galaxy/${galaxyId}/stars/main`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (
          updatedMainStarResponse.status === 200 &&
          updatedMainStarResponse.data.설명 === "성공"
        ) {
          setMainStar(updatedMainStarResponse.data); // 새 메인 별 설정
        }
      } else {
        console.error("메인 별 선택에 실패했습니다: ", response.data.message);
      }
    } catch (error) {
      console.error("메인 별 설정 중 오류 발생:", error);
    }
  };

  return (
    <B.Container>
      <Header pageurl="/Bookitem" img={Hanger} />
      <B.MainStar>
        {mainStar && (
          <img
            id="MainStar"
            src={mainStar.star_type.image}
            alt={mainStar.star_type.name}
          />
        )}
      </B.MainStar>
      <B.BottomBackground>
        <img id="BottomBackground" src={Bottom} />
        {stars.map((star) => (
          <B.Star
            key={star.star_id}
            onClick={() => handleSelectMainStar(star.star_id)} // 클릭 시 메인 별로 설정
          >
            <img src={star.star_type.image} alt={star.star_type.name} />
          </B.Star>
        ))}
      </B.BottomBackground>
      <B.BottomBar>
        <img id="BottomBar" src={Bar} />
      </B.BottomBar>
      <Footer />
    </B.Container>
  );
};
export default Book;
