import React from 'react';
import './artistWebGalery.scss';

function ArtistWebGalery() {
  return (
    <div className="galery-container">
      <h1 className="title-galery">Artist Web Galery</h1>
      <div className="image-container">
        <h2 className="title-tableaux">#01 Demi-pause</h2>
        <img
          className="cinq-terres"
          src="5 terre.jpg"
          alt="description du tableaux à l'huile :
une vue des 5 terre en italie , entre mer et terre , entre habitation atypique et rocher naturel."
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#02 Tempo</h2>
        <img
          className="ananas"
          src="ananas.jpg"
          alt="description du tableaux à l'huile :
un ananas en gros plan , l'effet sur la toile a été vieilli . les couleurs bleu et verte sont dominantes"
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#03 Symphonie</h2>
        <img
          className="big-bang-flower"
          src="big bang flower.jpg"
          alt="description du tableau à l'huile :
un œuvre abstraite , qui fait penser à une explosion de pétale de fleur pointus."
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#04 piston </h2>
        <img
          className="bouc"
          src="bouc.jpg"
          alt="description du tableau à l'huile :
une tête de bélier en gros plan. La couleur bleu est dominante , le regard du bélier a quelque chose de profond et lointain."
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#05 Polyphonie</h2>
        <img
          className="boum"
          src="boum.jpg"
          alt="description du tableau :
une explosion de pétales rond mais découpé par des formes géométriques"
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#06 Chœur </h2>
        <img
          className="cactus"
          src="cactus.jpg"
          alt="description du tableau à l'huile :des cactus ayant l'air de vouloir s'élever vers le ciel , plusieurs couleurs vives présentes tels que le bleu très clair en fond et le rouge et le violet à divers endroits. "
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#07 Répertoire</h2>
        <img
          className="feuilles"
          src="feuille.jpg"
          alt="description du tableau à l'huile :
des feuilles avec un aspect vieilli arborant beaucoup de couleur diverses et vive tel que le bleu le vert et le rouge."
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#08 Sticks</h2>
        <img
          className="lac-et-lotus"
          src="lac et lotus.jpg"
          alt="description du tableau à l'huile :
un étang calme ou flotte nénuphare et se dresse bambou et autres fleurs discrètes. un sentiment d'horizon apaisant se dresse devant."
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#09 Demi-soupir </h2>
        <img
          className="le-sage"
          src="le sage.jpg"
          alt="description du tableau à l'huile:
on distingue un homme vêtu d'une tunique blanche qui le couvre jusqu'à la tête et faisant un signe de main le sourire aux lèvres.
quelque chose de calme se dégage de cette œuvre ."
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#10 Partition</h2>
        <img className="lotus" src="lotus.jpg" alt="les feuille d'un nénuphare en gros plan , donne l'impression que le nenuphare vient de stopper son mouvement d'ouverture juste au moment ou l'on prend le temp de le regarder" />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#11 Chorale</h2>
        <img
          className="meduse"
          src="meduse.jpg"
          alt="description du tableaux à l'huile :
des méduses remontant à la surface . le bas du dessin et sombre et le haut blanc, le tout sur des nuance de bleu tres varié ."
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#12 Cacophonie</h2>
        <img
          className="mouton"
          src="mouton.jpg"
          alt="description du tableau à l'huile :
un troupeau de moutons accompagné du berger qui les guide sur le chemin. des nuances de marron et de vert."
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#13 Berceuse</h2>
        <img
          className="mouton-2"
          src="mouton 2.jpg"
          alt="description du tableau à l'huile :
un troupeau de moutons , au loin, minuscule, sur un fond turquoise nuancé de blanc. "
        />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#14 Balade</h2>
        <img className="venise" src="venise.jpg" alt="une vue de Venise , entre deux immeubles anciens sur lit d'eau ensoleillé avec une végétation courante par endroit." />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#15 Silence </h2>
        <img className="poisson-rouge" src="poisson rouge.jpg" alt="un poisson rouge aux nageoires grandes et dansante qui s'est arrêté pour vous observer le temps d'un instant." />
      </div>

      <div className="image-container">
        <h2 className="title-tableaux">#16 Crescendo </h2>
        <img className="village" src="village.jpg" alt="un plan de Montmartre à paris sur fond blanc, qui s'eleve haut vers le ciel. " />
      </div>

    </div>
  );
}

ArtistWebGalery.propTypes = {};

export default React.memo(ArtistWebGalery);
