import React from "react";
import "./SocietyEligibility.css";

const requirements = [
  "The minimum number of members required to form a society is seven.",
  "A company or firm, or an individual, can be a member of a society.",
  "Members must share a common purpose for a literary, scientific, or charitable aim.",
  "The society's objective must always be legal and ethical.",
  "A detailed Memorandum of Association (MOA) is mandatory.",
  "You must draft a set of Rules and Regulations for the society.",
  "The MOA needs to be signed by a minimum of seven members.",
];

const SocietyEligibility = () => {
  return (
    <section className="elig-wrapper">
      <header className="elig-header">
        <h2>Who Can Register a Society: Eligibility Requirements</h2>
        <p>
          You need to fulfil these essential requirements for Society
          Registration:
        </p>
      </header>

      <div className="elig-grid">
        {requirements.map((text, index) => (
          <article className="elig-card" key={index}>
            <div className="elig-icon">
              <span>{index + 1}</span>
            </div>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SocietyEligibility;
