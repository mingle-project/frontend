import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as I from '../styles/IntroductionStyles';
import Header1 from '../components/Header1';
import IntroFooter from '../components/IntroductionFooter';

const Introduction = () => {
  return (
    <I.Container>
      <Header1 />
      <I.GroupText>
        <p>그룹 활동을 위한 맞춤 설정</p>
      </I.GroupText>
      <I.GroupText2>
        <p>친구들과의 관계를</p>
        <p>더욱 깊게 만들어주는 질문과 응답</p>
      </I.GroupText2>
      <I.GroupText3>
        <p>그룹 활동으로</p>
        <p>별을 성장시키고 꾸미는 즐거움</p>
      </I.GroupText3>
      <I.GroupText4>
        <p>그룹 활동으로</p>
        <p>별을 성장시키고 꾸미는 즐거움</p>
      </I.GroupText4>
      <IntroFooter />
    </I.Container>
  );
};
export default Introduction;
