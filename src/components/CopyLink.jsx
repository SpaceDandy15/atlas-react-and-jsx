// CopyLink.jsx
import React from "react";
import copyImg from "../assets/copy.svg";

const CopyLink = ({ link }) => {
  // Function to copy the link prop to the user's clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(link); // Copies the link text
    alert("Link copied to clipboard!"); // Gives the user feedback
  };

  return (
    // Image that acts like a button
    <img
      className="copy"
      src={copyImg}
      alt="Copy link"
      style={{ width: "20px", marginLeft: "8px", cursor: "pointer" }}
      onClick={handleCopy} // Call handleCopy when image is clicked
    />
  );
};

export default CopyLink;
