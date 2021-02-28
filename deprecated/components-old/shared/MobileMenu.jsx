import React from 'react';
import classnames from 'classnames';
import { MENU_CATHEGORIES } from '../../Constants';

const MobileMenu = ({ onExit, visible }) => {
  const menuClasses = classnames(
    'mobile-menu d-flex flex-column justify-content-center d-block d-sm-none',
    {
      'mobile-menu--hidden': !visible,
    },
  );

  return (
    <div className={menuClasses}>
      {MENU_CATHEGORIES.map((cathegory, index) => (
        <div>{cathegory.name}</div>
      ))}
    </div>
  );
};

export default MobileMenu;
