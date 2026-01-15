import React from "react";
import "./PartnershipLLPPlanandPricing.css";

const PartnershipLLPPlanandPricing = () => {
  return (
    <section className="llp-plan-pricing-section">
      <div className="llp-plan-pricing-container">

        {/* Upper part */}
        <header className="llp-plan-pricing-header">
          <h2 className="llp-plan-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="llp-plan-pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="llp-plan-pricing-cards">

          {/* Elemental */}
          <article className="llp-plan-card">
            <div>
              <div className="llp-plan-header">
                <div className="llp-plan-name">Elemental</div>
                <div className="llp-plan-old-price">₹5,999</div>
                <div className="llp-plan-price">₹3,999</div>
                <div className="llp-plan-meta">Excluding gov fee</div>
              </div>

              <div className="llp-plan-body">
                <ul className="llp-plan-list">
                  <li className="llp-plan-list-item">Search Report of Name Availability</li>
                  <li className="llp-plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="llp-plan-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="llp-plan-list-item">Certificate of Incorporation</li>
                  <li className="llp-plan-list-item">E-PAN</li>
                  <li className="llp-plan-list-item">E-TAN</li>
                  <li className="llp-plan-list-item">E-MOA</li>
                  <li className="llp-plan-list-item">E-AOA</li>
                  <li className="llp-plan-list-item">Documents for Bank Account Opening</li>
                  <li className="llp-plan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="llp-plan-list-item">EPF Registrations</li>
                  <li className="llp-plan-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="llp-plan-footer">
              <button className="llp-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="llp-plan-card">
            <div>
              <div className="llp-plan-header">
                <div className="llp-plan-name">Enriched</div>
                <div className="llp-plan-old-price">₹7,999</div>
                <div className="llp-plan-price">₹5,999</div>
                <div className="llp-plan-meta">
                  Excluding gov fee <span className="llp-plan-popular">(Popular)</span>
                </div>
              </div>

              <div className="llp-plan-body">
                <ul className="llp-plan-list">
                  <li className="llp-plan-list-item">Elemental Plan Plus</li>
                  <li className="llp-plan-list-item">Share Certificate</li>
                  <li className="llp-plan-list-item">Commencement of Business</li>
                  <li className="llp-plan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="llp-plan-footer">
              <button className="llp-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="llp-plan-card">
            <div>
              <div className="llp-plan-header">
                <div className="llp-plan-name">Supreme</div>
                <div className="llp-plan-old-price">₹29,999</div>
                <div className="llp-plan-price">₹24,999</div>
                <div className="llp-plan-meta">Excluding gov fee</div>
              </div>

              <div className="llp-plan-body">
                <ul className="llp-plan-list">
                  <li className="llp-plan-list-item">Enriched Plan Plus</li>
                  <li className="llp-plan-list-item">Income tax filing of Company</li>
                  <li className="llp-plan-list-item">Preparation of Directors Report</li>
                  <li className="llp-plan-list-item">Preparation of Annual Return</li>
                  <li className="llp-plan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="llp-plan-list-item">Preparation of List of Share Holders</li>
                  <li className="llp-plan-list-item">Preparation of Notice of AGM</li>
                  <li className="llp-plan-list-item">Preparation of Notice of BM</li>
                  <li className="llp-plan-list-item">Preparation of Extracts of AGM</li>
                  <li className="llp-plan-list-item">Filing of AOC - 4</li>
                  <li className="llp-plan-list-item">Filing of MGT - 7</li>
                  <li className="llp-plan-list-item">Filing of ADT - 1</li>
                  <li className="llp-plan-list-item">Minutes of Board Meeting</li>
                  <li className="llp-plan-list-item">Minutes of General Meeting</li>
                  <li className="llp-plan-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="llp-plan-list-item">DIR KYC (2 Directors)</li>
                  <li className="llp-plan-list-item">Income Tax Filing of 2 Directors</li>
                </ul>
              </div>
            </div>

            <div className="llp-plan-footer">
              <button className="llp-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PartnershipLLPPlanandPricing;
