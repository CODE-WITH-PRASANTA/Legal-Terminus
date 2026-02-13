import React from "react";
import "./DissolvePrivateDocument.css";

const steps = [
  {
    id: "01",
    title: "Dissolve Deed",
    desc: "Drafted dissolve deed on stamp paper with trustee and settlor details.",
    color: "#14b8a6",
    icon: "📄",
  },
  {
    id: "02",
    title: "Identity Proof",
    desc: "PAN Card and Aadhaar of settlor and trustees.",
    color: "#8b5cf6",
    icon: "🪪",
  },
  {
    id: "03",
    title: "Address Proof",
    desc: "Utility bill, bank statement, or Aadhaar as address proof.",
    color: "#f97316",
    icon: "🏠",
  },
  {
    id: "04",
    title: "Registered Office",
    desc: "Registered office address proof with NOC if rented.",
    color: "#facc15",
    icon: "📍",
  },
  {
    id: "05",
    title: "Photographs",
    desc: "Passport size photographs of settlor and trustees.",
    color: "#84cc16",
    icon: "📸",
  },
];

const DissolvePrivateDocument = () => {
  return (
    <section className="dissolve-section">
      <div className="dissolve-header">
        <h2>Dissolve-Private Registration in India</h2>
        <p>Documents Required for Dissolve Registration</p>
      </div>

      <div className="dissolve-timeline">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`dissolve-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="dissolve-content">
              <span className="step-id" style={{ color: step.color }}>
                {step.id}
              </span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>

            <div
              className="dissolve-node"
              style={{ backgroundColor: step.color }}
            >
              {step.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DissolvePrivateDocument;
