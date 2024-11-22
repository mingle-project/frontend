import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import * as L from '../styles/LandingStyles';
import GroupingDetail from '../components/GroupingDetail';
import CodeInputDetail from '../components/CodeInputDetail';
import LogoImg from '../assets/logofinal.svg';
import LoginBtn from '../assets/loginbtn.svg';
import Globe from '../assets/globe.svg';
import Ministarpink from '../assets/ministarpink.png';
import Ministaryellow from '../assets/ministaryellow.png';
import Ministarneon from '../assets/ministary_green.png';
import Ministarred from '../assets/ministarred.png';
import Ministargreen from '../assets/ministargreen.png';
import Ministarblue from '../assets/ministarblue.png';
import GroupingBtn from '../assets/groupingbtn.svg';
import CodeInputBtn from '../assets/codeinputbtn.svg';

const Grouping = () => {
  const [isGroupingBtnClicked, setIsGroupingBtnClicked] = useState(false);
  const [isCodeInputBtnClicked, setIsCodeInputBtnClicked] = useState(false);
  const [userData, setUserData] = useState({ user: [] });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const GroupingBtnClick = () => {
    setIsGroupingBtnClicked(true);
  };
  const CodeInputBtnClick = () => {
    setIsCodeInputBtnClicked(true);
  };

  const token = useSelector((state) => state.user.token);
  const galaxyId = useSelector((state) => state.user.galaxy_id);
  console.log('Current token:', token);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/me/profile`, {
          headers: { Authorization: token },
        });
        console.log(response.data);
        setUserData(response.data);
      } catch (err) {
        console.error('Full error response:', err.response);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <L.Container>
      <L.Logo>
        <img id="LogoImg" src={LogoImg} />
      </L.Logo>
      <L.Welecome>
        안녕하세요!{' '}
        {userData && userData.nickname
          ? userData.nickname
          : 'No members available'}
        님
      </L.Welecome>

      <L.GroupingBtn onClick={GroupingBtnClick}>
        <img id="LoginBtn" src={GroupingBtn} />
      </L.GroupingBtn>

      <L.CodeInputBtn onClick={CodeInputBtnClick}>
        <img id="LoginBtn" src={CodeInputBtn} />
      </L.CodeInputBtn>

      <L.IsItFirst>
        <p>
          도움이 필요하신가요? <a>도움말</a>
        </p>
      </L.IsItFirst>

      <L.LandingImg style={{ bottom: '-150px' }}>
        <L.Stars>
          <img id="Ministarpink" src={Ministarpink} />
          <img id="Ministaryellow" src={Ministaryellow} />
          <img id="Ministarneon" src={Ministarneon} />
          <img id="Ministarred" src={Ministarred} />
          <img id="Ministargreen" src={Ministargreen} />
          <img id="Ministarblue" src={Ministarblue} />
        </L.Stars>
        <img src={Globe} />
      </L.LandingImg>

      {isGroupingBtnClicked && (
        <>
          <L.Backdrop onClick={() => setIsGroupingBtnClicked(false)} />{' '}
          <GroupingDetail />
        </>
      )}
      {isCodeInputBtnClicked && (
        <>
          <L.Backdrop onClick={() => setIsCodeInputBtnClicked(false)} />{' '}
          <CodeInputDetail />
        </>
      )}
    </L.Container>
  );
};

export default Grouping;
