import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image} = imageInfo;
  const { publicURL, extension } = image;

  if (!!image && !!image.childImageSharp) {
    console.log("got here 1");
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (!!childImageSharp) {
    console.log("got here 2");
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === "string") {
    console.log("got here 3");
    return <img style={imageStyle} src={image} alt={alt} />;
  }
  // SVG Support
  if (!childImageSharp && extension === "svg") {
    console.log("got here");
    return <img style={imageStyle} src={publicURL} alt={alt} />;
  }
  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
