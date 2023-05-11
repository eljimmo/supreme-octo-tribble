import React from "react";

import UrlIcon from "../icons/email.svg";

const ContactLink = () => {
  return (
    <a href="jimm" className="tel-link">
      <img className="url-icon" alt="CallIcon" src={UrlIcon} />
      <h1 className="tel-header"> Contact the Creator at jsmov@proton.me </h1>
    </a>
  );
};

export default ContactLink;
