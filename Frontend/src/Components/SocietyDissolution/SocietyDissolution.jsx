import React from "react";
import "./SocietyDissolution.css";

const dissolutionSteps = [
  {
    title: "Member Resolution",
    text: "At least three-fifths of members present at a general meeting must approve the dissolution.",
  },
  {
    title: "Settling Affairs",
    text: "All the society's debts and obligations must be fully paid off. Any assets owned by the society are then sold according to its rules or as decided by its governing body.",
  },
  {
    title: "Government Approval",
    text: "If the government is involved as a member, contributor, or interested party, its permission may be necessary before proceeding with the dissolution.",
  },
  {
    title: "Disposal of Remaining Assets",
    text: "After all debts are cleared, remaining assets cannot be distributed among members. They must be transferred to another registered society with similar objectives or to the government, as per the rules.",
  },
  {
    title: "Report to Registrar",
    text: "A report detailing the dissolution and disposal of assets must be submitted to the Registrar of Societies to make it official.",
  },
];

const DissolutionSection = () => {
  return (
    <section className="diss-wrapper">
      <header className="diss-header">
        <h2>Dissolution of a Registered Society</h2>
        <p>
          A registered society can be dissolved according to Section 13 of the
          Societies Registration Act 1860. Here&apos;s how the process usually
          unfolds:
        </p>
      </header>

      <div className="diss-grid">
        {dissolutionSteps.map((step) => (
          <article className="diss-card" key={step.title}>
            <h3 className="diss-title">{step.title}</h3>
            <p className="diss-text">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DissolutionSection;
