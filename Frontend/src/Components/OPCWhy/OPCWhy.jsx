import React from "react";
import "./OPCWhy.css";

const helpPoints = [
  {
    title: "Expert Consultation",
    text:
      "We deliver professional advice to guide you in realizing the specific needs and advantages of an OPC registration.",
  },
  {
    title: "Documentation Support",
    text:
      "We help prepare and gather all documents necessary, ensuring compliance with legal requirements.",
  },
  {
    title: "DIN & DSC Application",
    text:
      "We assist in procuring the Director Identification Number (DIN) and Digital Signature Certificate (DSC).",
  },
  {
    title: "Name Approval",
    text:
      "We manage the complete name approval process with the Ministry of Corporate Affairs (MCA).",
  },
  {
    title: "MOA & AOA Drafting",
    text:
      "Vakilsearch drafts the Memorandum and Articles of Association tailored to your business needs.",
  },
  {
    title: "ROC Filing",
    text:
      "We file all required forms (INC-32, INC-33, INC-34) with the Registrar of Companies.",
  },
  {
    title: "Certificate of Incorporation",
    text:
      "We help obtain the Certificate of Incorporation, officially registering your OPC.",
  },
  {
    title: "PAN & TAN Application",
    text:
      "We handle PAN and TAN application processes for your company.",
  },
  {
    title: "Post-Incorporation Support",
    text:
      "Continuous support for post-incorporation compliances and operational efficiency.",
  },
];

export default function OPCHelps() {
  return (
    <section className="opc-help-section">
      <header className="opc-help-header">
        <h2>
          How Vakilsearch Helps in Simplifying the One-Person Company Registration
          Process?
        </h2>
        <p>
          Vakilsearch provides end-to-end services to make OPC registration easier,
          ensuring a smooth experience for entrepreneurs.
        </p>
      </header>

      <div className="opc-help-grid">
        {helpPoints.map((item, index) => (
          <div key={index} className="opc-help-card">
            <div className="opc-help-badge">{index + 1}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
