import React from "react";
import "./ProPlanandPricing.css";

const ProPlanandPricing = () => {
  return (
    <section className="pvtltd-pricing-section">
      <div className="pricing-container">
        
        {/* Upper part */}
        <header className="pricing-header">
          <h2 className="PvtLtd-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="pricing-subtitle">
            Register your proprietorship firm with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="pricing-cards">

          {/* Elemental */}
          <article className="plan-card">
            <div>
              <div className="plan-header">
                <div className="plan-name">Elemental</div>
                <div className="plan-price">₹999</div>
                <div className="plan-meta">Excluding gov fee</div>
              </div>

              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">Udyam Registration</li>
                </ul>
              </div>
            </div>

            <div className="plan-footer">
              <button className="plan-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="plan-card">
            <div>
              <div className="plan-header">
                <div className="plan-name">Enriched</div>
                <div className="plan-price">₹2,499</div>
                <div className="plan-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">Udyam Registration</li>
                  <li className="plan-list-item">GST Registration</li>
                </ul>
              </div>
            </div>

            <div className="plan-footer">
              <button className="plan-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="plan-card">
            <div>
              <div className="plan-header">
                <div className="plan-name">Supreme</div>
                <div className="plan-price">₹7,999</div>
                <div className="plan-meta">Excluding gov fee</div>
              </div>

              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">Udyam Registration</li>
                  <li className="plan-list-item">GST Registration</li>
                  <li className="plan-list-item">Trademark Application</li>
                </ul>
              </div>
            </div>

            <div className="plan-footer">
              <button className="plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default ProPlanandPricing;
