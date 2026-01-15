import React from "react";
import "./Section8Process.css";

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
    title: "Step 5 – Incorporation Document Preparation",
    text:
      "Drafting and preparation of incorporation documents after receiving name approval from MCA.",
  },
  {
    title: "Step 6 – Final Form Filing & Fee Payment",
    text:
      "Uploading of final incorporation forms on the MCA portal along with applicable government fees.",
  },
  {
    title: "Step 7 – Certificate of Incorporation",
    text:
      "Review by the Registrar of Companies and issuance of the Certificate of Incorporation.",
  },
];

const Section8Process = () => {
  return (
    <section className="s8-process-section">
      <h2 className="s8-process-title">
        Steps for Incorporation Company Registration in India
      </h2>

      <p className="s8-process-subtitle">
        The complete process of registering a Private Limited Company involves
        the following structured steps:
      </p>

      <div className="s8-timeline">
        <div className="s8-timeline-line" />

        {steps.map((step, index) => (
          <div
            key={index}
            className={`s8-timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="s8-timeline-dot">{index + 1}</div>

            <div className="s8-timeline-card">
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section8Process;
