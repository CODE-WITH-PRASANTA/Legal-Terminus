import React from "react";
import "./UdyamRegEligibility.css"

const eligibilityData = [
  {
    type: "Micro",
    investment: "Does not exceed ₹1 Crore",
    turnover: "Does not exceed ₹5 Crore",
  },
  {
    type: "Small",
    investment: "Does not exceed ₹10 Crore",
    turnover: "Does not exceed ₹50 Crore",
  },
  {
    type: "Medium",
    investment: "Does not exceed ₹50 Crore",
    turnover: "Does not exceed ₹250 Crore",
  },
];

const UdyamEligibility = () => {
  return (
    <section className="udyam-eligibility-section">
      <div className="udyam-eligibility-container">
        <h2 className="udyam-eligibility-title">
          Eligibility Criteria for Udyam Registration
        </h2>

        <p className="udyam-eligibility-intro">
          To be eligible for MSME (Udyam) registration in 2025, an enterprise
          must meet the following criteria:
        </p>

        <ul className="udyam-eligibility-points">
          <li>
            <strong>For manufacturing enterprises:</strong> Investment in plant
            and machinery or equipment.
          </li>
          <li>
            <strong>For service enterprises:</strong> Annual turnover.
          </li>
        </ul>

        <p className="udyam-eligibility-note">
          This classification helps identify businesses that qualify as micro,
          small, or medium enterprises under current MSME guidelines.
        </p>

        {/* GRID TABLE */}
        <div className="udyam-eligibility-grid">
          <div className="udyam-eligibility-grid-header">
            <span>Classification</span>
            <span>Investment in Plant & Machinery / Equipment</span>
            <span>Turnover</span>
          </div>

          {eligibilityData.map((item, index) => (
            <div className="udyam-eligibility-grid-row" key={index}>
              <span className="udyam-eligibility-type">{item.type}</span>
              <span>{item.investment}</span>
              <span>{item.turnover}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UdyamEligibility;
