import React from "react";
import "./PublictoPrivateRightPlan.css";

const PricingSection = () => {
  return (
    <section className="plt-pr-section">
      <div className="plt-pr-container">

        {/* Upper part */}
        <header className="plt-pr-header">
          <h2 className="plt-pr-title">CHOOSE YOUR PLAN</h2>
          <p className="plt-pr-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="plt-pr-cards">

          {/* Elemental */}
          <article className="plt-pr-card">
            <div>
              <div className="plt-pr-card-header">
                <div className="plt-pr-name">Elemental</div>
                <div className="plt-pr-old-price">₹5,999</div>
                <div className="plt-pr-price">₹3,999</div>
                <div className="plt-pr-meta">Excluding gov fee</div>
              </div>

              <div className="plt-pr-body">
                <ul className="plt-pr-list">
                  <li className="plt-pr-list-item">Search Report of Name Availability</li>
                  <li className="plt-pr-list-item">1 RUN Name Approval Certificate</li>
                  <li className="plt-pr-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="plt-pr-list-item">Certificate of Incorporation</li>
                  <li className="plt-pr-list-item">E-PAN</li>
                  <li className="plt-pr-list-item">E-TAN</li>
                  <li className="plt-pr-list-item">E-MOA</li>
                  <li className="plt-pr-list-item">E-AOA</li>
                  <li className="plt-pr-list-item">Documents for Bank Account Opening</li>
                  <li className="plt-pr-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="plt-pr-list-item">EPF Registrations</li>
                  <li className="plt-pr-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="plt-pr-footer">
              <button className="plt-pr-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="plt-pr-card">
            <div>
              <div className="plt-pr-card-header">
                <div className="plt-pr-name">Enriched</div>
                <div className="plt-pr-old-price">₹7,999</div>
                <div className="plt-pr-price">₹5,999</div>
                <div className="plt-pr-meta">
                  Excluding gov fee <span className="plt-pr-popular">(Popular)</span>
                </div>
              </div>

              <div className="plt-pr-body">
                <ul className="plt-pr-list">
                  <li className="plt-pr-list-item">Elemental Plan Plus</li>
                  <li className="plt-pr-list-item">Share Certificate</li>
                  <li className="plt-pr-list-item">Commencement of Business</li>
                  <li className="plt-pr-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="plt-pr-footer">
              <button className="plt-pr-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="plt-pr-card">
            <div>
              <div className="plt-pr-card-header">
                <div className="plt-pr-name">Supreme</div>
                <div className="plt-pr-old-price">₹29,999</div>
                <div className="plt-pr-price">₹24,999</div>
                <div className="plt-pr-meta">Excluding gov fee</div>
              </div>

              <div className="plt-pr-body">
                <ul className="plt-pr-list">
                  <li className="plt-pr-list-item">Enriched Plan Plus</li>
                  <li className="plt-pr-list-item">Income tax filing of Company</li>
                  <li className="plt-pr-list-item">Preparation of Directors Report</li>
                  <li className="plt-pr-list-item">Preparation of Annual Return</li>
                  <li className="plt-pr-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="plt-pr-list-item">Preparation of List of Share Holders</li>
                  <li className="plt-pr-list-item">Preparation of Notice of AGM</li>
                  <li className="plt-pr-list-item">Preparation of Notice of BM</li>
                  <li className="plt-pr-list-item">Preparation of Extracts of AGM</li>
                  <li className="plt-pr-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="plt-pr-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="plt-pr-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="plt-pr-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="plt-pr-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="plt-pr-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="plt-pr-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="plt-pr-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="plt-pr-list-item">DIR KYC (2 Directors)</li>
                  <li className="plt-pr-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="plt-pr-list-item">Audit fees are excluded and to be paid directly to Auditor</li>
                </ul>
              </div>
            </div>

            <div className="plt-pr-footer">
              <button className="plt-pr-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
