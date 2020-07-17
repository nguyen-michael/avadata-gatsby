import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <div
      className="full-page-image margin-top-0"
      style={{
        backgroundImage: `url("/img/jumbotron-404.webp")`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered"
          style={{
            boxShadow: "#0757A5 0.5rem 0px 0px, #0757A5 -0.5rem 0px 0px",
            backgroundColor: "#0757A5",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          Sorry, that link doesn't exist.{" "}
          <Link to="/">Return to Home Page</Link>
        </h1>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
