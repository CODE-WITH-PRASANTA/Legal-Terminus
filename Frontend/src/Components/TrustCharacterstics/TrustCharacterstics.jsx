import React from "react";
import "./TrustCharacterstics.css";

const characteristics = [
  {
    title: "Legal Recognition",
    text: "Your trust gains a valid legal identity, empowering it to enforce its deed and protect beneficiaries."
  },
  {
    title: "Asset Ownership",
    text: "The trust can hold, buy, sell, or lease property in its name, ensuring a clear title and smooth transfers."
  },
  {
    title: "Tax Exemptions",
    text: "Registered charitable trusts qualify for income-tax relief under Sections 11 and 12, reducing your tax burden."
  },
  {
    title: "Enhanced Credibility",
    text: "Formal registration builds donor and regulator confidence, boosting your ability to raise funds and secure grants."
  }
];

const CharacteristicsGrid = () => {
  return (
    <section className="char-section">
      <h2 className="char-title">Characteristics of Trust Registration</h2>
      <p className="char-intro">
        A trust registration has specific characteristics such as:
      </p>

      <div className="char-grid">
        {characteristics.map((item) => (
          <div className="char-card" key={item.title}>
            <div className="char-dot" />
            <div>
              <h3 className="char-card-title">{item.title}</h3>
              <p className="char-card-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharacteristicsGrid;
