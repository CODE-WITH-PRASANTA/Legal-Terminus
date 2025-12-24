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

const DocumentsRequired = () => {
  return (
    <section className="sd-wrapper" aria-labelledby="sd-heading">
      <div className="sd-header">
        <h2 id="sd-heading" className="sd-title">
          Documents Required for Section 8 Company Registration
        </h2>
        <p className="sd-intro">
          Here's a checklist for the incorporation of a Section 8 company via
          the MCA portal (mca.gov.in):
        </p>
      </div>

      <div className="sd-grid">
        {docGroups.map((group) => (
          <article key={group.id} className="sd-card" aria-labelledby={`${group.id}-title`}>
            <div className="card-accent" aria-hidden="true" />
            <h3 id={`${group.id}-title`} className="card-title">
              {group.title}
            </h3>

            <ul className="card-list">
              {group.items.map((item, i) => (
                <li key={i} className="card-list-item">
                  <span className="list-dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DocumentsRequired;
