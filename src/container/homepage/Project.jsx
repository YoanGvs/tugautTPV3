import React, { Fragment } from "react";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Contact from "../../component/Section/Contact";
import Head from "../../component/Section/Head";

const galleryImages = [
  "/images/TTP1.webp",
  "/images/TTP3.webp",
  "/images/TTP4.webp",
  "/images/TTP7.webp",
  "/images/TTP8.webp",
  "/images/TTP9.webp",
  "/images/TTP10.webp",
  "/images/TTP11.webp",
  "/images/project/maison.webp",
  "/images/project/cloture.webp",
  "/images/project/terrassement4.JPG",
  "/images/project/tugauttp_entrepot.JPG",
  "/images/project/mini_pelle.webp",
  "/images/project/assainissement.webp",
  "/images/project/assainissement2.JPG",
  "/images/project/assainissement3.JPEG",
  "/images/project/chemin.webp",
];

const Project = () => {
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="position-relative">
          <img
            src="./../images/project/tugauttp_entrepot.JPG"
            className="images__wrap-head"
            alt=""
          />
          <div className="wrapper__bg-head"></div>
          <Navbar />
          <Head default="home" current="Chantiers réalisés" title={"Galerie"} />
        </div>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">
                Chantiers réalisés
              </p>
              <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">
                Galerie photo
              </h3>
              <p className="roboto normal font__size--16 text__16-1024 color__gray-1 mb-0">
                Une sélection de nos interventions : terrassement, assainissement, aménagements extérieurs et démolition.
              </p>
            </div>

            <div className="row g-3">
              {galleryImages.map((src, index) => (
                <div className="col-6 col-md-4 col-lg-3" key={src + index}>
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <img
                      src={src}
                      alt={`Chantier ${index + 1}`}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Project;
