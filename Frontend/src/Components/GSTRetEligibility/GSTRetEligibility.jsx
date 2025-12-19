import React from "react";
import "./GSTRetEligibility.css";

const eligibilityPoints = [
  "Regular enterprises having a yearly/aggregate turnover of more than Rs. 5 crores",
  "Individuals envisaged in the supply of services, such as computer programmers",
  "Individuals engaged in the inter-state supply of goods or services",
  "Individuals/businesses registered under the Composition Scheme of the GST Act",
  "Other types of business owners and dealers",
];

const GSTEligibilityCriteria = () => {
  return (
    <section className="gst-eligibility-section">
      <div className="gst-eligibility-container">
        <h2 className="gst-eligibility-title">
          Eligibility Criteria for Goods and Services Tax Filing
        </h2>

        <p className="gst-eligibility-subtitle">
          The eligibility criteria required for Goods and Services Tax filing are as discussed below:
        </p>

        <ul className="gst-eligibility-list">
          {eligibilityPoints.map((item, index) => (
            <li className="gst-eligibility-item" key={index}>
              <span className="gst-eligibility-icon">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GSTEligibilityCriteria;
