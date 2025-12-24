import React from "react";
import "./Section8Registration.css";

const steps = [
  {
    title: "Step 1 – Get DSC & DIN",
    text:
      "Obtain a Digital Signature Certificate (DSC) for proposed directors — required to sign forms and documents electronically on the MCA portal.Along with DSC, each director must obtain a Director Identification Number (DIN), a unique eight-digit number issued by the MCA (applied via Form DIR-3).",
      
      
  },
  {
    title: "Step 2 – Name Reservation (SPICe+ Part A)",
    text:
      "Reserve a unique name for the proposed company using SPICe+ Part A on the MCA portal. The name should reflect the company's objectives and follow MCA naming guidelines.You may submit up to six name options in order of preference.",
  },
  {
    title: "Step 3 – Draft MOA & AOA",
    text:
      "Prepare the Memorandum of Association (MOA) as per Form INC-13 and the Articles of Association (AOA). These documents outline the company's charitable objectives and internal rules.",
  },
  {
    title: "Step 4 – File Incorporation Forms (SPICe+ Part B)",
    text:
      "Fill the SPICe+ Part B form which integrates applications for company incorporation, DIN allotment, PAN and TAN.You may optionally request GST registration and linked registrations (EPFO, ESIC) via AGILE-PRO-S.",
      
  },
  {
    title: "Step 5 – Submit Linked Forms",
    text:
      "Upload signed MOA and AOA and submit any mandatory linked forms such as AGILE-PRO-S for GST/EPF/ESI where applicable.",
  },
  {
    title: "Step 6 – Scrutiny by ROC",
    text:
      "Registrar of Companies (ROC) reviews the submitted forms and documents. If everything is in order the ROC will issue the license in Form INC-16.",
  },
  {
    title: "Step 7 – Issuance of Certificate",
    text:
      "ROC issues the Section 8 Company Registration Certificate (Form INC-11) — conclusive proof of incorporation. The company can now commence operations.",
  }    
];

const GSTProcess = () => {
  return (
    <section className="gst-wrapper">
      {/* ================== PROCESS SECTION ================== */}
      <h2 className="gst-heading">How to Register a Section 8 Company: section8-step-by-Step Process</h2>
      <p className="gst-subheading">
        Here's a guide on the steps for incorporation of a Section 8 company through the MCA online portal.
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

      
    </section>
  );
};

export default GSTProcess;
