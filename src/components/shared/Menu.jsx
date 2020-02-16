import React from 'react';
import { Link } from 'react-scroll';

const CATHEGORIES = [
  {
    name: 'despre',
    anchor: 'about',
  },
  {
    name: 'program',
    anchor: 'program',
  },
  {
    name: 'sponsori',
    anchor: 'sponsors',
  },
  {
    name: 'contact',
    anchor: 'contact',
  },
];

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
      {CATHEGORIES.map((cathegory, index) => [
        <MenuButton anchor={cathegory.anchor}>{cathegory.name}</MenuButton>,
        index === CATHEGORIES.length - 1 ? null : separator,
      ])}
    </div>
  );
};

export default Menu;
