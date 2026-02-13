import React from "react";
import "./TrustDocument.css";

const steps = [
  {
    id: "01",
    title: "Trust Deed",
    desc: "Drafted trust deed on stamp paper with trustee and settlor details.",
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
    desc: "Address proof of registered office with NOC if rented.",
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

const TrustDocument = () => {
  return (
    <section className="trust-section">
      {/* ===== HEADING ===== */}
      <div className="trust-header">
        <h2>Trust Registration in India</h2>
        <p>Documents Required for Trust Registration</p>
      </div>

      {/* ===== INFOGRAPHIC STEPS ===== */}
      <div className="trust-steps">
        {steps.map((step, index) => (
          <div key={step.id} className="trust-step">
            {/* connector */}
            {index !== steps.length - 1 && (
              <span className="trust-line" />
            )}

            <div
              className="trust-circle"
              style={{ "--clr": step.color }}
            >
              <span className="trust-number">{step.id}</span>
              <span className="trust-icon">{step.icon}</span>
            </div>

            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustDocument;
