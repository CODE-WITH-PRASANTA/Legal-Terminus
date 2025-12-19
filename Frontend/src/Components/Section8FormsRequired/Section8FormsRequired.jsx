import React from "react";
import "./Section8FormsRequired.css";

const forms = [
  {
    name: "SPICe+ (Part A)",
    purpose: "Name Reservation",
    details:
      "To apply for and reserve a unique name for the company. The name must align with its non-profit objectives and Rule 8 of the Companies (Incorporation) Rules, 2014.",
  },
  {
    name: "SPICe+ (Part B)",
    purpose: "Company Incorporation",
    details:
      "This is the main application for incorporation. It also integrates applications for Director Identification Number (DIN), PAN, and TAN.",
  },
  {
    name: "e-MoA (INC-33)",
    purpose: "Memorandum of Association",
    details:
      "Defines the company's charitable objectives. It must be prepared as per the format of Form INC-13 electronically.",
  },
  {
    name: "e-AoA (INC-34)",
    purpose: "Articles of Association",
    details:
      "Outlines the internal rules, regulations, and governance structure of the company.",
  },
  {
    name: "AGILE-PRO-S (INC-35)",
    purpose: "Linked Registrations",
    details:
      "A mandatory linked form for GSTIN, EPFO, ESIC, Professional Tax, and opening a company bank account.",
  },
  {
    name: "INC-9",
    purpose: "Declaration",
    details:
      "An auto-generated declaration by all subscribers and directors certifying their compliance with company law. It is submitted as part of SPICe+.",
  },
];

const FormsRequired = () => {
  return (
    <section className="forms-wrapper" aria-labelledby="forms-heading">
      <div className="forms-intro">
        <h2 id="forms-heading" className="forms-title">
          Forms Required for Section 8 Company Registration in India
        </h2>

        <p className="forms-lead">
          The process of registering a Section 8 Company in India is simple and
          fully online through the Ministry of Corporate Affairs (MCA) portal.
          You'll mostly need to fill out one main form, along with a few other
          linked forms. Here’s a look at the essential forms for the
          registration:
        </p>
      </div>

      {/* Header row (desktop only) */}
      <div className="forms-table">
        <div className="forms-header" role="row">
          <div className="col col-name">Form Name / Number</div>
          <div className="col col-purpose">Purpose of the Form</div>
          <div className="col col-details">Key Details</div>
        </div>

        {/* rows */}
        <div className="forms-body" role="list">
          {forms.map((f, idx) => (
            <article
              role="listitem"
              aria-label={f.name}
              className={`forms-row ${idx % 2 === 0 ? "even" : "odd"}`}
              key={f.name}
            >
              <div className="col col-name">
                <strong className="row-name">{f.name}</strong>
              </div>

              <div className="col col-purpose">
                <div className="row-purpose">{f.purpose}</div>
              </div>

              <div className="col col-details">
                <div className="row-details">{f.details}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormsRequired;
