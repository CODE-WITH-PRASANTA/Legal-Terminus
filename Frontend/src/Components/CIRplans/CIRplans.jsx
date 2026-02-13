import React from "react";
import "./CIRplans.css";

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
          <article className="pl-card">
            <div>
              <div className="pl-header">
                <div className="pl-name">Elemental</div>
                <div className="pl-old-price">₹5,999</div>
                <div className="pl-price">₹3,999</div>
                <div className="pl-meta">Excluding gov fee</div>
              </div>

              <div className="pl-body">
                <ul className="pl-list">
                  <li className="pl-list-item">Search Report of Name Availability</li>
                  <li className="pl-list-item">1 RUN Name Approval Certificate</li>
                  <li className="pl-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="pl-list-item">Certificate of Incorporation</li>
                  <li className="pl-list-item">E-PAN</li>
                  <li className="pl-list-item">E-TAN</li>
                  <li className="pl-list-item">E-MOA</li>
                  <li className="pl-list-item">E-AOA</li>
                  <li className="pl-list-item">Documents for Bank Account Opening</li>
                  <li className="pl-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="pl-list-item">EPF Registrations</li>
                  <li className="pl-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="pl-footer">
              <button className="pl-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="pl-card">
            <div>
              <div className="pl-header">
                <div className="pl-name">Enriched</div>
                <div className="pl-old-price">₹7,999</div>
                <div className="pl-price">₹5,999</div>
                <div className="pl-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="pl-body">
                <ul className="pl-list">
                  <li className="pl-list-item">Elemental Plan Plus</li>
                  <li className="pl-list-item">Share Certificate</li>
                  <li className="pl-list-item">Commencement of Business</li>
                  <li className="pl-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="pl-footer">
              <button className="pl-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="pl-card">
            <div>
              <div className="pl-header">
                <div className="pl-name">Supreme</div>
                <div className="pl-old-price">₹29,999</div>
                <div className="pl-price">₹24,999</div>
                <div className="pl-meta">Excluding gov fee</div>
              </div>

              <div className="pl-body">
                <ul className="pl-list">
                  <li className="pl-list-item">Enriched Plan Plus</li>
                  <li className="pl-list-item">Income tax filing of Company</li>
                  <li className="pl-list-item">Preparation of Directors Report</li>
                  <li className="pl-list-item">Preparation of Annual Return</li>
                  <li className="pl-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="pl-list-item">Preparation of List of Share Holders</li>
                  <li className="pl-list-item">Preparation of Notice of AGM</li>
                  <li className="pl-list-item">Preparation of Notice of BM</li>
                  <li className="pl-list-item">Preparation of Extracts of AGM</li>
                  <li className="pl-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="pl-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="pl-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="pl-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="pl-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="pl-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="pl-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="pl-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="pl-list-item">DIR KYC (2 Directors)</li>
                  <li className="pl-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="pl-list-item">Audit fees are excluded and to be paid directly to Auditor</li>
                </ul>
              </div>
            </div>

            <div className="pl-footer">
              <button className="pl-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
