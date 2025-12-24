import React from "react";
import "./LLPWhy.css";

const points = [
  {
    heading: "Consultation and Planning",
    text:
      "Specialist consultation to learn about business needs and organise the LLP as such.",
  },
  {
    heading: "Name Reservation",
    text:
      "Executing LLP name availability checks and acquiring a distinct name for the LLP.",
  },
  {
    heading: "Document Preparation",
    text:
      "Help in preparing the LLP agreement and preparing the documents for filing.",
  },
  {
    heading: "Filing and Documentation",
    text:
      "Preparation of LLP incorporation documents and coordination with regulatory bodies.",
  },
  {
    heading: "Digital Signature Certificates (DSC)",
    text:
      "Coordinating the obtaining of DSCs by partners and designated partners.",
  },
  {
    heading: "Post-Incorporation Support",
    text:
      "Coordinating post-incorporation compliances like PAN and TAN filings, LLP agreement filing, and annual filing requirements.",
  },
  {
    heading: "Additional Services",
    text:
      "Ongoing support for changes, change in LLP constitution, and compliance with regulatory updates.",
  },
];

export default function HowVakilsearchHelps() {
  return (
    <section className="help-wrap" aria-labelledby="help-title">
      <div className="help-container">

        {/* RIGHT CONTENT ONLY */}
        <div className="help-content">
          <h1 id="help-title" className="help-title">
            How Does Vakilsearch Help in Simplifying the LLP Registration Process?
          </h1>

          <p className="help-lead">
            Vakilsearch provides simplified services to facilitate an easy process of LLP registration,
            making it efficient and compliant for our clients:
          </p>

          <ul className="help-list" role="list">
            {points.map((p, i) => (
              <li className="help-item" key={i}>
                <strong className="help-item__heading">{p.heading}:</strong>
                <span className="help-item__text"> {p.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
