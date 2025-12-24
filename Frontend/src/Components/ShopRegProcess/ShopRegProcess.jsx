import React from "react";
import "./ShopRegProcess.css";

const steps = [
  {
    title: "Document Submission",
    description:
      "Provision of requisite documents and information required for registration."
  },
  {
    title: "Further Documentation",
    description:
      "Validation of documents and processing of the information submitted."
  },
  {
    title: "Filing of Application",
    description:
      "Filing of the application online or offline, as applicable."
  },
  {
    title: "Payment",
    description:
      "Payment of the appropriate government fee as applicable."
  },
  {
    title: "Issue of Registration Certificate",
    description:
      "Processing of the application and issuance of the registration certificate."
  }
];

const ShopEstablishmentSteps = () => {
  return (
    <section className="shopstep-section">
      <h2 className="shopstep-main-title">
        Steps for Shop & Establishment Registration in India
      </h2>

      <p className="shopstep-subtext">
        Applicable only for Municipal Areas and each branch in Odisha <br />
        <strong>Government Fee: Up to ₹600</strong>
      </p>

      <div className="shopstep-timeline">
        {steps.map((step, index) => (
          <div className="shopstep-item" key={index}>
            <div className="shopstep-left">
              <span className="shopstep-step">Step {index + 1}</span>
            </div>

            <div className="shopstep-center">
              <div className="shopstep-circle">{index + 1}</div>
              {index < steps.length - 1 && (
                <div className="shopstep-line"></div>
              )}
            </div>

            <div className="shopstep-right">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="shopstep-timebox">
        ⏱ Total Time: Approximately 7–8 Working Days
      </div>
    </section>
  );
};

export default ShopEstablishmentSteps;
