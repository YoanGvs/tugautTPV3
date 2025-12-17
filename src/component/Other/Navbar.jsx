import React, { Fragment, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { path: "/", label: "Accueil", end: true },
      { path: "/about", label: "À propos" },
      { path: "/service", label: "Service", hash: "#service-hero" },
      { path: "/contact", label: "Nous contacter" },
    ],
    []
  );

  const toWithHash = (item) =>
    item.hash ? { pathname: item.path, hash: item.hash } : item.path;

  const isActivePath = (path, end = false) => {
    if (end) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const mobileLinkClass = (item) =>
    `medium font__size--14 text__14-1024 ${
      isActivePath(item.path, item.end) ? "color__orange" : "color__white"
    }`;

  const desktopLinkClass = (item) =>
    `nav-link semi-bold font__size--14 text__14-1024 text-uppercase hover ${
      isActivePath(item.path, item.end)
        ? "color__orange"
        : "color__white opacity__7"
    }`;

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
                src="/images/Close.png"
                onClick={() => setToogleMenu(!toogleMenu)}
                className="pointer"
                alt=""
              />
            </div>
            <div className="menu">
              {navItems.map((item, index) => (
                <Fragment key={item.path}>
                  <NavLink
                    to={toWithHash(item)}
                    end={item.end}
                    className={mobileLinkClass(item)}
                  >
                    {item.label}
                  </NavLink>
                  {index < navItems.length - 1 && <hr />}
                </Fragment>
              ))}
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
              {navItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <NavLink
                    to={toWithHash(item)}
                    end={item.end}
                    className={desktopLinkClass(item)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
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
          <NavLink
            to="/contact#contact-form"
            className="d-none d-lg-block semi-bold font__size--14 btn btn__outlined--white color__white no__opacity h__black rounded-0 shadow ms-auto text-uppercase"
          >
            nous contacter
          </NavLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
