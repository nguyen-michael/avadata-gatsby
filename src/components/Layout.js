import React from "react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => {
  return (
    <div className="template-wrapper">
      <SEO />
      <Navbar />
      <div className="template-content">{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
