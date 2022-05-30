/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.scss';
import './tabletteContact.scss';
import './deskContact.scss';

function Contact() {
  const [state, handleSubmit] = useForm('mrgjojda');
  return (
    <div className="contact-container">
      <h1 className="title-contact">Contact</h1>
      { !state.succeeded && (
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          <p className="title-input">Nom</p>
          <input className="input" name="name" />
        </label>
        <label>
          <p className="title-input">Pénom</p>
          <input className="input" name="surname" />
        </label>
        <label>
          <p className="title-input">Numéro d&#39;Oeuvre(s)</p>
          <input className="input" name="number" />
        </label>
        <label className="input" htmlFor="email">
          <p className="title-input"> Email Address</p>
        </label>
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label className="input" htmlFor="message">
          <p className="title-input">Votre message</p>

        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="submit-button" type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
      ) }
      { state.succeeded && (
        <p className="text-confirm">Merci pour votre message !</p>
      ) }
    </div>
  );
}

export default React.memo(Contact);
