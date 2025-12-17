import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <section className={"pb-4 " + (props.type != "contact" ? "mt__10" : "")}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0 footer__brand text-center text-md-start">
            <h3 className="semi-bold font__size--24 text__24-1024 color__black mb-3 mb-md-4">
              TUGAUT<span className="color__orange">TP</span>
            </h3>
            <p className="normal font__size--16 text__16-1024 roboto color__gray-1">
              Nous accompagnons collectivités, entreprises et particuliers dans
              la réalisation de chantiers durables, maîtrisés et conformes aux
              normes environnementales.{" "}
            </p>
          </div>
          {/*           <div className="col-6 col-md-3 col-lg-3 mb-4 mb-md-0 footer__links">
            <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3 text-center text-md-start">
              links
            </h5>

            <ul className="wrapper__list-footer text-center text-md-start">
              <li>
                <NavLink
                  to="/"
                  className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover"
                >
                  service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover"
                >
                  project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover"
                >
                  news
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div> */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0 footer__contact text-center text-md-start">
            <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              nos reseau sociaux
            </h5>

            <div className="d-flex align-items-center">
              <a href="https://www.facebook.com/TUGAUT.TP">
                <img src="/images/facebookIcon.webp" alt="lien facebook" />
              </a>
              <a href="https://www.instagram.com/tugaut.tp/" className="mx-3">
                <img src="/images/instagramIcon.webp" alt="lien instagram" />
              </a>
              <a href="https://www.instagram.com/tugaut.tp/" className="mx-3">
                <img src="/images/tiktokIcon24Px.webp" alt="lien tiktok" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0 footer__contact text-center text-md-start">
            <div className="mt-4 mt-md-5">
              <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3 text-center text-md-start">
                nous contacter
              </h5>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start align-items-center align-items-md-start footer__contact-item mb-3">
                <img src="/images/emailIcon.webp" alt="icon email" />
                <span className="semi-bold font__size--14 text__14-1024 text-uppercase ms-sm-2 mt-2 mt-sm-0">
                  contact@tugaut-tp.com
                </span>
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start align-items-center align-items-md-start footer__contact-item">
                <img src="/images/Call.png" alt="" />
                <span className="semi-bold font__size--14 text__14-1024 text-uppercase ms-sm-2 mt-2 mt-sm-0">
                  +33 6 12 34 56 78
                </span>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-lg-4">
            <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              subscribe
            </h5>

            <input
              type="text"
              className="form-control wrapper__field roboto normal font__size--16 text__16-1024 mb-3"
              placeholder="Enter your email"
              name=""
              id=""
            />
            <button className="semi-bold font__size--14 text__14-1024 color__white text-uppercase btn btn__orange shadow rounded-0">
              send
            </button>
          </div> */}
        </div>
        <div className="text-center normal roboto font__size--16 text__16-1024 color__gray-1 mt-4 mt-md-5">
          Copyright Tugaut TP. 2025 All Right Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
