import React from 'react';
import './entrance.scss';

function Entrance() {
  return (
    <div className="title-container">
      <h1 className="title-entrance">Agnès Vandorme</h1>
      <div className="separation">  </div>
      <h2 className="second-title-entrance">Artist Web Galery</h2>
      <a className="enter-button" href="home">enter</a>
    </div>
  );
}

Entrance.propTypes = {};

export default React.memo(Entrance);
