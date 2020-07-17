import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AboutUsProfile from "../components/AboutUsProfile";

export const AboutPageTemplate = ({ profiles }) => {
  return (
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
  );
};

AboutPageTemplate.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0 has-text-centered"
        style={{
          backgroundImage: `url(${
            !!post.frontmatter.image.childImageSharp
              ? post.frontmatter.image.childImageSharp.fluid.src
              : post.frontmatter.image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1 jumbotron-heading"
        >
          {post.frontmatter.title}
        </h1>
      </div>
      <AboutPageTemplate
        profiles={post.frontmatter.profiles}
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
