import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as H1 from '../styles/Header1Styles';
import Arrow from '../assets/arrow.png';
import MingleLogo from '../assets/minglelogowhite1.png';
import Hanger from '../assets/hanger.png';

const Introduction = () => {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/memberinformation');
  };

  return (
    <H1.Container>
      <H1.Arrow onClick={handleArrowClick}>
        <img id="Arrow" src={Arrow}></img>
      </H1.Arrow>
      <H1.MingleLogo>
        <img id="MingleLogo" src={MingleLogo}></img>
      </H1.MingleLogo>
    </H1.Container>
  );
};
export default Introduction;

const Book = () => {
  return (
    <H1.Container>
      <H1.Hanger>
        <img id="Hanger" src={Hanger}></img>
      </H1.Hanger>
      <H1.MingleLogo>
        <img id="MingleLogo" src={MingleLogo}></img>
      </H1.MingleLogo>
    </H1.Container>
  );
};
