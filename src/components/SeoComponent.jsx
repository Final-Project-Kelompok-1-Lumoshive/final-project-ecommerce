import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import useMetadata from "../hooks/useMetaData.js";

const SeoComponent = ({ page }) => {
  const { title, description, keywords, author } = useMetadata(page);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </Helmet>
  );
};

export default SeoComponent;

SeoComponent.propTypes = {
  page: PropTypes.string.isRequired,
};