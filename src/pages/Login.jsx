import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice'; // 로그인 액션 가져오기
import { useNavigate } from 'react-router-dom';
import * as L from '../styles/LandingStyles';
import LogoImg from '../assets/logofinal.svg';
import LoginBtn from '../assets/loginbtn.svg';
import Globe from '../assets/globe.svg';
import Ministarpink from '../assets/ministarpink.png';
import Ministaryellow from '../assets/ministaryellow.png';
import Ministarneon from '../assets/ministary_green.png';
import Ministarred from '../assets/ministarred.png';
import Ministargreen from '../assets/ministargreen.png';
import Ministarblue from '../assets/ministarblue.png';
import UserId from '../assets/mail.png';
import UserPassword from '../assets/password.png';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState(''); // 입력된 아이디
  const [password, setPassword] = useState(''); // 입력된 비밀번호
  const dispatch = useDispatch(); // dispatch 훅 사용
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅

  // Login.js
  const handleLoginClick = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });

      if (response.status === 200) {
        const authorization = response.headers.authorization;
        dispatch(login({ id: username, pw: password, token: authorization }));

        console.log('토큰이 Redux에 저장되었습니다:', authorization, username);
        navigate('/grouping');

      } else {
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error.response.status);
    }
  };

  const handleSignUpClick = () => {
    // 회원가입 버튼 클릭 시 회원가입 페이지로 이동
    navigate('/signup');
  };

  return (
    <L.Container>
      <L.Logo>
        <img id="LogoImg" src={LogoImg} alt="logo" />
      </L.Logo>
      <L.LoginForm>
        <div className="userlogin">
          <img id="userId" src={UserId} alt="userId" />
          <input
            type="text"
            placeholder="아이디"
            value={username} // 입력값 상태 관리
            onChange={(e) => setUsername(e.target.value)} // 아이디 입력 시 상태 업데이트
          />
        </div>
        <div className="userlogin">
          <img id="userPassword" src={UserPassword} alt="userPassword" />
          <input
            type="password"
            placeholder="비밀번호"
            value={password} // 입력값 상태 관리
            onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 시 상태 업데이트
          />
        </div>
      </L.LoginForm>
      <L.LoginBtn onClick={handleLoginClick}>
        <img id="LoginBtn" src={LoginBtn} alt="LoginButton" />
      </L.LoginBtn>
      <L.IsItFirst>
        <p>
          밍글이 처음이신가요? <a onClick={handleSignUpClick}>회원가입</a>
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
        <img src={Globe} alt="Globe" />
      </L.LandingImg>
    </L.Container>
  );
};

export default Login;
