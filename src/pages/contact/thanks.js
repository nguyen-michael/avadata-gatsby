import React from "react";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <div
      className="full-page-image margin-top-0 has-text-centered"
      style={{
        backgroundImage: `url("/img/jumbotron-thanks.webp")`,
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
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen jumbotron-heading"
          style={{
            lineHeight: "1"
          }}
        >
          Thank you for your interest in AvaData Solutions!
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen jumbotron-heading"
          style={{
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          A member of our team will be reaching out to you shortly.
        </h3>
      </div>
    </div>
  </Layout>
);
