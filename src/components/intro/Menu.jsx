import React from 'react';
import { Link } from 'react-scroll';

const Separator = props => {
  return <span style={{ cursor: 'default' }}>&bull;</span>;
};

const MenuButton = props => {
  const { anchor, children } = props;
  return (
    <Link to={anchor} smooth={true} delay={300} duration={800} offset={-50} isDynamic={true}>
      <button className="cbtn-secondary">{children}</button>
    </Link>
  );
};

const Menu = props => {
  return (
    <div className="intro-menu d-flex flex-row justify-content-center">
      <MenuButton anchor="about">despre</MenuButton>
      <Separator />
      <MenuButton anchor="program">program</MenuButton>
      <Separator />
      <MenuButton anchor="sponsors">sponsori</MenuButton>
      <Separator />
      <MenuButton anchor="contact">contact</MenuButton>
    </div>
  );
};

export default Menu;
