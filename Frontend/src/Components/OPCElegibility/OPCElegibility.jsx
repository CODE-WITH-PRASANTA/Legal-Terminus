import React from "react";
import "./OPCElegibility.css";

const steps = [
  {
    title: "Step 1 – Document Submission",
    text:
      "Provision of requisite documents / information to us (as per the checklist to be provided by us).",
  },
  {
    title: "Step 2 – Company Name & Objects Finalization",
    text:
      "Finalisation of objects along with name of the proposed company (based on a search report duly conducted and provided by our team).",
  },
  {
    title: "Step 3 – Name Reservation Application",
    text:
      "Filing of application for name reservation in requisite e-form along with applicable government fees.",
  },
  {
    title: "Step 4 – Digital Signature Certificates",
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

const OPCElegibility = () => {
  return (
    <section className="opcelg-wrapper">
      <h2 className="opcelg-heading">
        STEPS FOR ONE PERSON COMPANY REGISTRATION IN INDIA
      </h2>
      <p className="opcelg-subheading">
        The broad process of registering a One Person Company involves the
        following steps:
      </p>

      <div className="opcelg-timeline">
        <div className="opcelg-timeline-line" />

        {steps.map((step, index) => (
          <div
            key={index}
            className={`opcelg-timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="opcelg-timeline-dot">{index + 1}</div>

            <div className="opcelg-timeline-card">
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OPCElegibility;
