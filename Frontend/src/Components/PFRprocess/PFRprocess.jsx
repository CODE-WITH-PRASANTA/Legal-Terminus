import React from "react";
import "./PFRprocess.css";

const steps = [
  {
    title: "Step 1 – Document Submission",
    text:
      "Provision of requisite documents/ information to us (As per the Checklist to be provided by us)",
  },
  {
    title: "Step 2 – Partnership Deed Preparation",
    text:
      "Preparation of draft Partnership Deed",
  },
  {
    title: "Step 3 – Partnership Deed Execution and Notarization",
    text:
      "Execution & Notrisation of Partnership Deed with requisite Stamp Duty",
  },
  {
    title: "Step 4 – PAN & TAN Application",
    text:
      "Application for obtaining PAN & TAN",
  },
];

const GSTProcess = () => {
  return (
    <section className="pvtltd-gst-wrapper">
      <h2 className="gst-heading">
        Steps For Partnership Firm Registration In India
      </h2>
      <p className="pv-gst-subheading">
        The broad process of registering a Partnership Firm involves the following steps:
      </p>

      <div className="pvtltd-timeline">
        <div className="pvtltd-timeline-line" />

        {steps.map((step, index) => (
          <div
            key={index}
            className={`pvtltd-timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="pvtltd-timeline-dot">{index + 1}</div>

            <div className="pvtltd-timeline-card">
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GSTProcess;
