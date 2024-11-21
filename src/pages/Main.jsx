import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as M from '../styles/MainStyles.jsx';
import Footer from '../components/Footer.jsx';
import Moon from '../assets/earthgray.png';
import MyPageBtn from '../assets/menu.png';
import MiniLogo from '../assets/minilogo.svg';
import PointImg from '../assets/starcoin.png';
import Cart from '../assets/cart.png';
import { useSelector } from 'react-redux';

const Main = () => {
  const [point, setPoint] = useState(0); // 포인트 상태 초기화
  const [image, setImage] = useState(''); // 이미지 상태 초기화
  const [color, setColor] = useState(''); // 색상 상태 초기화
  const [creatingStar, setCreatingStar] = useState(false); // 별 생성 상태 초기화

  const navigate = useNavigate();

  const handleMyPageClick = () => {
    navigate('/memberinformation');
  };

  const galaxyId = useSelector((state) => state.user.galaxy_id);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pointResponse, starResponse] = await Promise.all([
          axios.get(`/api/galaxy/${galaxyId}/cash`, {
            headers: {
              Authorization: token,
            },
          }),
          axios.get(`/api/galaxy/${galaxyId}/stars/pet`, {
            headers: {
              Authorization: token,
            },
          }),
        ]);

        if (pointResponse.status === 200) {
          setPoint(pointResponse.data.cash); // 포인트 정보 설정
        } else {
          console.error('포인트 정보를 가져오는 데 실패했습니다.');
        }

        if (starResponse.status === 200 && starResponse.data) {
          // 서버에서 받아온 이미지와 색상 정보 설정
          setImage(starResponse.data.image);
          setColor(starResponse.data.color);
        } else {
          console.error('스타 데이터를 가져오는 데 실패했습니다.');
          setImage(null); // 스타 데이터가 없으면 이미지 상태를 null로 설정
        }
      } catch (error) {
        console.error('서버 오류:', error);
      }
    };

    if (galaxyId) {
      fetchData(); // galaxyId가 있을 때만 실행
    }
  }, [galaxyId, token]); // galaxyId 또는 token이 변경될 때마다 실행

  // 별을 생성하는 함수
  const createNewStar = async () => {
    try {
      setCreatingStar(true); // 버튼 클릭 시 로딩 상태로 변경

      const response = await axios.get(
        `/api/galaxy/${galaxyId}/stars/pet/new`,
        {}, // 별 생성에 필요한 데이터가 있다면 여기에 추가
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        setImage(response.data.image); // 새로운 별 이미지로 업데이트
        setColor(response.data.color); // 새로운 별 색상으로 업데이트
      } else {
        console.error('새로운 별 생성에 실패했습니다.');
      }
    } catch (error) {
      console.error('별 생성 중 오류 발생:', error);
    } finally {
      setCreatingStar(false); // 로딩 상태 해제
    }
  };

  return (
    <M.Container>
      <M.Header>
        <div id="point">
          <img src={PointImg} alt="Starcoin" /> <p>{point}</p>
        </div>
        <div id="minilogo">
          <img src={MiniLogo} alt="Mini Logo" />
        </div>
        <div id="mypage" onClick={handleMyPageClick}>
          <img src={MyPageBtn} alt="My Page Button" />
        </div>
      </M.Header>

      <img id="cart" src={Cart} alt="Cart" />

      <M.body>
        {image ? (
          // 이미지가 있을 경우 별을 표시
          <img
            id="star"
            src={image}
            alt="Star"
            style={{ backgroundColor: color }} // 배경 색상 적용
          />
        ) : (
          // 이미지가 없을 경우 새로운 별 생성 버튼 표시
          <div>
            <p>별이 생성되지 않았습니다.</p>
            <button
              onClick={createNewStar}
              disabled={creatingStar} // 별 생성 중에는 버튼 비활성화
            >
              {creatingStar ? '별 생성 중...' : '새로운 별 생성하기'}
            </button>
          </div>
        )}
      </M.body>

      <Footer />
      <img id="moon" src={Moon} alt="Moon" />
    </M.Container>
  );
};

export default Main;
