import React, { Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Contact from "../../component/Section/Contact";
import Head from "../../component/Section/Head";
import services from "../../data/services";

const DetailService = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) || services[0];

  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="position-relative" id="service-hero">
          <img
            src={service.heroImg || service.img || "./../images/project/tugauttp_entrepot.JPG"}
            className="images__wrap-head"
            alt={service.title}
          />
          <div className="wrapper__bg-head"></div>
          <Navbar />
          <Head
            default="home"
            current={service?.title || "Service"}
            title={service?.title || "Service"}
          />
        </div>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <h3 className="medium font__size--20 text__20-1024 text-uppercase mb-3">
                  Nos services
                </h3>

                <ul className="list__menu-side">
                  {services.map((item) => (
                    <li key={item.slug}>
                      <NavLink
                        to={`/service/detail/${item.slug}#service-hero`}
                        className={`normal font__size--16 text__20-1024 roboto ${
                          item.slug === service.slug ? "active" : ""
                        }`}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-8">
                {/* <img
                  src={service.heroImg || service.img}
                  className="images__dt-service mb-4"
                  alt={service.title}
                /> */}

                <h1 className="bold font__size--32 text__32-1024 mb-3 text-uppercase">
                  {service.title}
                </h1>

                <p className="normal roboto font__size--16 text__20-1024 color__gray-1 lh-2 mb-3">
                  {service.intro}
                </p>

                {service.content?.map((paragraph, index) => (
                  <p
                    key={`${service.slug}-paragraph-${index}`}
                    className="normal roboto font__size--16 text__20-1024 color__gray-1 lh-2 mb-3"
                  >
                    {paragraph}
                  </p>
                ))}

                {service.quote && (
                  <div className="wrapper__left-line mb-4">
                    <div className="normal roboto font__size--20 text__20-1024 color__gray-1 lh-2 ps-4">
                      {service.quote}
                    </div>
                  </div>
                )}

                {service.highlights?.length > 0 && (
                  <div className="mb-5">
                    <h3 className="bold font__size--20 text__20-1024 mb-3 text-uppercase">
                      Nos engagements clés
                    </h3>
                    <ul className="list-unstyled">
                      {service.highlights.map((highlight) => (
                        <li
                          key={`${service.slug}-${highlight.title}`}
                          className="mb-3"
                        >
                          <div className="d-flex align-items-start">
                            <img
                              src="/images/asas.png"
                              className="object-fit-content mt-1"
                              alt=""
                            />
                            <div className="ms-3">
                              <p className="semi-bold roboto font__size--16 text__20-1024 mb-1">
                                {highlight.title}
                              </p>
                              <p className="normal roboto font__size--16 text__20-1024 color__gray-1 lh-2 mb-0">
                                {highlight.text}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.deliverables?.length > 0 && (
                  <>
                    <h3 className="bold font__size--20 text__20-1024 mb-3 text-uppercase">
                      Ce que vous obtenez
                    </h3>

                    <ul className="list__detail-info">
                      {service.deliverables.map((item, index) => (
                        <li key={`${service.slug}-deliverable-${index}`}>
                          <div className="d-flex align-items-start">
                            <img
                              src="/images/asas.png"
                              className="object-fit-content mt-2"
                              alt=""
                            />
                            <p className="ms-3 normal roboto font__size--16 text__20-1024 color__gray-1 lh-2">
                              {item}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <Contact />

        <Footer />
      </div>
    </Fragment>
  );
};

export default DetailService;
