import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className="header-container">
      <h1 className="title-home">Agnès Vandorme</h1>
      <h2 className="menu-burger">menu burger</h2>
    </div>
  );
}

Header.propTypes = {};

export default React.memo(Header);
