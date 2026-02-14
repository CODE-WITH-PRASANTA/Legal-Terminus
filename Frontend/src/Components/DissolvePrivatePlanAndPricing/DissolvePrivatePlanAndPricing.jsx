import React from "react";
import "./DissolvePrivatePlanAndPricing.css";

const DissolvePrivatePlanAndPricing = () => {
  return (
    <section className="DissolvePrivate-pricing-section">
      <div className="DissolvePrivate-pricing-container">

        {/* ================= HEADER ================= */}
        <header className="DissolvePrivate-pricing-header">
          <h2 className="DissolvePrivate-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="DissolvePrivate-pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* ================= CARDS ================= */}
        <div className="DissolvePrivate-pricing-cards">

          {/* ========== ELEMENTAL ========== */}
          <article className="DissolvePrivate-plan-card">
            <div>
              <div className="DissolvePrivate-plan-header">
                <div className="DissolvePrivate-plan-name">Elemental</div>
                <div className="DissolvePrivate-plan-old-price">₹5,999</div>
                <div className="DissolvePrivate-plan-price">₹3,999</div>
                <div className="DissolvePrivate-plan-meta">Excluding gov fee</div>
              </div>

              <div className="DissolvePrivate-plan-body">
                <ul className="DissolvePrivate-plan-list">
                  <li className="DissolvePrivate-plan-list-item">Search Report of Name Availability</li>
                  <li className="DissolvePrivate-plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="DissolvePrivate-plan-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="DissolvePrivate-plan-list-item">Certificate of Incorporation</li>
                  <li className="DissolvePrivate-plan-list-item">E-PAN</li>
                  <li className="DissolvePrivate-plan-list-item">E-TAN</li>
                  <li className="DissolvePrivate-plan-list-item">E-MOA</li>
                  <li className="DissolvePrivate-plan-list-item">E-AOA</li>
                  <li className="DissolvePrivate-plan-list-item">Documents for Bank Account Opening</li>
                  <li className="DissolvePrivate-plan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="DissolvePrivate-plan-list-item">EPF Registrations</li>
                  <li className="DissolvePrivate-plan-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="DissolvePrivate-plan-footer">
              <button className="DissolvePrivate-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== ENRICHED (POPULAR) ========== */}
          <article className="DissolvePrivate-plan-card">
            <div>
              <div className="DissolvePrivate-plan-header">
                <div className="DissolvePrivate-plan-name">Enriched</div>
                <div className="DissolvePrivate-plan-old-price">₹7,999</div>
                <div className="DissolvePrivate-plan-price">₹5,999</div>
                <div className="DissolvePrivate-plan-meta">
                  Excluding gov fee <span className="DissolvePrivate-popular">(Popular)</span>
                </div>
              </div>

              <div className="DissolvePrivate-plan-body">
                <ul className="DissolvePrivate-plan-list">
                  <li className="DissolvePrivate-plan-list-item">Elemental Plan Plus</li>
                  <li className="DissolvePrivate-plan-list-item">Share Certificate</li>
                  <li className="DissolvePrivate-plan-list-item">Commencement of Business</li>
                  <li className="DissolvePrivate-plan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="DissolvePrivate-plan-footer">
              <button className="DissolvePrivate-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== SUPREME ========== */}
          <article className="DissolvePrivate-plan-card">
            <div>
              <div className="DissolvePrivate-plan-header">
                <div className="DissolvePrivate-plan-name">Supreme</div>
                <div className="DissolvePrivate-plan-old-price">₹29,999</div>
                <div className="DissolvePrivate-plan-price">₹24,999</div>
                <div className="DissolvePrivate-plan-meta">Excluding gov fee</div>
              </div>

              <div className="DissolvePrivate-plan-body">
                <ul className="DissolvePrivate-plan-list">
                  <li className="DissolvePrivate-plan-list-item">Enriched Plan Plus</li>
                  <li className="DissolvePrivate-plan-list-item">Income tax filing of Company</li>
                  <li className="DissolvePrivate-plan-list-item">Preparation of Directors Report</li>
                  <li className="DissolvePrivate-plan-list-item">Preparation of Annual Return</li>
                  <li className="DissolvePrivate-plan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="DissolvePrivate-plan-list-item">Preparation of List of Share Holders</li>
                  <li className="DissolvePrivate-plan-list-item">Preparation of Notice of AGM</li>
                  <li className="DissolvePrivate-plan-list-item">Preparation of Notice of BM</li>
                  <li className="DissolvePrivate-plan-list-item">Preparation of Extracts of AGM</li>
                  <li className="DissolvePrivate-plan-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="DissolvePrivate-plan-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="DissolvePrivate-plan-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="DissolvePrivate-plan-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="DissolvePrivate-plan-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="DissolvePrivate-plan-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="DissolvePrivate-plan-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="DissolvePrivate-plan-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="DissolvePrivate-plan-list-item">DIR KYC (2 Directors)</li>
                  <li className="DissolvePrivate-plan-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="DissolvePrivate-plan-list-item">
                    Audit fees are excluded and to be paid directly to Auditor
                  </li>
                </ul>
              </div>
            </div>

            <div className="DissolvePrivate-plan-footer">
              <button className="DissolvePrivate-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default DissolvePrivatePlanAndPricing;
