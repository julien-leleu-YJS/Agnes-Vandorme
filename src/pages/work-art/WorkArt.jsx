import React from 'react';
import { Navigate } from 'react-router';
import Proptypes from 'prop-types';
import './workArt.scss';
import './tabletteWorkArt.scss';
import './deskWorkArt.scss';

function WorkArt({ tableau }) {
  return (
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
      : <Navigate to="/home" />
  );
}

WorkArt.propTypes = {
  tableau: Proptypes.shape().isRequired,
};

export default React.memo(WorkArt);
