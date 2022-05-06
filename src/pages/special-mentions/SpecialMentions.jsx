import React from 'react';
import './specialMentions.scss';
import './tabletteMentions.scss';

function SpecialMentions() {
  return (
    <div className="mentions-container">
      <h1 className="title-mentions">Mentions Spéciales</h1>
      <div className="atelier-agnes">
        <h2 className="title-atelier">Envie d&#39;apprendre ?</h2>
        <a className="link-atelier" href="https://www.agnes-vandorme.com/">www.agnes-vandorme.com </a>
      </div>
      <div className="dev-container">
        <h2 className="title-dev">Besoin de se digitaliser ?</h2>
        <h3 className="mail-dev">jleleu.dev@gmail.com</h3>
      </div>
      <div className="hang-container">
        <h2 className="title-hang">Musiques : Hang </h2>
        <a className="link-hang" href="https://hangmassive.com/">Découvrir Hang-Massive</a>
      </div>
      <div className="cassie-container">
        <h2 className="title-cassie">Découvrir les design de Cassie Evans </h2>
        <a className="link-evans" href="https://codepen.io/cassie-codes">Cassie Evans</a>
      </div>
      <div className="thanks-container">
        <h2 className="title-thanks">Merci de votre visite</h2>

      </div>

    </div>
  );
}

SpecialMentions.propTypes = {};

export default React.memo(SpecialMentions);
