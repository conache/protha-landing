import React from 'react';
import FestivalLogo from '../../assets/festival-logo.svg';
import Menu from './Menu';

const intro = props => {
  return (
    <div className="intro d-flex flex-column justify-content-center">
      <div className="intro-content">
        <img src={FestivalLogo} alt="" className="festival-logo" />
        <Menu />
      </div>
    </div>
  );
};

export default intro;
