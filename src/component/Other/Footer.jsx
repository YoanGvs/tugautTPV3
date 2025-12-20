import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  const isContactPage = props.type === "contact";

  return (
    <section className={"footer py-5 " + (isContactPage ? "" : "mt__10")}>
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-4">
            <div className="footer__brand">
              <img
                id="logo"
                src="/images/project/logo_tugauttp.png"
                alt="logo TUGAUT TP"
                className="mb-3"
              />
              <p className="normal font__size--16 text__16-1024 roboto mb-3">
                Entreprise familiale experte depuis plus de 12 ans, nous
                accompagnons collectivités, entreprises et particuliers dans la
                réalisation de chantiers durables, maîtrisés et conformes aux
                normes environnementales.
              </p>
              <NavLink
                to="/contact#contact-form"
                className="btn btn__orange text-uppercase semi-bold font__size--14 text__14-1024 rounded-0 shadow"
              >
                Demander un devis
              </NavLink>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="footer__title semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              Navigation
            </h5>
            <ul className="list-unstyled footer__links">
              <li>
                <NavLink to="/" className="footer__link">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="footer__link">
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/service#service-hero" className="footer__link">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className="footer__link">
                  Projets
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="footer__link">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="footer__link">
                  Politique de confidentialité
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="footer__title semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              Coordonnées
            </h5>
            <ul className="list-unstyled footer__list">
              <li className="d-flex align-items-start mb-3">
                <img src="/images/emailIcon.webp" alt="email" />
                <span className="ms-2 roboto normal font__size--16 text__16-1024 ">
                  tugauttp@gmail.com
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <img src="/images/Call.png" alt="téléphone" />
                <span className="ms-2 roboto normal font__size--16 text__16-1024 ">
                  +33 6 70 01 24 95
                </span>
              </li>
              <li className="d-flex align-items-start">
                <img src="/images/Frame.png" alt="adresse" />
                <span className="ms-2 roboto normal font__size--16 text__16-1024 ">
                  162 rue Cerisiers Roussel <br /> 60700 Pontpoint
                </span>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <h5 className="footer__title semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              Nous suivre
            </h5>
            <div className="d-flex align-items-center mb-3">
              <a
                href="https://www.facebook.com/TUGAUT.TP"
                className="footer__social"
              >
                <img src="/images/facebookIcon.webp" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/tugaut.tp/"
                className="footer__social mx-3"
              >
                <img src="/images/instagramIcon.webp" alt="Instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@tugaut.tp"
                className="footer__social"
              >
                <img src="/images/tiktokIcon24Px.webp" alt="TikTok" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__legal-wrapper">
        <div className="footer__legal-text">
          <NavLink to="/terms#mentions-legales" className="footer__legal-link">
            Mentions légales
          </NavLink>
          <span className="footer__legal-separator"> - </span>
          <span className="footer__legal-label">Une création </span>
          <span className="footer__legal-brand">Webessor</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
