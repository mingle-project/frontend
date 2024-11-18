import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as H1 from '../styles/Header1Styles';
import Arrow from '../assets/arrow.png';
import MingleLogo from '../assets/minglelogowhite1.png';

const Introduction = () => {
  return (
    <H1.Container>
      <H1.Arrow>
        <img id="Arrow" src={Arrow}></img>
      </H1.Arrow>
      <H1.MingleLogo>
        <img id="MingleLogo" src={MingleLogo}></img>
      </H1.MingleLogo>
    </H1.Container>
  );
};
export default Introduction;
