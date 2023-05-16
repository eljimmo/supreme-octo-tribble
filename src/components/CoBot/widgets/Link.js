import React from "react";

const Link = ({ url, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="url-link"
    >

      <h1 className="url-header">Go to {title}</h1>
    </a>
  );
};

export default Link;
