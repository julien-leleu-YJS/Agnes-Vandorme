/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.scss';
// utiliser ce plug-in pour le formulaire de contact https://formspree.io/login

function Contact() {
  const [state, handleSubmit] = useForm('mrgjojda');
  if (state.succeeded) {
    return <p>Merci pour votre message !</p>;
  }
  return (
    <div className="contact-container">
      <h1 className="title-contact">Contact</h1>
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

        <label className="title-input" htmlFor="email">
          Email Address
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
        <label className="title-input" htmlFor="message">
          Votre message
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
        <button className="submit" type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

Contact.propTypes = {};

export default React.memo(Contact);
