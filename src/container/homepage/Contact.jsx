import React, { Fragment } from "react";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Head from "../../component/Section/Head";
import ContactSection from "../../component/Section/Contact";

const Contact = () => {
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
          <Head default="home" current="contact" title={"nous contacter"} />
        </div>

        <ContactSection />

        <Footer type={"contact"} />
      </div>
    </Fragment>
  );
};

export default Contact;
