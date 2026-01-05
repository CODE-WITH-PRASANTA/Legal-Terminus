import React from "react";
import "./GSTRegEligibility.css";
import eligibilityImg from "../../assets/img-2.webp";
import { FaCheckCircle } from "react-icons/fa";

const checklist = [
  "Businesses having an aggregate annual turnover of more than INR 40 Lakhs must apply for GST registration (INR 20 Lakhs for special category states).",
  "All service providers with an aggregate annual turnover exceeding INR 20 Lakhs (INR 10 Lakhs for special category states).",
  "Businesses previously registered under Excise, VAT, Service Tax, etc., must migrate to GST.",
  "Non-resident individuals or businesses involved in taxable supplies within India.",
  "Entities offering online information, database access, or retrieval services from outside India."
];

const otherEntities = [
  "Any individual or business dealing with goods supplied across state boundaries.",
  "Businesses liable to pay tax under the reverse charge mechanism.",
  "Input service distributors and their agents.",
  "E-commerce operators and aggregators.",
  "Anyone undertaking taxable supply (if applicable).",
  "Authorized representatives supplying goods/services on behalf of others.",
  "Individuals or businesses supplying goods/services through e-commerce platforms."
];

const GSTEligibility = () => {
  return (
    <section className="GSTRegEligibility-section">
      <div className="GSTRegEligibility-container">

        {/* SECTION 1 */}
        <div className="GSTRegEligibility-header">
          <h2>Eligibility Criteria for New GST Registration</h2>
          <p>
            GST registration is essential for certain businesses and service providers.
            The eligibility criteria for applying for mandatory GST registration include:
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="GSTRegEligibility-grid">
          <div className="GSTRegEligibility-left">
            <h3>Eligibility Checklist for Filing GST Registration</h3>

            <ul className="GSTRegEligibility-list">
              {checklist.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="GSTRegEligibility-icon" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="GSTRegEligibility-btn">
              Apply for GST Registration Now
            </button>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="GSTRegEligibility-grid GSTRegEligibility-grid-alt">
          <div className="GSTRegEligibility-left">
            <h3>Other Entities Eligible to Apply for GST Registration</h3>

            <ul className="GSTRegEligibility-list">
              {otherEntities.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="GSTRegEligibility-icon" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="GSTRegEligibility-btn">
              Complete Your GST Registration Fast
            </button>
          </div>

          <div className="GSTRegEligibility-right">
            <img src={eligibilityImg} alt="GST Eligibility Illustration" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GSTEligibility;
