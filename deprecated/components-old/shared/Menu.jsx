import React from 'react';
import { Link } from 'react-scroll';
import { MENU_CATHEGORIES } from '../../Constants';

const MenuButton = props => {
  const { anchor, children } = props;
  return (
    <Link
      activeClass={'active'}
      to={anchor}
      smooth={true}
      delay={300}
      duration={800}
      offset={-70}
      isDynamic={true}
      spy={true}
    >
      {children}
    </Link>
  );
};

const Menu = ({ separator }) => {
  return (
    <div className="menu d-flex flex-row justify-content-center">
      {MENU_CATHEGORIES.map((cathegory, index) => [
        <MenuButton anchor={cathegory.anchor}>{cathegory.name}</MenuButton>,
        index === MENU_CATHEGORIES.length - 1 ? null : separator,
      ])}
    </div>
  );
};
export default Menu;
