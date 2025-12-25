import React from "react";
import "./Section8Documents.css";

const docGroups = [
  {
    id: "directors",
    title: "From Directors/Members:",
    items: [
      "PAN Card (mandatory for Indian nationals).",
      "Identity Proof (Aadhaar Card, Voter ID, Passport, or Driving License).",
      "Address Proof (Recent bank statement, utility bill).",
      "Passport-size photographs.",
    ],
  },
  {
    id: "office",
    title: "For the Registered Office:",
    items: [
      "Address Proof (Recent utility bill, like electricity or telephone bill).",
      "No Objection Certificate (NOC) from the property owner.",
      "Rent Agreement (if the premises are rented).",
    ],
  },
  {
    id: "other",
    title: "Other Documents:",
    items: [
      "Digital Signature Certificate (DSC) for at least one director.",
      "Drafted Memorandum of Association (MOA) in Form INC-13.",
      "Drafted Articles of Association (AOA).",
    ],
  },
];

const Section8Documents = () => {
  return (
    <section
      className="sec8docs-wrapper"
      aria-labelledby="sec8docs-heading"
    >
      <div className="sec8docs-header">
        <h2 id="sec8docs-heading" className="sec8docs-title">
          Documents Required for Section 8 Company Registration
        </h2>
        <p className="sec8docs-intro">
          Here's a checklist for the incorporation of a Section 8 company via
          the MCA portal (mca.gov.in):
        </p>
      </div>

      <div className="sec8docs-grid">
        {docGroups.map((group) => (
          <article
            key={group.id}
            className="sec8docs-card"
            aria-labelledby={`sec8docs-${group.id}-title`}
          >
            <div
              className="sec8docs-card-accent"
              aria-hidden="true"
            />

            <h3
              id={`sec8docs-${group.id}-title`}
              className="sec8docs-card-title"
            >
              {group.title}
            </h3>

            <ul className="sec8docs-list">
              {group.items.map((item, i) => (
                <li key={i} className="sec8docs-list-item">
                  <span
                    className="sec8docs-list-dot"
                    aria-hidden="true"
                  />
                  <span className="sec8docs-list-text">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Section8Documents;
