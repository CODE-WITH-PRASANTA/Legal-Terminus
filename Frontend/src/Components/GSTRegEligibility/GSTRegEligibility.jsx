import React from "react";
import "./GSTRegEligibility.css";
import eligibilityImg from "../../assets/img-2.webp"; // right-side illustration

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
    <section className="gst-eligibility-section">
      <div className="gst-container">

        {/* SECTION 1 */}
        <div className="gst-header">
          <h2>Eligibility Criteria for New GST Registration</h2>
          <p>
            GST registration is essential for certain businesses and service providers.
            The eligibility criteria for applying for mandatory GST registration include:
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="gst-grid">
          <div className="gst-left">
            <h3>Eligibility Checklist for Filing GST Registration</h3>

            <ul className="gst-list">
              {checklist.map((item, index) => (
                <li key={index}>
                  <span className="gst-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="gst-btn">Apply for GST Registration Now</button>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="gst-grid gst-grid-alt">
          <div className="gst-left">
            <h3>Other Entities Eligible to Apply for GST Registration</h3>

            <ul className="gst-list">
              {otherEntities.map((item, index) => (
                <li key={index}>
                  <span className="gst-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="gst-btn">Complete Your GST Registration Fast</button>
          </div>

          <div className="gst-right">
            <img src={eligibilityImg} alt="GST Eligibility Illustration" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GSTEligibility;
