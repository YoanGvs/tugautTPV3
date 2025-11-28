import React, { Fragment } from "react";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Head from "../../component/Section/Head";

const Merci = () => {
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="position-relative">
          <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
          <div className="wrapper__bg-head"></div>
          <Navbar />
          <Head
            default="home"
            current="Merci"
            title={"Votre demande est envoyée"}
          />
        </div>

        <section className="py-5 py-lg-6">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <p className="semi-bold font__size--18 text__18-1024 color__orange mb-3 text-uppercase">
                  Merci
                </p>
                <h1 className="bold font__size--58 text__50-1024 text__42-sm text__38-xs color__black mb-4">
                  Merci pour votre demande !
                </h1>
                <p className="roboto normal font__size--18 text__18-1024 color__gray-1 mb-5">
                  Notre équipe TUGAUT TP vient de recevoir votre demande de
                  devis. Nous revenons vers vous pour préciser votre projet et
                  planifier la prochaine étape. Pour toute question urgente,
                  contactez-nous au&nbsp;
                  <a href="tel:+33612345678" className="color__orange fw-bold">
                    06 12 34 56 78
                  </a>
                  .
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                  <a
                    href="/"
                    className="btn btn__orange color__white text-uppercase font__size--14 text__14-1024 semi-bold px-4"
                  >
                    Retour à l’accueil
                  </a>
                  <a
                    href="/contact"
                    className="btn btn-outline-dark text-uppercase font__size--14 text__14-1024 semi-bold px-4"
                  >
                    Faire une nouvelle demande
                  </a>
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

export default Merci;
