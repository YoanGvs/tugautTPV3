import React, { Fragment } from "react";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Contact from "../../component/Section/Contact";
import ServiceSec from "../../component/Section/Service";
import Head from "../../component/Section/Head";
import Number from "../../component/Section/Number";
import Step from "../../component/Section/Step";

const Service = () => {
  const service = [
    {
      img: "./../images/Image (4).png",
      title: "Assainissement",
      desc: "Individuel, collectif ou tout à l’égout (réseau d’eau pluviale ou usée).",
    },
    {
      img: "./../images/Image (5).png",
      title: "Nivellement & Terrassement",
      desc: "Préparation de terrain en vue d’une construction (maison, terrasse, etc.).",
    },
    {
      img: "./../images/Image (6).png",
      title: "Aménagement extérieur",
      desc: "Pavage, enrobé, gravillonnage et autres travaux d’extérieur.",
    },
    {
      img: "./../images/ds (1).png",
      title: "Démolition",
      desc: "Interventions réalisées dans le respect des normes environnementales.",
    },
    {
      img: "./../images/ds (3).png",
      title: "Location de benne",
      desc: "Bennes à gravats (10 m³), DIB (30 m³) ou végétaux (30 m³).",
    },
    {
      img: "./../images/ds (2).png",
      title: "Location de pelle avec chauffeur",
      desc: "Mise à disposition de pelle avec conducteur pour les professionnels.",
    },
  ];
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="position-relative">
          <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
          <div className="wrapper__bg-head"></div>
          <Navbar />
          <Head default="home" current="Our Service" title={"Nos Services"} />
        </div>

        <ServiceSec service={service} type="service" />

        {/* <Number /> */}

        <Step />

        <Contact />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Service;
