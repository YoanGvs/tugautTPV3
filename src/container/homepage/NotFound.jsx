import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Head from "../../component/Section/Head";

const NotFound = () => {
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="position-relative">
          <img
            src="/images/project/tugauttp_entrepot.JPG"
            className="images__wrap-head"
            alt=""
          />
          <div className="wrapper__bg-head"></div>
          <Navbar />
          <Head default="home" current="Page introuvable" title={"Erreur 404"} />
        </div>

        <section className="py-5 py-lg-6">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="bold font__size--58 text__50-1024 text__42-sm text__38-xs color__black mb-4">
                  Cette page n’existe pas
                </h1>
                <p className="roboto normal font__size--18 text__18-1024 color__gray-1 mb-5">
                  Le lien est peut-être ancien ou mal recopié. Vous pouvez
                  revenir à l’accueil ou nous demander directement un devis.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                  <NavLink
                    to="/"
                    className="btn btn__orange color__white text-uppercase font__size--14 text__14-1024 semi-bold px-4"
                  >
                    Retour à l’accueil
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="btn btn-outline-dark text-uppercase font__size--14 text__14-1024 semi-bold px-4"
                  >
                    Demander un devis
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default NotFound;
