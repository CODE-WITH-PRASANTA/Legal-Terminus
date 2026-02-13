import React from "react";
import "./ChangetoLlpPlanandPrice.css";

const PricingSection = () => {
  return (
    <section className="llpprice-section">
      <div className="llpprice-container">

        {/* Upper part */}
        <header className="llpprice-header">
          <h2 className="llpprice-title">CHOOSE YOUR PLAN</h2>
          <p className="llpprice-subtitle">
            Register your LLP with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="llpprice-cards">

          {/* Elemental */}
          <article className="llpprice-card">
            <div>
              <div className="llpprice-plan-header">
                <div className="llpprice-plan-name">Elemental</div>
                <div className="llpprice-plan-price">₹7,999</div>
                <div className="llpprice-plan-meta">Including gov fee</div>
              </div>

              <div className="llpprice-plan-body">
                <ul className="llpprice-plan-list">
                  <li className="llpprice-plan-list-item">Name Search for LLP Incorporation</li>
                  <li className="llpprice-plan-list-item">1 RUN Name Approval Application</li>
                  <li className="llpprice-plan-list-item">DPIN for 2 Individuals</li>
                  <li className="llpprice-plan-list-item">Certificate of Incorporation</li>
                  <li className="llpprice-plan-list-item">LLP Agreement</li>
                  <li className="llpprice-plan-list-item">LLP Government Fees</li>
                  <li className="llpprice-plan-list-item">DSC of 2 Designated Partners</li>
                  <li className="llpprice-plan-list-item">Filing of PAN Application</li>
                  <li className="llpprice-plan-list-item">Documents for Bank Account opening</li>
                </ul>
              </div>
            </div>

            <div className="llpprice-plan-footer">
              <button className="llpprice-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="llpprice-card">
            <div>
              <div className="llpprice-plan-header">
                <div className="llpprice-plan-name">Enriched</div>
                <div className="llpprice-plan-price">₹9,999</div>
                <div className="llpprice-plan-meta">
                  Including gov fee <span className="llpprice-popular">(Popular)</span>
                </div>
              </div>

              <div className="llpprice-plan-body">
                <ul className="llpprice-plan-list">
                  <li className="llpprice-plan-list-item">Elemental Plan Plus</li>
                  <li className="llpprice-plan-list-item">UDYAM Registration</li>
                  <li className="llpprice-plan-list-item">GST Registration</li>
                </ul>
              </div>
            </div>

            <div className="llpprice-plan-footer">
              <button className="llpprice-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="llpprice-card">
            <div>
              <div className="llpprice-plan-header">
                <div className="llpprice-plan-name">Supreme</div>
                <div className="llpprice-plan-price">₹13,999</div>
                <div className="llpprice-plan-meta">Including gov fee</div>
              </div>

              <div className="llpprice-plan-body">
                <ul className="llpprice-plan-list">
                  <li className="llpprice-plan-list-item">Enriched Plan Plus</li>
                  <li className="llpprice-plan-list-item">Filing of LLP 11</li>
                  <li className="llpprice-plan-list-item">Filing of LLP 8</li>
                  <li className="llpprice-plan-list-item">ITR Filing of LLP</li>
                </ul>
              </div>
            </div>

            <div className="llpprice-plan-footer">
              <button className="llpprice-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
