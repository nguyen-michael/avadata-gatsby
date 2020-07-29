import React from "react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StaticQuery, graphql } from "gatsby";

import "./all.sass";

const TemplateWrapper = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query HidePagesQuery {
          markdownRemark(frontmatter: { type: { eq: "cms-config" } }) {
            frontmatter {
              hideContactPage
              hideBlogPage
              hideAboutPage
            }
          }
        }
      `}
      render={(data) => (
        <div className="template-wrapper">
          <SEO />
          <Navbar hidePages={data.markdownRemark.frontmatter} />
          <div className="template-content">{children}</div>
          <Footer hidePages={data.markdownRemark.frontmatter} />
        </div>
      )}
    />
  );
};

export default TemplateWrapper;
