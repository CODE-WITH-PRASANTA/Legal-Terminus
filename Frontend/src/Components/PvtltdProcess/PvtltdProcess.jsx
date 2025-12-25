import React from "react";
import "./PvtltdProcess.css";

const steps = [
  {
    title: "Step 1 – Document Submission",
    text:
      "Provision of requisite documents / information to us (as per the checklist to be provided by us).",
  },
  {
    title: "Step 2 –  Company Name & Objects Finalization",
    text:
      "Finalisation of objects along with name of the proposed company (based on a search report duly conducted and provided by our team).",
  },
  {
    title: "Step 3 – Name Reservation Application",
    text:
      "Filing of application for name reservation in requisite e-form along with applicable government fees.",
  },
  {
    title: "Step 4 –  Digital Signature Certificates",
    text:
      "Preparation of requisite numbers of DSC with respect to the proposed promoters & directors and registration of DSC in the MCA portal.",
  },
  {
    title: "Step 5 – Incorporation Document Preparation",
    text:
      "Preparation of further incorporation documents upon receipt of the name approval letter from the department.",
  },
  {
    title: "Step 6 – Final Form Upload & Fee Payment",
    text:
      "Uploading of final incorporation forms to the MCA portal along with applicable government fees.",
  },
  {
    title: "Step 7 – Registration Certificate Issuance",
    text:
      "Processing of the application by the department and issuance of the registration certificate.",
  },
];

const GSTProcess = () => {
  return (
    <section className="gst-wrapper">
      {/* ================== PROCESS SECTION ================== */}
      <h2 className="gst-heading">STEPS FOR PRIVATE LIMITED COMPANY REGISTRATION IN INDIA</h2>
      <p className="gst-subheading">
        The broad process of registering a Private Limited company involves
            the following steps:
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
