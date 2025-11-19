import React, { Fragment } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [toogleMenu, setToogleMenu] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive ? { color: "#EA6B00", opacity: 1 } : {};

  return (
    <Fragment>
      <div
        className={
          "wrapper__side-nav-mobile d-flex d-lg-none " +
          (toogleMenu ? "active" : "")
        }
      >
        <div className="d-flex flex-wrap w-100">
          <div className="w-100">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <NavLink
                to="/"
                exact
                className="navbar-brand font__size--24 text__24-1024 semi-bold color__white"
              >
                TUGAUT<span className="color__orange">TP</span>
              </NavLink>
              <img
                src="./../images/Close.png"
                onClick={() => setToogleMenu(!toogleMenu)}
                className="pointer"
                alt=""
              />
            </div>
            <div className="menu">
              <NavLink
                to="/"
                end
                className="medium font__size--14 text__14-1024 color__white"
                style={navLinkStyle}
              >
                Accueil
              </NavLink>
              <hr />
              <NavLink
                to="/about"
                className="medium font__size--14 text__14-1024 color__white"
                style={navLinkStyle}
              >
                À propos
              </NavLink>
              <hr />
              <NavLink
                to="/service"
                className="medium font__size--14 text__14-1024 color__white"
                style={navLinkStyle}
              >
                Service
              </NavLink>
              <hr />
              <NavLink
                to="/contact"
                className="medium font__size--14 text__14-1024 color__white"
                style={navLinkStyle}
              >
                Nous contacter
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg__wrap-menu d-lg-none"
        onClick={() => setToogleMenu(!toogleMenu)}
      ></div>
      <nav
        className="navbar navbar-expand-lg bg__black-2 wrapper__navbar position-relative z-2"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="container position-relative">
          <NavLink
            to="/"
            exact
            className="navbar-brand font__size--24 text__24-1024 semi-bold color__white"
          >
            TUGAUT<span className="color__orange">TP</span>
          </NavLink>

          <div
            className="collapse navbar-collapse wrapper__navbar-menu ms-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu__center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className="nav-link semi-bold font__size--14 text__14-1024 color__white opacity__7 text-uppercase hover"
                  style={navLinkStyle}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link semi-bold font__size--14 text__14-1024 color__white opacity__7 text-uppercase hover"
                  style={navLinkStyle}
                >
                  À propos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/service"
                  className="nav-link semi-bold font__size--14 text__14-1024 color__white opacity__7 text-uppercase hover"
                  style={navLinkStyle}
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link semi-bold font__size--14 text__14-1024 color__white opacity__7 text-uppercase hover"
                  style={navLinkStyle}
                >
                  Nous contacter
                </NavLink>
              </li>
            </ul>
          </div>

          <div
            onClick={() => setToogleMenu(!toogleMenu)}
            className="nav__button d-lg-none position-relative ms-auto flex-shrink-0"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a
            href="#!"
            className="d-none d-lg-block semi-bold font__size--14 btn btn__outlined--white color__white no__opacity h__black rounded-0 shadow ms-auto text-uppercase"
          >
            nous contacter
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
