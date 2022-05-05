import React from 'react';

import './footer.scss';

function Footer() {
  return (
    <div className="footer-container">

      <nav className="mentions-container">
        <a className="mentions-button" href="contact">Contact</a>

      </nav>
    </div>
  );
}

Footer.propTypes = {};

export default React.memo(Footer);
