import React from 'react';
import Flower from '../../composants/flower/Flower';
import './entrance.scss';
import './tabletteEntrance.scss';
import './deskEntrance.scss';

function Entrance() {
  return (
    <div className="entrance-container">
      <div className="title-container">
        <h1 className="title-entrance">Agnès Vandorme</h1>
        <div className="separation">  </div>
        <h2 className="second-title-entrance">Artist Web Galery</h2>
        <Flower />
        <a className="enter-button" href="home">ENTRÉE</a>
      </div>
    </div>
  );
}

export default React.memo(Entrance);
