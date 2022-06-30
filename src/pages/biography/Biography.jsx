import React from 'react';
import './biography.scss';
import './tabletteBiography.scss';
import './deskBiography.scss';

function Biography() {
  return (
    <div className="biography-container">
      <h2 className="title-page-biography">biographie</h2>
      <h1 className="title-biography">Agnès Vandorme</h1>
      <p className="text-biography">
        Depuis près de 25 ans, l’atelier d’arts d’Agnès Vandorme, situé à Ollioules, vous accueille
        pour un voyage haut en couleurs,
        <br />
        où les œuvres témoignent des rencontres, souvenirs,
        expériences…vécus lors des différentes excursions menées par l’artiste.
        <br />
        Chaque tableau vibre au son de son histoire et révèle une émotion, une nostalgie, une
        découverte vécues.
        <br />
        C&#39;est donc dans son atelier qu&#39;elle appelle «le Laboratoire»,
        qu&#39;Agnès Vandorme choisit avec
        soin ses pigments, ses médiums…
        <br />
        dans le but de donner naissance à des œuvres uniques et
        partager ainsi une partie de son histoire.
      </p>
      <img className="agnes" src="agnes.jpg" alt="agnes" />
    </div>
  );
}

export default React.memo(Biography);
