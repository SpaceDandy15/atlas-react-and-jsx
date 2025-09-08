//OpenLink.jsx
import React from "react";
import openImg from "../assets/open.svg";

const OpenLink = ({ link }) => {
  return (
    // Anchor tag that opens the link in a new tab
    <a
      href={link}
      target="_blank"          // Opens in a new browser tab
      rel="noopener noreferrer" // Security best practice when using target="_blank"
    >
      {/* Image that serves as the clickable icon */}
      <img
        src={openImg}
        alt="Open link"
        style={{ width: "20px", marginLeft: "8px", cursor: "pointer" }}
      />
    </a>
  );
};

export default OpenLink;
