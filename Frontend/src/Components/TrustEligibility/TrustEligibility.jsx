import React from "react";
import "./TrustEligibility.css";

const eligibilityItems = [
  {
    no: 1,
    title: "Trustees",
    points: [
      "There must be at least 2 trustees to register a trust.",
      "Trustees can be individuals or entities."
    ]
  },
  {
    no: 2,
    title: "Trust Property",
    points: [
      "The trust must have some property or assets to be managed for the benefit of beneficiaries."
    ]
  },
  {
    no: 3,
    title: "Legal Purpose",
    points: [
      "The trust’s objectives must be lawful and charitable or religious (in case of charitable trusts) or private and legal (in case of private trusts).",
      "It should not be formed for any illegal or immoral purposes."
    ]
  },
  {
    no: 4,
    title: "Written Trust Deed",
    points: [
      "A trust deed must be created, specifying the terms, objectives, trustees, and beneficiaries.",
      "This deed is required for registration."
    ]
  },
  {
    no: 5,
    title: "Voluntary Act",
    points: [
      "The trust must be created by a voluntary act of the settlor (the person creating the trust)."
    ]
  },
  {
    no: 6,
    title: "Registration Jurisdiction",
    points: [
      "The trust must be registered under the Indian Trusts Act, 1882, or relevant state-specific Trust Acts.",
      "Registration is done at the local Registrar’s office having jurisdiction over the trust’s place of operation."
    ]
  }
];

const EligibilityGridSection = () => {
  return (
    <section className="fg-section">
      {/* Main heading + intro */}
      <h2 className="fg-title">Eligibility Criteria for Trust Registration</h2>
      <p className="fg-intro">
        To establish a valid trust in India, you must fulfill these essential
        requirements:
      </p>

      {/* Grid of cards */}
      <div className="fg-grid">
        {eligibilityItems.map((item) => (
          <article key={item.no} className="fg-card">
            <div className="fg-card-header">
              <span className="fg-number">{item.no}.</span>
              <h3 className="fg-card-title">{item.title}</h3>
            </div>
            <ul className="fg-list">
              {item.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EligibilityGridSection;
