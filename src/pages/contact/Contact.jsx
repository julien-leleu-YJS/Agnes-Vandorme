/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './contact.scss';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="title-contact">Contact</h1>
      <div className="form-container">
        <form onSubmit={onclick}>
          <fieldset>
            <label>
              <p className="title-input">Nom</p>
              <input className="input" name="name" />
            </label>
            <label>
              <p className="title-input">Pénom</p>
              <input className="input" name="surname" />
            </label>
            <label>
              <p className="title-input">email</p>
              <input className="input" name="email" />
            </label>
            <label>
              <p className="title-input">Numéro d&#39;Oeuvre(s)</p>
              <input className="input" name="number" />
            </label>
            <label>
              <p className="title-input">Message</p>
              <input className="message" type="text" maxLength="120" name="message" />
            </label>

          </fieldset>
          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}

Contact.propTypes = {};

export default React.memo(Contact);
