// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  return (
    <div>
      <Header />

      {/* What is React Section */}
      <Section title="What is react?">
        <p>
          Morbi sed semper arcu, sed ullamcorper mauris. Integer nec turpis ipsum. Proin scelerisque sagittis rutrum. Nam ut tellus sagittis, scelerisque tortor, vitae, suscipit ex. Ut ut lacus sit amet eros consequat pulvinar ornare in odio. Nulla eleifend laoreet lacus, ut fringilla purus dapibus nec.
        </p>
      </Section>

      {/* Benefits of React Section */}
      <Section title="Benefits of react">
        <ul>
          <li>Maecenas a tortor laoreet</li>
          <li>Orci varius natoque</li>
          <li>Donec vitae magna</li>
          <li>Vivamus sit amet</li>
          <li>Proin lulla lectus</li>
        </ul>
      </Section>
    </div>
  );
};

export default App;
