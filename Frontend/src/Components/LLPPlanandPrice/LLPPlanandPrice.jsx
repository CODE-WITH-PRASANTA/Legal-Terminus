import React from "react";
import "./LLPPlanandPrice.css";

const PricingSection = () => {
  return (
    <section className="llp-llp-pricingsection">
      <div className="llp-pricingcontainer">
        
        {/* Upper part */}
        <header className="llp-pricingheader">
          <h2 className="llp-llp-pricingtitle">CHOOSE YOUR PLAN</h2>
          <p className="llp-pricingsubtitle">
            Register your LLP with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="llp-pricingcards">

          {/* Elemental */}
          <article className="plan-card">
            <div>
              <div className="plan-header">
                <div className="plan-name">Elemental</div>
                <div className="plan-price">₹7,999</div>
                <div className="plan-meta">Including gov fee</div>
              </div>

              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">Name Search for LLP Incorporation</li>
                  <li className="plan-list-item">1 RUN Name Approval Application</li>
                  <li className="plan-list-item">DPIN for 2 Individuals</li>
                  <li className="plan-list-item">Certificate of Incorporation</li>
                  <li className="plan-list-item">LLP Agreement</li>
                  <li className="plan-list-item">LLP Government Fees</li>
                  <li className="plan-list-item">DSC of 2 Designated Partners</li>
                  <li className="plan-list-item">Filing of PAN Application</li>
                  <li className="plan-list-item">Documents for Bank Account opening</li>
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
                <div className="plan-price">₹9,999</div>
                <div className="plan-meta">
                  Including gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">Elemental Plan Plus</li>
                  <li className="plan-list-item">UDYAM Registration</li>
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
                <div className="plan-price">₹13,999</div>
                <div className="plan-meta">Including gov fee</div>
              </div>

              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">Enriched Plan Plus</li>
                  <li className="plan-list-item">Filing of LLP 11</li>
                  <li className="plan-list-item">Filing of LLP 8</li>
                  <li className="plan-list-item">ITR Filing of LLP</li>
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

export default PricingSection;
