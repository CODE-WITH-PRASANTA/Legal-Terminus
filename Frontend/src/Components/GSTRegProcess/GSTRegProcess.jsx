import React from "react";
import "./GSTRegProcess.css";

const steps = [
  {
    title: "Step 1 – Apply on GST Portal",
    text:
      "Visit the GST portal and enter legal business name, PAN, email ID, mobile number, state, and district.",
  },
  {
    title: "Step 2 – Authenticate OTP",
    text:
      "Receive OTP on registered mobile number and email ID for verification.",
  },
  {
    title: "Step 3 – TRN Generated",
    text:
      "After OTP verification, a Temporary Reference Number (TRN) is generated.",
  },
  {
    title: "Step 4 – Submission for Verification",
    text:
      "Provide promoter details, business details, Aadhaar authentication, and verification.",
  },
  {
    title: "Step 5 – Receive ARN Confirmation",
    text:
      "Application Reference Number (ARN) is generated and sent via SMS.",
  },
];

const GSTProcess = () => {
  return (
    <section className="GSTProcess-wrapper">
      <h2 className="GSTProcess-heading">
        How to Apply for GST Registration Online?
      </h2>

      <p className="GSTProcess-subheading">
        Follow the step-by-step snake process to complete GST registration easily.
      </p>

      {/* ================= SNAKE PROCESS ================= */}
      <div className="GSTProcess-snake-grid">
        {steps.map((step, index) => {
          const isRight = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`GSTProcess-snake-step ${
                isRight ? "GSTProcess-right" : "GSTProcess-left"
              }`}
            >
              {/* Connector */}
              <span
                className={`GSTProcess-connector ${
                  isRight
                    ? "GSTProcess-from-right"
                    : "GSTProcess-from-left"
                }`}
              />

              <div className="GSTProcess-step-card">
                <span className="GSTProcess-step-badge">
                  {index + 1}
                </span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= CONSEQUENCES ================= */}
      <h2 className="GSTProcess-heading">Consequences for Non-Compliance</h2>

      <div className="GSTProcess-penalty-grid">
        <div className="GSTProcess-penalty-card GSTProcess-light">
          <h3>Penalty for Violation in GST</h3>
          <ul>
            <li>10% penalty on unpaid tax</li>
            <li>100% penalty on intentional evasion</li>
            <li>Minimum penalty ₹10,000</li>
            <li>Interest on outstanding tax</li>
            <li>GST suspension or cancellation</li>
          </ul>
        </div>

        <div className="GSTProcess-penalty-card GSTProcess-dark">
          <h3>Penalty for Not Registering GST</h3>
          <ul>
            <li>₹10,000 or tax evaded (whichever is higher)</li>
            <li>Penalty up to ₹2 Lakhs</li>
            <li>Legal action under CGST Act</li>
          </ul>
        </div>
      </div>

      {/* ================= COMPONENTS ================= */}
      <h2 className="GSTProcess-heading">
        Key Components of GST Registration
      </h2>

      <div className="GSTProcess-components-grid">
        <div className="GSTProcess-component-card">
          <h4>CGST</h4>
          <p>Central Goods & Services Tax imposed by Central Government.</p>
        </div>

        <div className="GSTProcess-component-card">
          <h4>SGST</h4>
          <p>State Goods & Services Tax imposed by State Government.</p>
        </div>

        <div className="GSTProcess-component-card">
          <h4>IGST</h4>
          <p>Integrated GST for inter-state transactions.</p>
        </div>
      </div>

      <div className="GSTProcess-cta-wrapper">
        <button className="GSTProcess-cta-btn">
          Get Your GST Number Quickly
        </button>
      </div>
    </section>
  );
};

export default GSTProcess;
