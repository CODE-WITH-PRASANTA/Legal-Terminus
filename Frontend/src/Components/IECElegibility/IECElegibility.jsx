import React from "react";
import "./IECElegibility.css";

const steps = [
  {
    title: "Step 1 – Document Submission",
    text:
      "Provide the above-mentioned documents/information to us",
  },
  {
    title: "Step 2 – Application Preparation",
    text:
      "Our consultant will process the above documents/ information and validate the same.",
  },
  {
    title: "Step 3 – Application Filing",
    text:
      "The application for IEC shall be filled online or offline.",
  },
  {
    title: "Step 4 – Application Submitted",
    text:
      "The application shall be submitted with required attachments.",
  },
  {
    title: "Step 5 – IEC Certificate Delivery",
    text:
      "The department shall process the application and issue a registration certificate",
  },
];

const IECElegibility = () => {
  return (
    <section className="iecelg-wrapper">
      <h2 className="iecelg-heading">
        Steps For Impoter Exporter Code Registration in India
      </h2>
      <p className="iecelg-subheading">
        The broad process of registering a IEC involves the following steps:
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
