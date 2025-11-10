import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const formatPhoneInput = (value) => {
  const digitsOnly = value.replace(/\D/g, "").slice(0, 15);
  return digitsOnly.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
};

const isPhoneValid = (value) => {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
};

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgvjkkb");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setEmail("");
      setPhone("");
      setEmailError("");
      setPhoneError("");
    }
  }, [state.succeeded]);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(
      value && !emailRegex.test(value) ? "Adresse email invalide." : ""
    );
  };

  const handlePhoneChange = (event) => {
    const formatted = formatPhoneInput(event.target.value);
    setPhone(formatted);
    setPhoneError(
      formatted && !isPhoneValid(formatted)
        ? "Numéro de téléphone invalide."
        : ""
    );
  };

  const handleValidatedSubmit = (event) => {
    const emailIsValid = emailRegex.test(email);
    const phoneIsValid = isPhoneValid(phone);

    if (!emailIsValid || !phoneIsValid) {
      event.preventDefault();
      setEmailError(emailIsValid ? "" : "Adresse email invalide.");
      setPhoneError(phoneIsValid ? "" : "Numéro de téléphone invalide.");
      return;
    }

    handleSubmit(event);
  };

  return (
    <section className="position-relative">
      <img src="./../images/sdad.png" className="images__wrap-contact" alt="" />
      <div className="wrapper__bg-orange-wrap"></div>
      <div className="container position-relative z-2">
        <div className="row">
          <div className="col-md-6 mb-4 my-md-auto">
            <p className="semi-bold font__size--14 text__14-1024 color__white text-uppercase">
              contact us
            </p>
            <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs color__white text-uppercase mb-4">
              Prêt à lancer votre chantier ?
            </h3>
            <p className="roboto normal font__size--16 text__16-1024 color__white">
              Faites appel à une équipe locale expérimentée, à l’écoute de vos
              besoins, qui comprend vos contraintes et assure un suivi rigoureux
              à chaque étape de votre projet.
            </p>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <form
              className="wrapper__form-contact bg__white mb__min-14"
              onSubmit={handleValidatedSubmit}
            >
              <h3 className="bold font__size--32 color__black text-uppercase mb-4">
                demander un devis
              </h3>
              {state.succeeded && (
                <div className="alert alert-success mb-4" role="alert">
                  Merci ! Votre demande a bien été envoyée.
                </div>
              )}
              <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-name"
                >
                  Nom
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-control wrapper__field"
                  placeholder="Entrer votre nom"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-email"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  className="form-control wrapper__field"
                  placeholder="Entrer votre email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <p className="text-danger small mb-2">{emailError}</p>
                )}
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-phone"
                >
                  Numero de telephone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  pattern="\+?[0-9\s]{10,18}"
                  className="form-control wrapper__field"
                  placeholder="Entrer votre numero de telephone"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
                {phoneError && (
                  <p className="text-danger small mb-2">{phoneError}</p>
                )}
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-message"
                >
                  message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-control wrapper__field textarea"
                  rows="5"
                  placeholder="Décrivez votre projet…"
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                className="semi-bold rounded-0 font__size--14 text__14-1024 btn btn__orange shadow color__white text-uppercase"
                disabled={state.submitting}
              >
                {state.submitting ? "sending..." : "Demander votre devis"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
