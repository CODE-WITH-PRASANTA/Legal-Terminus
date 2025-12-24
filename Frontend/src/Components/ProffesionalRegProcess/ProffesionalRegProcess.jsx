import React from "react";
import "./ProffesionalRegProcess.css";

const steps = [
  {
    label: "Document Submission",
    title: "Provision of Documents",
    description:
      "Provision of requisite documents and information required for Professional Tax Registration."
  },
  {
    label: "Further Documentation",
    title: "Verification & Processing",
    description:
      "Validating the documents and information submitted and processing the same."
  },
  {
    label: "Filing of Application",
    title: "Application Submission",
    description:
      "Filing of the application and submission in online or offline mode, as applicable."
  },
  {
    label: "Payment",
    title: "Government Fee Payment",
    description:
      "Payment of the applicable Professional Tax government fee."
  },
  {
    label: "Issue of Registration Certificate",
    title: "Certificate Issuance",
    description:
      "Processing of the application and issuance of the Professional Tax Registration Certificate."
  }
];

const ProfessionalTaxSteps = () => {
  return (
    <section className="ptstep-section">
      <h2 className="ptstep-title">
        Steps for Professional Tax Registration in India
      </h2>

      <div className="ptstep-time">
        ⏱ Total Time: Approximately 7–8 Working Days
      </div>

      <div className="ptstep-wrapper">
        {steps.map((step, index) => (
          <div className="ptstep-row" key={index}>
            {/* LEFT LABEL */}
            <div className="ptstep-left">
              <span>{step.label}</span>
            </div>

            {/* CENTER STEP */}
            <div className="ptstep-center">
              <div className="ptstep-circle">{index + 1}</div>
              {index < steps.length - 1 && (
                <div className="ptstep-arrow"></div>
              )}
            </div>

            {/* RIGHT CONTENT */}
            <div className="ptstep-right">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalTaxSteps;
