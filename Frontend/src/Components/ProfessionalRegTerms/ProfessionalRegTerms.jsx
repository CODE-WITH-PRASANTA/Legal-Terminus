import React from "react";
import "./ProfessionalRegTerms.css";

const terms = [
  {
    text:
      "The fee mentioned above does not include government fees, if any, which shall be payable over and above the professional fee mentioned."
  },
  {
    text:
      "Professional fees and government fees, if applicable, vary from state to state. Kindly contact our executive for the best quotation as per your requirement."
  }
];

const TermsConditionsGrid = () => {
  return (
    <section className="tcg-section">
      <div className="tcg-container">
        <h2 className="tcg-title">Terms & Conditions</h2>

        <p className="tcg-subtitle">
          By subscribing to the above plans, you agree to abide by our following
          additional terms and conditions
        </p>

        <div className="tcg-grid">
          {terms.map((item, index) => (
            <div key={index} className="tcg-card">
              <span className="tcg-icon">✓</span>
              <p className="tcg-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsConditionsGrid;
