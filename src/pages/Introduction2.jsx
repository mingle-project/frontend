import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as I from '../styles/IntroductionStyles';
import Header1 from '../components/Header1';
import IntroFooter from '../components/IntroductionFooter';

const Introduction = () => {
  return (
    <I.Container>
      <Header1 />
      <I.Text2>
        <p>여러분과 함께할</p>
        <p>밍글은</p>
      </I.Text2>
      <I.Text3>
        <p>서로의 소중함을 함께 나누며</p>
        <p>더욱 깊은 관계를</p>
        <p>만들어가기 위해</p>
        <p>탄생했습니다.</p>
      </I.Text3>
      <I.Text4>
        <p>즐거운 추억과</p>
        <p>소중한 기억 모두</p>
        <p>이제 밍글에서 함께</p>
        <p>보관하세요.</p>
      </I.Text4>
      <IntroFooter />
    </I.Container>
  );
};
export default Introduction;
