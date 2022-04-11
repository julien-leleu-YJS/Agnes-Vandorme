import React from 'react';
import './biography.scss';

function Biography() {
  return (
    <div className="biography-container">
      <h1 className="title-biography">Agnès Vandorme</h1>
      <p className="text-biography">
        depuis toujours Agnès a scruté le monde et capturé des images qui ont
        déclenché une sensibilité genèse de sa créativité .
        sensible aux sons et à la musique autant qu'à la peinture,
        elle trouvera
        le point de fusion entre couleur, son , toucher .
        Depuis 40 ans, la vibration des couleurs à travers
        l'enrichissement personnel grâce à une immersion dans
        différentes cultures comme Tahiti, le Maroc, Nouméa,
        lui a permis d'être une coloriste hors pair.
        Les échanges et découvertes lui ont permis une évolution
        artistique dans le cadre de mêler ressenti et expression
        instantanées de cette dernière.
        Chaque tableau est un morceau d'elle-même.
        c'est dans son atelier qu'elle appelle le Laboratoire,
        qu'elle invente, mélange pigments et création de produit,
        pour donner naissance à des œuvres uniques .
      </p>
    </div>
  );
}

Biography.propTypes = {};

export default React.memo(Biography);
