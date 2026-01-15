import React from "react";
import "./IECElegibility.css";

const steps = [
  {
    title: "Step 1 – Document Submission",
    text:
      "Submit all the necessary business and personal documents required for Import Export Code (IEC) registration to our team as per the provided checklist.",
  },
  {
    title: "Step 2 – Application Preparation",
    text:
      "We prepare the IEC application form in accordance with the DGFT guidelines using the applicant’s valid PAN, address proof, and bank details.",
  },
  {
    title: "Step 3 – Digital Signature Certificate (DSC)",
    text:
      "In case the applicant does not have a DSC, one will be created and registered for securely signing the IEC application online.",
  },
  {
    title: "Step 4 – Application Filing with DGFT",
    text:
      "We submit the IEC registration form to the Directorate General of Foreign Trade (DGFT) portal along with the required government fees.",
  },
  {
    title: "Step 5 – Application Verification",
    text:
      "The DGFT verifies the application details and documents. If any clarification is required, our experts coordinate to provide the necessary response promptly.",
  },
  {
    title: "Step 6 – IEC Code Generation",
    text:
      "Upon successful verification, DGFT issues a unique 10-digit Import Export Code for your business.",
  },
  {
    title: "Step 7 – IEC Certificate Delivery",
    text:
      "Your IEC certificate will be emailed to you and can be downloaded directly from the DGFT portal for your official use.",
  },
];

const IECElegibility = () => {
  return (
    <section className="iecelg-wrapper">
      <h2 className="iecelg-heading">
        STEPS FOR IMPORT EXPORT CODE (IEC) REGISTRATION IN INDIA
      </h2>
      <p className="iecelg-subheading">
        The process for obtaining an Import Export Code (IEC) in India includes the following steps:
      </p>

      <div className="iecelg-timeline">
        <div className="iecelg-timeline-line" />

        {steps.map((step, index) => (
          <div
            key={index}
            className={`iecelg-timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="iecelg-timeline-dot">{index + 1}</div>

            <div className="iecelg-timeline-card">
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IECElegibility;
