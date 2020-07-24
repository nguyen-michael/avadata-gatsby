import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AboutUsProfile from "../components/AboutUsProfile";
import SEO from "../components/SEO";

export const AboutPageTemplate = ({ title, profiles, image }) => {
  return (
    <>
      <div
        className="full-width-image-container margin-top-0 has-text-centered"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1 jumbotron-heading">
          {title}
        </h1>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-offset-1">
              <div className="section">
                {profiles.map((profile) => (
                  <AboutUsProfile profile={profile} key={profile.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
  image: PropTypes.object
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO title={`About Us | AvaData Solutions, Inc.`} />
      <AboutPageTemplate
        title={post.frontmatter.title}
        profiles={post.frontmatter.profiles}
        image={post.frontmatter.image}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        profiles {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          title
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
