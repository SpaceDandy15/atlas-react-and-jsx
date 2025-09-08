// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";

const App = () => {
  return (
    <div>
      <Header />

      {/* What is React Section */}
      <Section title="What is react?">
        <p>
          React is a popular open-source JavaScript library for building user
          interfaces. It allows developers to create reusable UI components and
          efficiently update the user interface when the underlying data
          changes, using a concept called the virtual DOM.
        </p>
      </Section>

      {/* Benefits of React Section */}
      <Section title="Benefits of react">
        <ul>
          <li>Reusable components for faster development</li>
          <li>Efficient updates with the virtual DOM</li>
          <li>Strong community support and large ecosystem</li>
          <li>Supports building single-page applications</li>
          <li>Easy integration with other libraries and frameworks</li>
        </ul>
      </Section>

      {/* Helpful Resources Section */}
      <Section title="Helpful resources">
        <HelpfulResource
          label="React Official Documentation"
          link="https://react.dev/learn"
        />
        <HelpfulResource
          label="FreeCodeCamp React Course"
          link="https://www.youtube.com/watch?v=bMknfKXIFA8"
        />
        <HelpfulResource
          label="React Tutorial: W3Schools"
          link="https://www.w3schools.com/react/"
        />
      </Section>
    </div>
  );
};

export default App;
