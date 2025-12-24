import React from "react";
import "./ShopRegTerms.css";

const TermsConditions = () => {
  return (
    <section className="tc-section">
      <div className="tc-container">
        {/* HEADER */}
        <div className="tc-header">
          <h2 className="tc-title">Terms & Conditions</h2>
          <p className="tc-subtitle">
            By subscribing to the above plans, you agree to abide by our
            following additional terms and conditions
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="tc-grid">
          <div className="tc-card">
            <span className="tc-number">1</span>
            <p>
              The fee mentioned above does not include government fees, if any,
              which shall be payable over and above the professional fee
              mentioned.
            </p>
          </div>

          <div className="tc-card">
            <span className="tc-number">2</span>
            <p>
              Professional fees and government fees, if applicable, may vary
              from state to state. Kindly contact our executive to receive the
              best quotation as per your requirement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
