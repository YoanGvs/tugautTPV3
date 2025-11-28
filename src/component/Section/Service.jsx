import React from "react";
import { NavLink } from "react-router-dom";
import CardSevice from "../Card/CardSevice";

const Service = (props) => {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-5">
          <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">
            service
          </p>
          <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">
            Nos services
          </h3>
        </div>

        <div className="row mb-5">
          {props.service.map((obj) => {
            return (
              <div className="col-lg-4 mb-4">
                <CardSevice data={obj} />
              </div>
            );
          })}
        </div>

        {props.type != "service" ? (
          <div className="text-center">
            <div className="d-inline-block">
              <NavLink
                to="/service"
                className="semi-bold font__size--14 text__14-1024 btn btn__outlined--orange color__orange no__opacity rounded-0 shadow text-uppercase"
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
