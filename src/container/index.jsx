import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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

const Index = (props) => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/detail" element={<DetailService />} />
          <Route path="/project/detail" element={<DetailProject />} />
          <Route path="/news/detail" element={<DetailNews />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default Index;
