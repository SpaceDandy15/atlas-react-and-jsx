// src/components/SocialLinks.jsx
import React from "react";
import linkedinImg from "../assets/linkedin.svg";
import githubImg from "../assets/github.svg";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/malik-vance"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinImg}
          alt="LinkedIn"
          style={{ width: "30px", marginRight: "10px" }}
        />
      </a>
      <a
        href="https://github.com/SpaceDandy15"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubImg}
          alt="GitHub"
          style={{ width: "30px" }}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
