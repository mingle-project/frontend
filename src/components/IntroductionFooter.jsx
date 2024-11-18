import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as If from '../styles/IntroductionFooterStyles';
import StarRed from '../assets/ministarred.png';
import Earth from '../assets/earth.png';

const Introduction = () => {
  return (
    <If.Container>
      <If.StarRed>
        <img id="StarRed" src={StarRed} />
      </If.StarRed>
      <If.Earth>
        <img id="Earth" src={Earth} />
      </If.Earth>
    </If.Container>
  );
};
export default Introduction;
