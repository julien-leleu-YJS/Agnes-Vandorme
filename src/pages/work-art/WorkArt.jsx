import React from 'react';
import { Navigate } from 'react-router';
import Proptypes from 'prop-types';
import './workArt.scss';

// ici la construction dynamique de la page work art
// qui fait appelle à la pseudo bdd data.js
function WorkArt({ tableau }) {
  return (
  // ici le "?" permet de dire "si il existe, alors on affiche"
    tableau.id
      ? (
        <div className="home-container">
          <div className="groupe-title">
            <h1 className="title-work">{tableau.title}</h1>
            <div className="audio">
              {tableau.audio}
              {' '}
            </div>
          </div>
          <img className="pics-work" src={tableau.src} alt={tableau.alt} />
          <h2 className="description-work">{tableau.description}</h2>

        </div>
      )
      // le navigate permet la redirection forcé vers
      // la page home apres un refresh de la page work art
      : <Navigate to="/home" />
  );
}

// dans les prop-types la notion de " shape" indique un objet requis
WorkArt.propTypes = {
  tableau: Proptypes.shape().isRequired,
};

export default React.memo(WorkArt);
