import React from "react";
import "./SocietyCharacteristics.css";

const characteristics = [
  {
    title: "Charitable Goals",
    description:
      "It must be formed for a non-commercial purpose, like promoting science, art, education, or charity.",
  },
  {
    title: "Seven-Member Minimum",
    description:
      "At least 7 people are needed to sign the founding documents to form the society.",
  },
  {
    title: "Founding Document",
    description:
      "It is defined by a formal document (Memorandum) that lists its name, goals, and leaders.",
  },
  {
    title: "Official Registration",
    description:
      "To be legal, it must be registered with the state’s Registrar by submitting its documents and rules.",
  },
  {
    title: "Has Its Own Rules",
    description:
      "The society must have rules for its internal management, covering member admissions, meetings, and duties.",
  },
];

const SocietyCharacteristics = () => {
  return (
    <section className="society-char-wrapper">
      <header className="society-char-header">
        <h2>Characteristics of a Society</h2>
        <p>
          Here are five key characteristics of a society according to the
          Societies Registration Act, 1860:
        </p>
      </header>

      <div className="society-char-grid">
        {characteristics.map((item, index) => (
          <article className="society-char-card" key={item.title}>
            <div className="society-char-badge">{index + 1}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SocietyCharacteristics;
