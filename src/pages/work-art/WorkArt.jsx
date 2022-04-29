import React from 'react';
import { Navigate } from 'react-router';
import Proptypes from 'prop-types';
import './workArt.scss';

function WorkArt({ tableau }) {
  return (
    tableau.id
      ? (
        <div className="home-container">
          <h1>{tableau.title}</h1>
          <h2>{tableau.description}</h2>
          <img className="pics-work" src={tableau.src} alt="test" />
          <div>
            {tableau.audio}
            {' '}
          </div>
        </div>
      )
      : <Navigate to="/home" />
  );
}

WorkArt.propTypes = {
  tableau: Proptypes.shape().isRequired,
};

export default React.memo(WorkArt);
