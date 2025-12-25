import React from "react";
import "./UdyamRegBenefits.css"

const benefits = [
  "Necessary for getting a Current Bank Account for your Business",
  "Necessary for GST Registration",
  "Helps in Government Tenders",
  "Udyam Certified MSMEs can avail 45 Days Delayed Payment Rule",
  "Avail Loans under Government Credit Schemes like PMEGP or Mudra Loan",
  "MSMEs can get 50% waiver on Trademark Registration Fees",
  "Reversal of Credit Rating Fees or Government Deposits",
  "Participation in Government Exhibitions and Trade Fairs",
  "Access to Government Grant Programs"
];

const UdyamBenefits = () => {
  return (
    <section className="udyam-benefits-section">
      <div className="udyam-benefits-container">
        <h2 className="udyam-benefits-title">
          Benefits of Udyam Registration Certificate for MSMEs
        </h2>

        <p className="udyam-benefits-subtitle">
          Below are the key advantages of having a Udyam Registration Certificate
          for your MSME business.
        </p>

        <div className="udyam-benefits-grid">
          {benefits.map((item, index) => (
            <div className="udyam-benefit-card" key={index}>
              <span className="udyam-benefit-number">
                {index + 1}
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UdyamBenefits;
