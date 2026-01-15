import React from "react";
import "./ProFPLCPlanandPricing.css";

const PricingSection = () => {
  return (
    <section className="profplc-pricing-section">
      <div className="profplc-pricing-container">

        {/* Upper part */}
        <header className="profplc-pricing-header">
          <h2 className="profplc-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="profplc-pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="profplc-pricing-cards">

          {/* Elemental */}
          <article className="profplc-plan-card">
            <div>
              <div className="profplc-plan-header">
                <div className="profplc-plan-name">Elemental</div>
                <div className="profplc-plan-old-price">₹5,999</div>
                <div className="profplc-plan-price">₹3,999</div>
                <div className="profplc-plan-meta">Excluding gov fee</div>
              </div>

              <div className="profplc-plan-body">
                <ul className="profplc-plan-list">
                  <li className="profplc-plan-list-item">Search Report of Name Availability</li>
                  <li className="profplc-plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="profplc-plan-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="profplc-plan-list-item">Certificate of Incorporation</li>
                  <li className="profplc-plan-list-item">E-PAN</li>
                  <li className="profplc-plan-list-item">E-TAN</li>
                  <li className="profplc-plan-list-item">E-MOA</li>
                  <li className="profplc-plan-list-item">E-AOA</li>
                  <li className="profplc-plan-list-item">Documents for Bank Account Opening</li>
                  <li className="profplc-plan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="profplc-plan-list-item">EPF Registrations</li>
                  <li className="profplc-plan-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="profplc-plan-footer">
              <button className="profplc-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="profplc-plan-card">
            <div>
              <div className="profplc-plan-header">
                <div className="profplc-plan-name">Enriched</div>
                <div className="profplc-plan-old-price">₹7,999</div>
                <div className="profplc-plan-price">₹5,999</div>
                <div className="profplc-plan-meta">
                  Excluding gov fee <span className="profplc-popular">(Popular)</span>
                </div>
              </div>

              <div className="profplc-plan-body">
                <ul className="profplc-plan-list">
                  <li className="profplc-plan-list-item">Elemental Plan Plus</li>
                  <li className="profplc-plan-list-item">Share Certificate</li>
                  <li className="profplc-plan-list-item">Commencement of Business</li>
                  <li className="profplc-plan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="profplc-plan-footer">
              <button className="profplc-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="profplc-plan-card">
            <div>
              <div className="profplc-plan-header">
                <div className="profplc-plan-name">Supreme</div>
                <div className="profplc-plan-old-price">₹29,999</div>
                <div className="profplc-plan-price">₹24,999</div>
                <div className="profplc-plan-meta">Excluding gov fee</div>
              </div>

              <div className="profplc-plan-body">
                <ul className="profplc-plan-list">
                  <li className="profplc-plan-list-item">Enriched Plan Plus</li>
                  <li className="profplc-plan-list-item">Income tax filing of Company</li>
                  <li className="profplc-plan-list-item">Preparation of Directors Report</li>
                  <li className="profplc-plan-list-item">Preparation of Annual Return</li>
                  <li className="profplc-plan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="profplc-plan-list-item">Preparation of List of Share Holders</li>
                  <li className="profplc-plan-list-item">Preparation of Notice of AGM</li>
                  <li className="profplc-plan-list-item">Preparation of Notice of BM</li>
                  <li className="profplc-plan-list-item">Preparation of Extracts of AGM</li>
                  <li className="profplc-plan-list-item">Filing of AOC - 4</li>
                  <li className="profplc-plan-list-item">Filing of MGT - 7</li>
                  <li className="profplc-plan-list-item">Filing of ADT - 1</li>
                  <li className="profplc-plan-list-item">Minutes of Board Meeting</li>
                  <li className="profplc-plan-list-item">Minutes of General Meeting</li>
                  <li className="profplc-plan-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="profplc-plan-list-item">DIR KYC (2 Directors)</li>
                  <li className="profplc-plan-list-item">Income Tax Filing of 2 Directors</li>
                </ul>
              </div>
            </div>

            <div className="profplc-plan-footer">
              <button className="profplc-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
