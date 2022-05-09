import React from 'react';

import './footer.scss';
import './tabletteFooter.scss';
import './deskFooter.scss';

function Footer() {
  return (
    <div className="footer-container">

      <nav className="mentions-container">
        { /* afficher un élément ou pas suivant les routes */}
        {window.location.pathname === '/contact'
          ? <a className="mentions-button" href="home">Acceuil</a>
          : <a className="mentions-button" href="contact">Contact</a> }
      </nav>
    </div>
  );
}

Footer.propTypes = {};

export default React.memo(Footer);
