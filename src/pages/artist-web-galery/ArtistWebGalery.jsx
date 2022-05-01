import React from 'react';
import PropTypes from 'prop-types';
import './artistWebGalery.scss';
// le "link" de react router , permet de créer des chemin vers d'autre page
import { Link } from 'react-router-dom';

function ArtistWebGalery({ data, setTableauData }) {
  return (
    // ici on boucle sur les data grace au ".map"
    data.map((tableauData) => (
      <div className="image-container" key={tableauData.id}>
        <h2 className="title-tableaux">{tableauData.title}</h2>
        <img
          className={tableauData.classname}
          src={tableauData.src}
          alt={tableauData.alt}
        />
        {/* ici la redirection qui affiche le tableau cliké sur work art */}
        <Link
          className="link-tableau"
          to="/work-art"
          onClick={() => setTableauData(tableauData)}
        >
          click me

        </Link>
      </div>
    ))
  );
}

ArtistWebGalery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setTableauData: PropTypes.func.isRequired,
};

export default React.memo(ArtistWebGalery);
