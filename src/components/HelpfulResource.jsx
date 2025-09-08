// HelpfulResource.jsx
import React from "react";
import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

const HelpfulResource = ({ link, label }) => {
  return (
    // Wrapper div for a single helpful resource
    <div className="helpful-resource" style={{ marginBottom: "10px" }}>
      {/* Render the descriptive label for the resource */}
      {label}

      {/* Renders an "open in new tab" icon for the resource */}
      <OpenLink link={link} />

      {/* Renders a "copy to clipboard" icon for the resource */}
      <CopyLink link={link} />
    </div>
  );
};

export default HelpfulResource;
