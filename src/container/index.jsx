import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Homepage from "./homepage/index";
import About from "./homepage/About";
import Service from "./homepage/Service";
import Project from "./homepage/Project";
import News from "./homepage/News";
import DetailService from "./homepage/DetailService";
import DetailProject from "./homepage/DetailProject";
import DetailNews from "./homepage/DetailNews";
import Contact from "./homepage/Contact";
import Terms from "./homepage/Terms";
import Privacy from "./homepage/Privacy";
import Merci from "./homepage/Merci";
import SocialSidebar from "../component/Other/SocialSidebar";

const ScrollReveal = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll(".animate-fade-up");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const scrollTarget = document.getElementById(id);
    if (!scrollTarget) return;

    // delay to ensure page content is rendered
    const timeout = setTimeout(() => {
      scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.hash, location.pathname]);

  return children;
};

const Index = (props) => {
  return (
    <Fragment>
      <Router>
        <SocialSidebar />
        <ScrollReveal>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/project" element={<Project />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/detail/:slug" element={<DetailService />} />
            <Route path="/project/detail" element={<DetailProject />} />
            <Route path="/news/detail" element={<DetailNews />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/merci" element={<Merci />} />
          </Routes>
        </ScrollReveal>
      </Router>
    </Fragment>
  );
};

export default Index;
