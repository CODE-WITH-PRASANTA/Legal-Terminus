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
    <section className="gst-wrapper">
      {/* ================== PROCESS SECTION ================== */}
      <h2 className="gst-heading">How to Apply for GST Registration Online?</h2>
      <p className="gst-subheading">
        Follow the step-by-step snake process to complete GST registration easily.
      </p>

      <div className="snake-grid">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`snake-step ${
              index % 2 !== 0 ? "right-align" : ""
            }`}
          >
            <div className="step-card">
              <span className="step-badge">{index + 1}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>

            {/* SVG Arrow */}
            {index < steps.length - 1 && (
              <svg
                className={`snake-arrow ${
                  index % 2 !== 0 ? "arrow-left" : "arrow-right"
                }`}
                width="120"
                height="60"
                viewBox="0 0 120 60"
                fill="none"
              >
                <path
                  d="M5 30 H100"
                  stroke="#f4a62a"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <polygon
                  points="100,24 115,30 100,36"
                  fill="#f4a62a"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* ================== CONSEQUENCES ================== */}
      <h2 className="gst-heading">Consequences for Non-Compliance</h2>

      <div className="penalty-grid">
        <div className="penalty-card light">
          <h3>Penalty for Violation in GST</h3>
          <ul>
            <li>10% penalty on unpaid tax</li>
            <li>100% penalty on intentional evasion</li>
            <li>Minimum penalty ₹10,000</li>
            <li>Interest on outstanding tax</li>
            <li>GST suspension or cancellation</li>
          </ul>
        </div>

        <div className="penalty-card dark">
          <h3>Penalty for Not Registering GST</h3>
          <ul>
            <li>₹10,000 or tax evaded (whichever is higher)</li>
            <li>Penalty up to ₹2 Lakhs</li>
            <li>Legal action under CGST Act</li>
          </ul>
        </div>
      </div>

      {/* ================== GST COMPONENTS ================== */}
      <h2 className="gst-heading">Key Components of GST Registration</h2>

      <div className="components-grid">
        <div className="component-card">
          <h4>CGST</h4>
          <p>Central Goods & Services Tax imposed by Central Government.</p>
        </div>
        <div className="component-card">
          <h4>SGST</h4>
          <p>State Goods & Services Tax imposed by State Government.</p>
        </div>
        <div className="component-card">
          <h4>IGST</h4>
          <p>Integrated GST for inter-state transactions.</p>
        </div>
      </div>

      <div className="cta-wrapper">
        <button className="cta-btn">Get Your GST Number Quickly</button>
      </div>
    </section>
  );
};

export default GSTProcess;
