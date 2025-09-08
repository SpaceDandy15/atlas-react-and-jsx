// Footer.jsx
import React from "react";
// Import JSON data
import linksData from "../assets/links.json";

const Footer = () => {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: "center", marginTop: "30px", padding: "20px 0", borderTop: "1px solid #ccc" }}>
      {/* Render links from JSON */}
      <ul style={{ listStyleType: "none", padding: 0, marginBottom: "10px" }}>
        {linksData.map((item, index) => (
          <li key={index} style={{ display: "inline", margin: "0 10px" }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright with dynamic year */}
      <div>© {currentYear} Atlas School</div>
    </footer>
  );
};

export default Footer;
