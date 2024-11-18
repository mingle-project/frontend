import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as I from '../styles/IntroductionStyles';
import Header1 from '../components/Header1';
import IntroFooter from '../components/IntroductionFooter';
import IntroStarD0 from '../assets/stardust0.png';
import IntroStarD1 from '../assets/stardust1.png';
import MingleLogoW from '../assets/minglelogowhite1.png';

const Introduction = () => {
  return (
    <I.Container>
      <Header1 />
      <I.Stardust0>
        <img id="IntroStarD0" src={IntroStarD0} />
      </I.Stardust0>
      <I.Stardust1>
        <img id="IntroStarD1" src={IntroStarD1} />
      </I.Stardust1>
      <I.ImgLogo>
        <img id="MingleLogoW" src={MingleLogoW} />
      </I.ImgLogo>
      <I.Text>
        <p>우주 먼지들이 모여</p>
        <p>하나의 별을 완성한다</p>
      </I.Text>
      <IntroFooter />
    </I.Container>
  );
};
export default Introduction;
