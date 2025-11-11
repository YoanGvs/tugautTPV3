import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <section className={"pb-4 " + (props.type != "contact" ? "mt__10" : "")}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <h3 className="semi-bold font__size--24 text__24-1024 color__black">
              TUGAUT<span className="color__orange">TP</span>
            </h3>
            <p className="normal font__size--16 text__16-1024 roboto color__gray-1">
              nous accompagnons collectivités, entreprises et professionnels du
              BTP dans la réalisation de chantiers durables, maîtrisés et
              conformes aux normes environnementales.{" "}
            </p>
          </div>
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              links
            </h5>

            <ul className="wrapper__list-footer">
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
              {/* <li>
                <NavLink
                  to="/news"
                  className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover"
                >
                  news
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/contact"
                  className="semi-bold font__size--14 text__14-1024 color__black text-uppercase opacity__7 hover"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
              nos reseau sociaux
            </h5>

            <div className="d-flex align-items-center">
              <a href="#!">
                <img src="./../images/FB.png" alt="" />
              </a>
              <a href="#!" className="mx-3">
                <img src="./../images/IG.png" alt="" />
              </a>
              <a href="#!">
                <img src="./../images/WA.png" alt="" />
              </a>
            </div>

            <div className="mt-5">
              <h5 className="semi-bold font__size--14 text__14-1024 text-uppercase mb-3">
                nous contacter
              </h5>
              <div className="d-flex align-items-center mb-3">
                <img src="./../images/Message.png" alt="" />
                <span className="semi-bold font__size--14 text__14-1024 text-uppercase ms-2">
                  contact@tugaut-tp.com
                </span>
              </div>
              <div className="d-flex align-items-center">
                <img src="./../images/Call.png" alt="" />
                <span className="semi-bold font__size--14 text__14-1024 text-uppercase ms-2">
                  +33 6 12 34 56 78
                </span>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
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
        <div className="text-center normal roboto font__size--16 text__16-1024 color__gray-1 mt-5">
          Copyright Buildup. 2022 All Right Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
