import React from 'react';
import './artistWebGalery.scss';

function ArtistWebGalery() {
  return (
    <div className="galery-container">
      <h1 className="title-galery">Artist Web Galery</h1>
      <div className="image-container">
        <h2 className="title-tableaux">#01 les cing terres</h2>
        <img className="cinq-terres" src="5 terre.jpg" alt="les 5 terres" />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#02 ananas</h2>
        <img className="ananas" src="ananas.jpg" alt="ananas" />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#03 big bang flower</h2>
        <img className="big-bang-flower" src="big bang flower.jpg" alt="big bang flower" />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#04 bouc</h2>
        <img className="bouc" src="bouc.jpg" alt="bouc" />
      </div>

    </div>
  );
}

ArtistWebGalery.propTypes = {};

export default React.memo(ArtistWebGalery);
