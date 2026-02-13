import React from "react";
import "./DissolvePrivateProcess.css";

const steps = [
  {
    title: "Step 1 – Document Submission",
    text:
      "Submission of required documents and information as per the checklist provided by our team.",
  },
  {
    title: "Step 2 – Company Name & Object Finalization",
    text:
      "Finalization of company name and business objects based on a detailed name search conducted by our experts.",
  },
  {
    title: "Step 3 – Name Reservation Application",
    text:
      "Filing of the name reservation application in the prescribed MCA form along with applicable government fees.",
  },
  {
    title: "Step 4 – Digital Signature Certificates",
    text:
      "Preparation of Digital Signature Certificates (DSC) for promoters and directors and registration on the MCA portal.",
  },
  {
    title: "Step 5 – trustoration Document Preparation",
    text:
      "Drafting and preparation of trustoration documents after receiving name approval from MCA.",
  },
  {
    title: "Step 6 – Final Form Filing & Fee Payment",
    text:
      "Uploading of final trustoration forms on the MCA portal along with applicable government fees.",
  },
  {
    title: "Step 7 – Certificate of trustoration",
    text:
      "Review by the Registrar of Companies and issuance of the Certificate of trustoration.",
  },
];

const DissolvePrivateProcess = () => {
  return (
    <section className="Dissolve-process-section">
      <h2 className="Dissolve-process-title">
        Steps for Dissolve-Private Company Registration in India
      </h2>

      <p className="Dissolve-process-subtitle">
        The complete process of registering a Private Limited Company involves
        the following structured steps:
      </p>

      <div className="Dissolve-timeline">
        <div className="Dissolve-timeline-line" />

        {steps.map((step, index) => (
          <div
            key={index}
            className={`Dissolve-timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="Dissolve-timeline-dot">{index + 1}</div>

            <div className="Dissolve-timeline-card">
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DissolvePrivateProcess;
