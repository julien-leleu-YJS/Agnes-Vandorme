import React from 'react';

function Entrance() {
  return (
    <div>
      <h1 className="title-entrance">Agnès Vandorme</h1>
      <div />
      <h2 className="second-title-entrance">Artist Web Galery</h2>
      <button className="enter-button" type="button">enter</button>
    </div>
  );
}

Entrance.propTypes = {};

export default React.memo(Entrance);
