import React from 'react';
import './biography.scss';

function Biography() {
  return (
    <div className="biography-container">
      <h2 className="title-page-biography">biography</h2>
      <h1 className="title-biography">Agnès Vandorme</h1>
      <p className="text-biography">
        Agnès Vandorme a scruté le monde et capturé des images qui ont
        déclenché une sensibilité, genèse de sa créativité .
        <br />
        <br />
        sensible aux sons et à la musique autant qu&#39;à la peinture,
        elle trouvera
        le point de fusion entre couleur, son , toucher .
        <br />
        <br />
        Depuis 40 ans, la vibration des couleurs à travers
        l&#39;enrichissement personnel grâce à une immersion dans
        différentes cultures comme Tahiti, le Maroc, Nouméa,
        lui ont permis d&#39;être une coloriste hors pair.
        <br />
        <br />
        Les échanges et découvertes lui ont permis une évolution
        artistique pour mêler ressenti et expression
        instantanées.
        <br />
        <br />
        Chaque tableau est un morceau d&#39;elle-même.
        <br />
        c&#39;est dans son atelier qu&#39;elle appelle le Laboratoire,
        qu&#39;elle invente, mélange pigments et création de produit,
        pour donner naissance à des œuvres uniques .
      </p>
      <img className="agnes" src="agnes.jpg" alt="agnes" />
    </div>
  );
}

Biography.propTypes = {};

export default React.memo(Biography);
