// AboutMe.jsx
import React from "react";
import myPhoto from "../assets/aboutme.jpg";

const AboutMe = () => {
  return (
    <div className="about-me" style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Profile image */}
      <img
        src={myPhoto}
        alt="Malik Vance"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "15px",
        }}
      />

      {/* Short bio */}
      <p>
        Hi, my name is <strong>Malik Vance</strong>.  
        I’m in my final trimester at <strong>Atlas School</strong>, specializing
        in <strong>Fullstack Software Engineering</strong>.  
        My current focus is learning <strong>React</strong>, which has quickly
        become one of my favorite technologies alongside <strong>Python</strong>,{" "}
        <strong>JavaScript</strong>, and <strong>C++</strong> (thanks to my
        Arduino projects).  

        I’m passionate about combining <strong>hardware and software</strong>,
        and I hope to pursue a career in <strong>software engineering</strong> at
        companies like Flight Safety, Cymstar, Cube Nexus, or similar
        organizations. I’m also open to roles in <strong>data analytics</strong>,
        having enjoyed working with <strong>PostgreSQL</strong> and{" "}
        <strong>Postman</strong> in recent backend projects.  

        Outside of school, I enjoy watching TV, playing video games, and working
        on Arduino-based engineering projects. Much of my enthusiasm comes from
        interests like <strong>Gundam</strong> and <strong>Cyberpunk</strong>,
        which inspire both my creativity and technical goals.
      </p>
    </div>
  );
};

export default AboutMe;
