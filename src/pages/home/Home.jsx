import React from 'react';
import './home.scss';
import './tabletteHome.scss';

function Home() {
  return (
    <div className="home-container">
      <img className="photo-pinceaux" src="artistic-2230433_1920.jpg" alt="pinceaux" />
      <div className=" link-container">
        <a className="biography-link" href="biography">Biographie</a>
        <a className="web-galery-link" href="artist-web-galery">Artist Web Galery</a>
        <a className="contact-link" href="special-mentions">Mentions spéciales</a>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default React.memo(Home);
