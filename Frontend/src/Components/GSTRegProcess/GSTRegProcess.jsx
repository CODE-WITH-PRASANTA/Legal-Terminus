import React from "react";
import "./GSTRegProcess.css";

const steps = [
  {
    title: "Step 1 – Document Submission",
    text:
      "Provision of requisite mentioned documents/information to us",
  },
  {
    title: "Step 2 – Documents Scrutinizing",
    text:
      "Validating the documents/information and processing the same",
  },
  {
    title: "Step 3 – Further Documentations",
    text:
      "Preparation of further documents for signature",
  },
  {
    title: "Step 4 – Filing of Application",
    text:
      "Filing of application and submission of the same online",
  },
  {
    title: "Step 5 – Process of ARN Generation",
    text:
      "Aadhaar authentication for generation of ARN through OTP",
  },
  {
    title: "Step 5 – Issue of Registration Certificate",
    text:
      "Processing of the application and issuance of registration certificate",
  },
];

const GSTProcess = () => {
  return (
    <section className="GSTProcess-wrapper">
      <h2 className="GSTProcess-heading">
         Steps for GST Registration in India
         <br></br>
         <br></br>
      </h2>

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

      {/* ================= CONSEQUENCES =================
      <h2 className="GSTProcess-heading">Consequences for Non-Compliance</h2> */}

      <div className="GSTProcess-penalty-grid">
        {/* <div className="GSTProcess-penalty-card GSTProcess-light">
          <h3>Penalty for Violation in GST</h3>
          <ul>
            <li>10% penalty on unpaid tax</li>
            <li>100% penalty on intentional evasion</li>
            <li>Minimum penalty ₹10,000</li>
            <li>Interest on outstanding tax</li>
            <li>GST suspension or cancellation</li>
          </ul>
        </div> */}

        {/* <div className="GSTProcess-penalty-card GSTProcess-dark">
          <h3>Penalty for Not Registering GST</h3>
          <ul>
            <li>₹10,000 or tax evaded (whichever is higher)</li>
            <li>Penalty up to ₹2 Lakhs</li>
            <li>Legal action under CGST Act</li>
          </ul>
        </div> */}
      </div>

      {/* ================= COMPONENTS ================= */}
      <h2 className="GSTProcess-heading">
        Different Types of GST Registration
      </h2>
      
     <div style={{ height: "30px" }}></div>

      <div className="GSTProcess-components-grid">
        <div className="GSTProcess-component-card">
          <h4>Central GST (CGST)</h4>
          <p>This tax is applied when goods or services are sold within the same state. The central government collects this tax.</p>
        </div>

        <div className="GSTProcess-component-card">
          <h4>State GST (SGST)</h4>
          <p>This is also charged on sales within a state, but the tax is collected by the state government.</p>
        </div>

        <div className="GSTProcess-component-card">
          <h4>Integrated GST (IGST)</h4>
          <p>This tax is applied when goods or services are sold from one state to another. The central government collects it and later shares it with the respective state.</p>
        </div>
      </div>

      <div className="GSTProcess-cta-wrapper">
        {/* <button className="GSTProcess-cta-btn">
          Get Your GST Number Quickly
        </button> */}
      </div>
    </section>
  );
};

export default GSTProcess;
