import React from 'react';
import CustomizedMenus from '../menuBurger/Burger';
import './header.scss';
import './tabletteHeader.scss';
import './deskHeader.scss';

function Header() {
  return (
    <div className="header-container">
      <h1 className="title-home">
        Agnès Vandorme
      </h1>
      <CustomizedMenus />
    </div>
  );
}

Header.propTypes = {};

export default React.memo(Header);
