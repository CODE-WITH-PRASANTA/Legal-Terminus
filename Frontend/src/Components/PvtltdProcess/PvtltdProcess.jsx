import React from "react";
import "./PvtltdProcess.css";

const steps = [
  {
    id: 1,
    shortTitle: "Document Submission",
    description:
      "Provision of requisite documents / information to us (as per the checklist to be provided by us).",
  },
  {
    id: 2,
    shortTitle: "Company Name & Objects Finalization",
    description:
      "Finalisation of objects along with name of the proposed company (based on a search report duly conducted and provided by our team).",
  },
  {
    id: 3,
    shortTitle: "Name Reservation Application",
    description:
      "Filing of application for name reservation in requisite e-form along with applicable government fees.",
  },
  {
    id: 4,
    shortTitle: "Digital Signature Certificates",
    description:
      "Preparation of requisite numbers of DSC with respect to the proposed promoters & directors and registration of DSC in the MCA portal.",
  },
  {
    id: 5,
    shortTitle: "Incorporation Document Preparation",
    description:
      "Preparation of further incorporation documents upon receipt of the name approval letter from the department.",
  },
  {
    id: 6,
    shortTitle: "Final Form Upload & Fee Payment",
    description:
      "Uploading of final incorporation forms to the MCA portal along with applicable government fees.",
  },
  {
    id: 7,
    shortTitle: "Registration Certificate Issuance",
    description:
      "Processing of the application by the department and issuance of the registration certificate.",
  },
];

const PvtStepsCards = () => {
  return (
    <section className="stepscards-section">
      <div className="stepscards-container">
        {/* Header (from 1st image) */}
        <header className="stepscards-header">
          <h2 className="stepscards-title">
            STEPS FOR PRIVATE LIMITED COMPANY REGISTRATION IN INDIA
          </h2>
          <p className="stepscards-sub">
            The broad process of registering a Private Limited company involves
            the following steps:
          </p>
          <div className="stepscards-time-pill">
            Total time: Approximately 15–20 working days
          </div>
        </header>

        {/* Card flow (your 2nd image, but as cards with arrows) */}
        <div className="stepscards-flow">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <React.Fragment key={step.id}>
                <article className="stepscards-card">
                  <div className="stepscards-step-label">Step {step.id}</div>
                  <div className="stepscards-circle-icon">
                    <span className="stepscards-circle-letter">
                      {step.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="stepscards-card-title">{step.shortTitle}</h3>
                  <p className="stepscards-card-text">{step.description}</p>
                </article>

                {!isLast && (
                  <div className="stepscards-arrow" aria-hidden="true">
                    <span className="stepscards-arrow-line" />
                    <span className="stepscards-arrow-head">➜</span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Notes (from 3rd image) */}
        <div className="stepscards-notes-wrapper">
          <div className="stepscards-notes-inner">
            <ul className="stepscards-notes-list">
              <li>
                <strong>Note 1</strong> COI, MOA, and AOA of the incorporated
                company shall be provided by us.
              </li>
              <li>
                <strong>Note 2</strong> PAN, TAN, EPF, ESI, and bank account
                details shall be received through your registered mail ID
                directly from the department.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtStepsCards;
