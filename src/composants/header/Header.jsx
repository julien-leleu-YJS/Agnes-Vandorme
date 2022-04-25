import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className="header-container">
      <h1 className="title-home">
        Agnès Vandorme
      </h1>
      <a className="link-acceuil" href="home">Acceuil</a>
    </div>
  );
}

Header.propTypes = {};

export default React.memo(Header);
