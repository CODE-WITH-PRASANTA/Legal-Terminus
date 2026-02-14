import React from "react";
import "./LLRprocess.css";

const steps = [
  {
    title: "Step 1 – Document Submission",
    text:
      "Provision of requisite mentioned documents/information to us",
  },
  {
    title: "Step 2 – Documents Srutinizing",
    text:
      "Validating the documents/ information and processing the same",
  },
  {
    title: "Step 3 – Further Documentations",
    text:
      "Preparation of further documents for signature",
  },
  {
    title: "Step 4 – Filing of Application",
    text:
      "Filing of application and submission of the same in online/offline manner, as the case may be",
  },
  {
    title: "Step 5 – Payment",
    text:
      "Payment of appropriate government fee as applicable",
  },
  {
    title: "Step 6 – Issue of Registration Certificate",
    text:
      "Processing of the application and issuance of registration certificate",
  },
];

const GSTProcess = () => {
  return (
    <section className="pvtltd-gst-wrapper">
      <h2 className="gst-heading">
        Steps For Labour License Registration in India
      </h2>
      <p className="pv-gst-subheading">
        The broad process of registering a Labour License involves
        the following steps:
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
