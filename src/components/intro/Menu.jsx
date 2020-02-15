import React from 'react';
const Separator = props => {
  return <span style={{ cursor: 'default' }}>&bull;</span>;
};

const Menu = props => {
  return (
    <div className="intro-menu d-flex flex-row justify-content-center">
      <button className="cbtn-secondary">despre</button>
      <Separator />
      <button className="cbtn-secondary">program</button>
      <Separator />
      <button className="cbtn-secondary">sponsori</button>
      <Separator />
      <button className="cbtn-secondary">contact</button>
    </div>
  );
};

export default Menu;
