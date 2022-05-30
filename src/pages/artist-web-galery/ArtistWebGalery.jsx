import React from 'react';
import PropTypes from 'prop-types';
import './artistWebGalery.scss';
import './tablette-artist-web-galery.scss';
import './desk-artist-web-galery.scss';
import { Link } from 'react-router-dom';

function ArtistWebGalery({ data, setTableauData }) {
  return (
    data.map((tableauData) => (
      <div className="image-container" key={tableauData.id}>
        <h2 className="title-tableaux">{tableauData.title}</h2>
        <img
          className={tableauData.classname}
          src={tableauData.src}
          alt={tableauData.alt}
        />
        <Link
          className="link-tableau"
          to="/work-art"
          onClick={() => setTableauData(tableauData)}
        >
          Propriétés
        </Link>
        <div className="space"> </div>
      </div>
    ))
  );
}

ArtistWebGalery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setTableauData: PropTypes.func.isRequired,
};

export default React.memo(ArtistWebGalery);
