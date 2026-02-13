import React from "react";
import "./PublicltdRightPlan.css";

const PricingSection = () => {
  return (
    <section className="pvtltd-pricing-section">
      <div className="pricing-container">
        
        {/* Upper part */}
        <header className="pricing-header">
          <h2 className="PvtLtd-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="pricing-cards">

          {/* Elemental */}
          <article className="plan-card">
            <div>
              <div className="plan-header">
                <div className="plan-name">Elemental</div>
                <div className="plan-price">₹24,999</div>
                <div className="plan-meta">Excluding gov fee</div>
              </div>

              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="plan-list-item">DIN for 3 Individuals</li>
                  <li className="plan-list-item">List Item DSC for 7 Individuals</li>
                  <li className="plan-list-item">Certificate of Incorporation</li>
                  <li className="plan-list-item">E-PAN</li>
                  <li className="plan-list-item">E-TAN</li>
                  <li className="plan-list-item">E-MOA</li>
                  <li className="plan-list-item">E-AOA</li>
                  <li className="plan-list-item">Documents for Bank Account Opening</li>
                  <li className="plan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="plan-list-item">EPF Registrations</li>
                  <li className="plan-list-item">ESI Registrations</li>
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
                <div className="plan-price">₹27,999</div>
                <div className="plan-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">Elemental Plan Plus</li>
                  <li className="plan-list-item">UDYAM Registration</li>
                  <li className="plan-list-item">Share Certificate</li>
                  <li className="plan-list-item">Commencement of Business</li>
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
                <div className="plan-price">₹39,999</div>
                <div className="plan-meta">Excluding gov fee</div>
              </div>

              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">Enriched Plan Plus</li>
                  <li className="plan-list-item">ITR Filing of 2 Directors</li>
                  <li className="plan-list-item">ITR Filing of Company</li>
                  <li className="plan-list-item">Preparation of Directors Report</li>
                  <li className="plan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="plan-list-item">Preparation of List of Share Holders</li>
                  <li className="plan-list-item">Preparation of Extracts of AGM</li>
                  <li className="plan-list-item">Preparation of Notice of BM</li>
                  <li className="plan-list-item">Preparation of Notice of AGM</li>
                  <li className="plan-list-item">Preparation and filing of AOC-4 (Financial Statements)</li>
                  <li className="plan-list-item">Preparation and filing of MGT-7 (Annual Return)</li>
                  <li className="plan-list-item">Filing of ADT-1 (Auditor Appointment)</li>
                  <li className="plan-list-item">Minutes of BM for 1st year</li>
                  <li className="plan-list-item">Minutes of AGM for 1st year</li>
                  <li className="plan-list-item">Maintenance of Statutory E-Registers E- Registers</li>
                  <li className="plan-list-item">DIR KYC - 2 Directors</li>
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
