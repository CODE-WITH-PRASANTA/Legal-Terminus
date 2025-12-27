import React from "react";
import "./PvtltdDocument.css";

const steps = [
  {
    step: "01",
    title: "KYC Documents",
    color: "pink",
    icon: "💡",
    description: `KYC documents of all proposed directors and shareholders:
› ID Proof – PAN Card
› Address Proof – Aadhaar Card / Passport / Voter ID`,
  },
  {
    step: "02",
    title: "Passport Size Photograph",
    color: "purple",
    icon: "📸",
    description: `Passport size photograph of all proposed directors and shareholders.`,
  },
  {
    step: "03",
    title: "Electricity Bill",
    color: "blue",
    icon: "⚡",
    description: `Electricity bill corresponding to the registered office address of the company.`,
  },
  {
    step: "04",
    title: "Rent Agreement",
    color: "orange",
    icon: "📄",
    description: `Duly notarised rent agreement for the registered office address (if on rent).`,
  },
  {
    step: "05",
    title: "No Objection Certificate",
    color: "teal",   // ✅ changed
    icon: "✅",
    description: `No Objection Certificate (NOC) from the owner allowing use of the premises as the registered office.`,
  },
  {
    step: "06",
    title: "Other Documents",
    color: "red",    // ✅ changed
    icon: "📁",
    description: `Other documents shall be prepared and provided by our team as required.`,
  },
];

const PvtltdDocument = () => {
  return (
    <section className="PvtltdDocument-section">
      <div className="PvtltdDocument-container">

        <div className="PvtltdDocument-circle-wrap">
          <div className="PvtltdDocument-circle-ring">
            <div className="PvtltdDocument-circle">
              <h2>
                Document<br />
                Required
              </h2>
            </div>
          </div>
        </div>

        <div className="PvtltdDocument-cards">
          {steps.map((s, i) => (
            <div key={i} className={`PvtltdDocument-card ${s.color}`}>
              <div className="PvtltdDocument-step-pill">
                <span>STEP</span>
                <strong>{s.step}</strong>
              </div>

              <div className="PvtltdDocument-card-text">
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </div>

              <div className="PvtltdDocument-card-icon">{s.icon}</div>
              <div className="PvtltdDocument-card-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PvtltdDocument;
