import React, { useState } from 'react';
import './linkContact.scss';

function LinkContact() {
  const [show, setShow] = useState(false);
  return (
    <>
      <a href="contact" onClick={() => setShow((prev) => !prev)}>contact</a>
      {show && LinkContact}
    </>
  );
}

LinkContact.propTypes = {};

export default React.memo(LinkContact);
