import React, { Fragment } from "react";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Contact from "../../component/Section/Contact";
import ServiceSec from "../../component/Section/Service";
import Head from "../../component/Section/Head";
import Number from "../../component/Section/Number";
import Step from "../../component/Section/Step";
import services from "../../data/services";

const Service = () => {
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="position-relative">
          <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
          <div className="wrapper__bg-head"></div>
          <Navbar />
          <Head default="home" current="Our Service" title={"Nos Services"} />
        </div>

        <ServiceSec service={services} type="service" />

        {/* <Number /> */}

        {/* <Step /> */}

        <Contact />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Service;
