import React from "react";
import "./CIOplans.css";

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
          <article className="po-card">
            <div>
              <div className="po-header">
                <div className="po-name">Elemental</div>
                <div className="po-old-price">₹5,999</div>
                <div className="po-price">₹3,999</div>
                <div className="po-meta">Excluding gov fee</div>
              </div>

              <div className="po-body">
                <ul className="po-list">
                  <li className="po-list-item">Search Report of Name Availability</li>
                  <li className="po-list-item">1 RUN Name Approval Certificate</li>
                  <li className="po-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="po-list-item">Certificate of Incorporation</li>
                  <li className="po-list-item">E-PAN</li>
                  <li className="po-list-item">E-TAN</li>
                  <li className="po-list-item">E-MOA</li>
                  <li className="po-list-item">E-AOA</li>
                  <li className="po-list-item">Documents for Bank Account Opening</li>
                  <li className="po-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="po-list-item">EPF Registrations</li>
                  <li className="po-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="po-footer">
              <button className="po-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="po-card">
            <div>
              <div className="po-header">
                <div className="po-name">Enriched</div>
                <div className="po-old-price">₹7,999</div>
                <div className="po-price">₹5,999</div>
                <div className="po-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="po-body">
                <ul className="po-list">
                  <li className="po-list-item">Elemental Plan Plus</li>
                  <li className="po-list-item">Share Certificate</li>
                  <li className="po-list-item">Commencement of Business</li>
                  <li className="po-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="po-footer">
              <button className="po-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="po-card">
            <div>
              <div className="po-header">
                <div className="po-name">Supreme</div>
                <div className="po-old-price">₹29,999</div>
                <div className="po-price">₹24,999</div>
                <div className="po-meta">Excluding gov fee</div>
              </div>

              <div className="po-body">
                <ul className="po-list">
                  <li className="po-list-item">Enriched Plan Plus</li>
                  <li className="po-list-item">Income tax filing of Company</li>
                  <li className="po-list-item">Preparation of Directors Report</li>
                  <li className="po-list-item">Preparation of Annual Return</li>
                  <li className="po-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="po-list-item">Preparation of List of Share Holders</li>
                  <li className="po-list-item">Preparation of Notice of AGM</li>
                  <li className="po-list-item">Preparation of Notice of BM</li>
                  <li className="po-list-item">Preparation of Extracts of AGM</li>
                  <li className="po-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="po-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="po-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="po-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="po-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="po-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="po-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="po-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="po-list-item">DIR KYC (2 Directors)</li>
                  <li className="po-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="po-list-item">Audit fees are excluded and to be paid directly to Auditor</li>
                </ul>
              </div>
            </div>

            <div className="po-footer">
              <button className="po-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
