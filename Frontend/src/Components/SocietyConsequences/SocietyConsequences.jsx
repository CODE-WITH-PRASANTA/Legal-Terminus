import React from "react";
import "./SocietyConsequences.css";

const consequences = [
  {
    title: "Penalties and Fines",
    text: "For not meeting filing requirements (e.g., annual reports) or other administrative violations."
  },
  {
    title: "Temporary Suspension",
    text: "The Registrar may temporarily stop the society's operations in case of serious violations."
  },
  {
    title: "Cancellation of Registration",
    text: "For repeated non-compliance, fraud, or acting against objectives, the Registrar can cancel registration."
  },
  {
    title: "Legal Proceedings",
    text: "In cases of financial misuse or criminal activities, governing body members may face prosecution."
  },
  {
    title: "Loss of Tax Benefits",
    text: "Not filing ITR or misusing funds can lead to cancellation of 12A and 80G registrations."
  }
];

const NonComplianceConsequences = () => {
  return (
    <section className="nc-wrapper">
      <header className="nc-header">
        <h2>What Happens If Societies Don’t Comply with Rules?</h2>
        <p>
          Registered societies can face disciplinary actions if they violate the
          Societies Registration Act or the Rules & Regulations. These can include:
        </p>
      </header>

      <div className="nc-grid">
        {consequences.map((item) => (
          <article className="nc-card" key={item.title}>
            <h3 className="nc-title">{item.title}</h3>
            <p className="nc-text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NonComplianceConsequences;
