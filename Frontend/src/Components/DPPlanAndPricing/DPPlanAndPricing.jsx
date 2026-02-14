import React from "react";
import "./DPPlanAndPricing.css";

const DPPlanAndPricing = () => {
  return (
    <section className="DP-pricing-section">
      <div className="DP-pricing-container">

        {/* ================= HEADER ================= */}
        <header className="DP-pricing-header">
          <h2 className="DP-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="DP-pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* ================= CARDS ================= */}
        <div className="DP-pricing-cards">

          {/* ========== ELEMENTAL ========== */}
          <article className="DP-plan-card">
            <div>
              <div className="DP-plan-header">
                <div className="DP-plan-name">Elemental</div>
                <div className="DP-plan-old-price">₹5,999</div>
                <div className="DP-plan-price">₹3,999</div>
                <div className="DP-plan-meta">Excluding gov fee</div>
              </div>

              <div className="DP-plan-body">
                <ul className="DP-plan-list">
                  <li className="DP-plan-list-item">Search Report of Name Availability</li>
                  <li className="DP-plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="DP-plan-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="DP-plan-list-item">Certificate of Societyoration</li>
                  <li className="DP-plan-list-item">E-PAN</li>
                  <li className="DP-plan-list-item">E-TAN</li>
                  <li className="DP-plan-list-item">E-MOA</li>
                  <li className="DP-plan-list-item">E-AOA</li>
                  <li className="DP-plan-list-item">Documents for Bank Account Opening</li>
                  <li className="DP-plan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="DP-plan-list-item">EPF Registrations</li>
                  <li className="DP-plan-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="DP-plan-footer">
              <button className="DP-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== ENRICHED (POPULAR) ========== */}
          <article className="DP-plan-card">
            <div>
              <div className="DP-plan-header">
                <div className="DP-plan-name">Enriched</div>
                <div className="DP-plan-old-price">₹7,999</div>
                <div className="DP-plan-price">₹5,999</div>
                <div className="DP-plan-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="DP-plan-body">
                <ul className="DP-plan-list">
                  <li className="DP-plan-list-item">Elemental Plan Plus</li>
                  <li className="DP-plan-list-item">Share Certificate</li>
                  <li className="DP-plan-list-item">Commencement of Business</li>
                  <li className="DP-plan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="DP-plan-footer">
              <button className="DP-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== SUPREME ========== */}
          <article className="DP-plan-card">
            <div>
              <div className="DP-plan-header">
                <div className="DP-plan-name">Supreme</div>
                <div className="DP-plan-old-price">₹29,999</div>
                <div className="DP-plan-price">₹24,999</div>
                <div className="DP-plan-meta">Excluding gov fee</div>
              </div>

              <div className="DP-plan-body">
                <ul className="DP-plan-list">
                  <li className="DP-plan-list-item">Enriched Plan Plus</li>
                  <li className="DP-plan-list-item">Income tax filing of Company</li>
                  <li className="DP-plan-list-item">Preparation of Directors Report</li>
                  <li className="DP-plan-list-item">Preparation of Annual Return</li>
                  <li className="DP-plan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="DP-plan-list-item">Preparation of List of Share Holders</li>
                  <li className="DP-plan-list-item">Preparation of Notice of AGM</li>
                  <li className="DP-plan-list-item">Preparation of Notice of BM</li>
                  <li className="DP-plan-list-item">Preparation of Extracts of AGM</li>
                  <li className="DP-plan-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="DP-plan-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="DP-plan-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="DP-plan-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="DP-plan-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="DP-plan-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="DP-plan-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="DP-plan-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="DP-plan-list-item">DIR KYC (2 Directors)</li>
                  <li className="DP-plan-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="DP-plan-list-item">
                    Audit fees are excluded and to be paid directly to Auditor
                  </li>
                </ul>
              </div>
            </div>

            <div className="DP-plan-footer">
              <button className="DP-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default DPPlanAndPricing;
