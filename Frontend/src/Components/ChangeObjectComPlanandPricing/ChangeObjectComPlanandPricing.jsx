import React from "react";
import "./ChangeObjectComPlanandPricing.css";

const ChangeObjectComPlanandPricing = () => {
  return (
    <section className="Change-ob-Pp-section">
      <div className="Change-ob-Pp-container">
        
        {/* Upper part */}
        <header className="Change-ob-Pp-header">
          <h2 className="Change-ob-Pp-title">CHOOSE YOUR PLAN</h2>
          <p className="Change-ob-Pp-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="Change-ob-Pp-cards">

          {/* Elemental */}
          <article className="Change-ob-Pp-plan-card">
            <div>
              <div className="Change-ob-Pp-plan-header">
                <div className="Change-ob-Pp-plan-name">Elemental</div>
                <div className="Change-ob-Pp-plan-old-price">₹5,999</div>
                <div className="Change-ob-Pp-plan-price">₹3,999</div>
                <div className="Change-ob-Pp-plan-meta">Excluding gov fee</div>
              </div>

              <div className="Change-ob-Pp-plan-body">
                <ul className="Change-ob-Pp-plan-list">
                  <li className="Change-ob-Pp-plan-list-item">Search Report of Name Availability</li>
                  <li className="Change-ob-Pp-plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="Change-ob-Pp-plan-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="Change-ob-Pp-plan-list-item">Certificate of Incorporation</li>
                  <li className="Change-ob-Pp-plan-list-item">E-PAN</li>
                  <li className="Change-ob-Pp-plan-list-item">E-TAN</li>
                  <li className="Change-ob-Pp-plan-list-item">E-MOA</li>
                  <li className="Change-ob-Pp-plan-list-item">E-AOA</li>
                  <li className="Change-ob-Pp-plan-list-item">Documents for Bank Account Opening</li>
                  <li className="Change-ob-Pp-plan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="Change-ob-Pp-plan-list-item">EPF Registrations</li>
                  <li className="Change-ob-Pp-plan-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="Change-ob-Pp-plan-footer">
              <button className="Change-ob-Pp-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="Change-ob-Pp-plan-card">
            <div>
              <div className="Change-ob-Pp-plan-header">
                <div className="Change-ob-Pp-plan-name">Enriched</div>
                <div className="Change-ob-Pp-plan-old-price">₹7,999</div>
                <div className="Change-ob-Pp-plan-price">₹5,999</div>
                <div className="Change-ob-Pp-plan-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="Change-ob-Pp-plan-body">
                <ul className="Change-ob-Pp-plan-list">
                  <li className="Change-ob-Pp-plan-list-item">Elemental Plan Plus</li>
                  <li className="Change-ob-Pp-plan-list-item">Share Certificate</li>
                  <li className="Change-ob-Pp-plan-list-item">Commencement of Business</li>
                  <li className="Change-ob-Pp-plan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="Change-ob-Pp-plan-footer">
              <button className="Change-ob-Pp-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="Change-ob-Pp-plan-card">
            <div>
              <div className="Change-ob-Pp-plan-header">
                <div className="Change-ob-Pp-plan-name">Supreme</div>
                <div className="Change-ob-Pp-plan-old-price">₹29,999</div>
                <div className="Change-ob-Pp-plan-price">₹24,999</div>
                <div className="Change-ob-Pp-plan-meta">Excluding gov fee</div>
              </div>

              <div className="Change-ob-Pp-plan-body">
                <ul className="Change-ob-Pp-plan-list">
                  <li className="Change-ob-Pp-plan-list-item">Enriched Plan Plus</li>
                  <li className="Change-ob-Pp-plan-list-item">Income tax filing of Company</li>
                  <li className="Change-ob-Pp-plan-list-item">Preparation of Directors Report</li>
                  <li className="Change-ob-Pp-plan-list-item">Preparation of Annual Return</li>
                  <li className="Change-ob-Pp-plan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="Change-ob-Pp-plan-list-item">Preparation of List of Share Holders</li>
                  <li className="Change-ob-Pp-plan-list-item">Preparation of Notice of AGM</li>
                  <li className="Change-ob-Pp-plan-list-item">Preparation of Notice of BM</li>
                  <li className="Change-ob-Pp-plan-list-item">Preparation of Extracts of AGM</li>
                  <li className="Change-ob-Pp-plan-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="Change-ob-Pp-plan-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="Change-ob-Pp-plan-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="Change-ob-Pp-plan-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="Change-ob-Pp-plan-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="Change-ob-Pp-plan-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="Change-ob-Pp-plan-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="Change-ob-Pp-plan-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="Change-ob-Pp-plan-list-item">DIR KYC (2 Directors)</li>
                  <li className="Change-ob-Pp-plan-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="Change-ob-Pp-plan-list-item">Audit fees are excluded and to be paid directly to Auditor</li>
                </ul>
              </div>
            </div>

            <div className="Change-ob-Pp-plan-footer">
              <button className="Change-ob-Pp-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default ChangeObjectComPlanandPricing;
