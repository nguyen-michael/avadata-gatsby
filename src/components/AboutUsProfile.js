import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const AboutUsProfile = ({ profile }) => (
  <div key={profile.name} className="columns">
    <div className="column is-4">
      <PreviewCompatibleImage
        imageInfo={{ image: profile.image, alt: profile.name }}
      />
    </div>
    <div className="column is-8">
      <header className="has-text-centered">
        <p className="has-text-primary is-size-4 has-text-weight-semibold">
          {profile.name}
        </p>
        <p>
          <em>{profile.title}</em>
        </p>
      </header>
      <p className="has-text-justified">{profile.description}</p>
    </div>
  </div>
);

AboutUsProfile.propTypes = {
  profile: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

export default AboutUsProfile;
