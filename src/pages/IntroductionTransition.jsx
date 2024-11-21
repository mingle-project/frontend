import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as Its from '../styles/IntroductionTransitionStyles';
import Introduction from './Introduction';
import Introduction2 from './Introduction2';
import Introduction3 from './Introduction3';

const IntroductionTransition = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < 2) {
      setCurrentPage((prev) => prev + 1); // 다음 페이지로 이동
    }
  };

  return (
    <Its.Container
      onClick={(e) => {
        e.stopPropagation(); // 이벤트 버블링 방지
        handleNextPage();
      }}
    >
      <TransitionGroup>
        <CSSTransition
          key={currentPage}
          timeout={300}
          classNames="page-transition"
        >
          <Its.Page>
            {currentPage === 0 && <Introduction />}
            {currentPage === 1 && <Introduction2 />}
            {currentPage === 2 && <Introduction3 />}
          </Its.Page>
        </CSSTransition>
      </TransitionGroup>
    </Its.Container>
  );
};

export default IntroductionTransition;
