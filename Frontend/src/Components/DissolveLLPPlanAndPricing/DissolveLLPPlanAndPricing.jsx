import React from "react";
import "./DissolveLLPPlanAndPricing.css";

const DissolveLLPPlanAndPricing = () => {
  return (
    <section className="Dissllp-pricing-section">
      <div className="Dissllp-pricing-container">

        {/* ================= HEADER ================= */}
        <header className="Dissllp-pricing-header">
          <h2 className="Dissllp-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="Dissllp-pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* ================= CARDS ================= */}
        <div className="Dissllp-pricing-cards">

          {/* ========== ELEMENTAL ========== */}
          <article className="Dissllp-plan-card">
            <div>
              <div className="Dissllp-plan-header">
                <div className="Dissllp-plan-name">Elemental</div>
                <div className="Dissllp-plan-old-price">₹5,999</div>
                <div className="Dissllp-plan-price">₹3,999</div>
                <div className="Dissllp-plan-meta">Excluding gov fee</div>
              </div>

              <div className="Dissllp-plan-body">
                <ul className="Dissllp-plan-list">
                  <li className="Dissllp-plan-list-item">Search Report of Name Availability</li>
                  <li className="Dissllp-plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="Dissllp-plan-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="Dissllp-plan-list-item">Certificate of Societyoration</li>
                  <li className="Dissllp-plan-list-item">E-PAN</li>
                  <li className="Dissllp-plan-list-item">E-TAN</li>
                  <li className="Dissllp-plan-list-item">E-MOA</li>
                  <li className="Dissllp-plan-list-item">E-AOA</li>
                  <li className="Dissllp-plan-list-item">Documents for Bank Account Opening</li>
                  <li className="Dissllp-plan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="Dissllp-plan-list-item">EPF Registrations</li>
                  <li className="Dissllp-plan-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="Dissllp-plan-footer">
              <button className="Dissllp-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== ENRICHED (POPULAR) ========== */}
          <article className="Dissllp-plan-card">
            <div>
              <div className="Dissllp-plan-header">
                <div className="Dissllp-plan-name">Enriched</div>
                <div className="Dissllp-plan-old-price">₹7,999</div>
                <div className="Dissllp-plan-price">₹5,999</div>
                <div className="Dissllp-plan-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="Dissllp-plan-body">
                <ul className="Dissllp-plan-list">
                  <li className="Dissllp-plan-list-item">Elemental Plan Plus</li>
                  <li className="Dissllp-plan-list-item">Share Certificate</li>
                  <li className="Dissllp-plan-list-item">Commencement of Business</li>
                  <li className="Dissllp-plan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="Dissllp-plan-footer">
              <button className="Dissllp-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== SUPREME ========== */}
          <article className="Dissllp-plan-card">
            <div>
              <div className="Dissllp-plan-header">
                <div className="Dissllp-plan-name">Supreme</div>
                <div className="Dissllp-plan-old-price">₹29,999</div>
                <div className="Dissllp-plan-price">₹24,999</div>
                <div className="Dissllp-plan-meta">Excluding gov fee</div>
              </div>

              <div className="Dissllp-plan-body">
                <ul className="Dissllp-plan-list">
                  <li className="Dissllp-plan-list-item">Enriched Plan Plus</li>
                  <li className="Dissllp-plan-list-item">Income tax filing of Company</li>
                  <li className="Dissllp-plan-list-item">Preparation of Directors Report</li>
                  <li className="Dissllp-plan-list-item">Preparation of Annual Return</li>
                  <li className="Dissllp-plan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="Dissllp-plan-list-item">Preparation of List of Share Holders</li>
                  <li className="Dissllp-plan-list-item">Preparation of Notice of AGM</li>
                  <li className="Dissllp-plan-list-item">Preparation of Notice of BM</li>
                  <li className="Dissllp-plan-list-item">Preparation of Extracts of AGM</li>
                  <li className="Dissllp-plan-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="Dissllp-plan-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="Dissllp-plan-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="Dissllp-plan-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="Dissllp-plan-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="Dissllp-plan-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="Dissllp-plan-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="Dissllp-plan-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="Dissllp-plan-list-item">DIR KYC (2 Directors)</li>
                  <li className="Dissllp-plan-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="Dissllp-plan-list-item">
                    Audit fees are excluded and to be paid directly to Auditor
                  </li>
                </ul>
              </div>
            </div>

            <div className="Dissllp-plan-footer">
              <button className="Dissllp-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default DissolveLLPPlanAndPricing;
