import React from "react";
import { NavLink } from "react-router-dom";
import CardSevice from "../Card/CardSevice";

const Service = ({
  service,
  type,
  sectionClassName,
  titleClassName,
  textLight = false,
}) => {
  const subtitleClass = textLight ? "color__white" : "color__orange";
  const ctaClass = textLight
    ? "btn__outlined--white color__white"
    : "btn__outlined--orange color__orange";

  return (
    <section
      className={["wrapper__section-service", sectionClassName]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p
            className={`semi-bold font__size--14 text__14-1024 ${subtitleClass} text-uppercase animate-fade-up`}
          >
            service
          </p>
          <h3
            className={[
              "bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase",
              titleClassName,
            ]
              .filter(Boolean)
              .join(" ") + " animate-fade-up animate-delay-1"}
          >
            Nos services
          </h3>
        </div>

        <div className="row mb-5">
          {service.map((obj) => {
            return (
              <div className="col-lg-4 mb-4 animate-fade-up animate-delay-2">
                <CardSevice data={obj} />
              </div>
            );
          })}
        </div>

        {type != "service" ? (
          <div className="text-center animate-fade-up animate-delay-3">
            <div className="d-inline-block">
              <NavLink
                to="/service"
                className={`semi-bold font__size--14 text__14-1024 btn ${ctaClass} no__opacity rounded-0 shadow text-uppercase`}
              >
                Nos Service
              </NavLink>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Service;
