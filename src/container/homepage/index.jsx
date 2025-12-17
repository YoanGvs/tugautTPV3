import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import About from "../../component/Section/About";
import Blog from "../../component/Section/Blog";
import Contact from "../../component/Section/Contact";
import Service from "../../component/Section/Service";
import SliderConstruction from "../../component/Slider/SliderConstruction";
import Step from "../../component/Section/Step";
import Testimonial from "../../component/Section/Testimonial";
import services from "../../data/services";

const Index = (props) => {
  const featuredServices = services.slice(0, 3);
  const blog = [
    {
      img: "./../images/bg (1).png",
      tag: "oil & gas",
      date: "29 Nov 2022",
      title: "Cargo flow through better supply chain visibility, control.",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      img: "./../images/bg (3).png",
      tag: "oil & gas",
      date: "29 Nov 2022",
      title: "Cargo flow through better supply chain visibility, control.",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      img: "./../images/bg (2).png",
      tag: "oil & gas",
      date: "29 Nov 2022",
      title: "Cargo flow through better supply chain visibility, control.",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
  ];
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
          <section className="position-relative z-2">
            <div className="container">
              <div className="text-center">
                <h1 className="semi-bold font__size--90 text__90-1024 text__90-md text__90-sm text__90-xs  color__white text-uppercase mb-0 hero__title-animate">
                  TUGAUT TP <br className="d-none d-sm-block" />
                  terrassement et assainissement dans l’Oise
                </h1>
                <p className="medium roboto font__size--16 text__16-1024 color__white my-4 hero__subtitle-animate">
                  Entreprise familiale experte depuis plus de 12 ans,{" "}
                  <br className="d-none d-sm-block" /> nous accompagnons
                  collectivités, entreprises et particuliers dans la réalisation
                  de chantiers durables, maîtrisés et conformes aux normes
                  environnementales.
                </p>

                <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center">
                  <a
                    href="#!"
                    className="btn__mm-w-60 semi-bold rounded-0 font__size--14 text__14-1024 btn btn__orange shadow color__white text-uppercase"
                  >
                    En savoir plus
                  </a>
                  <NavLink
                    to="/service#service-hero"
                    className="btn__mm-w-60  semi-bold font__size--14 text__14-1024 btn btn__outlined--white color__white no__opacity h__black rounded-0 shadow text-uppercase mt-3 mt-sm-0 ms-sm-4"
                  >
                    Nos services
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>

        <About />

        <Service
          service={featuredServices}
          sectionClassName="section--orange"
          titleClassName="section__title--white"
          textLight
        />

        <Step />

        <Testimonial
          sectionClassName="section--orange"
          titleClassName="section__title--white"
        />

        <section className="overflow-hidden">
          <div className="text-center mb-5">
            <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase animate-fade-up">
              Nos projets
            </p>
            <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase animate-fade-up animate-delay-1">
              Chantiers réalisés
            </h3>
          </div>
          <div className="animate-fade-up animate-delay-2">
            <SliderConstruction />
          </div>
        </section>

        {/* <Blog blog={blog} title={"news & articles"} top={"latest blog"} /> */}

        <Contact />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Index;
