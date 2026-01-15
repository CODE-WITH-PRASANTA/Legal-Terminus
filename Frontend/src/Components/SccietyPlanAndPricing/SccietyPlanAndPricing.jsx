import React from "react";
import "./SccietyPlanAndPricing.css";

const SocietyPlanAndPricing = () => {
  return (
    <section className="Society-pricing-section">
      <div className="Society-pricing-container">

        {/* ================= HEADER ================= */}
        <header className="Society-pricing-header">
          <h2 className="Society-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="Society-pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* ================= CARDS ================= */}
        <div className="Society-pricing-cards">

          {/* ========== ELEMENTAL ========== */}
          <article className="Society-plan-card">
            <div>
              <div className="Society-plan-header">
                <div className="Society-plan-name">Elemental</div>
                <div className="Society-plan-old-price">₹5,999</div>
                <div className="Society-plan-price">₹3,999</div>
                <div className="Society-plan-meta">Excluding gov fee</div>
              </div>

              <div className="Society-plan-body">
                <ul className="Society-plan-list">
                  <li className="Society-plan-list-item">Search Report of Name Availability</li>
                  <li className="Society-plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="Society-plan-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="Society-plan-list-item">Certificate of Societyoration</li>
                  <li className="Society-plan-list-item">E-PAN</li>
                  <li className="Society-plan-list-item">E-TAN</li>
                  <li className="Society-plan-list-item">E-MOA</li>
                  <li className="Society-plan-list-item">E-AOA</li>
                  <li className="Society-plan-list-item">Documents for Bank Account Opening</li>
                  <li className="Society-plan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="Society-plan-list-item">EPF Registrations</li>
                  <li className="Society-plan-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="Society-plan-footer">
              <button className="Society-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== ENRICHED (POPULAR) ========== */}
          <article className="Society-plan-card">
            <div>
              <div className="Society-plan-header">
                <div className="Society-plan-name">Enriched</div>
                <div className="Society-plan-old-price">₹7,999</div>
                <div className="Society-plan-price">₹5,999</div>
                <div className="Society-plan-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="Society-plan-body">
                <ul className="Society-plan-list">
                  <li className="Society-plan-list-item">Elemental Plan Plus</li>
                  <li className="Society-plan-list-item">Share Certificate</li>
                  <li className="Society-plan-list-item">Commencement of Business</li>
                  <li className="Society-plan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="Society-plan-footer">
              <button className="Society-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== SUPREME ========== */}
          <article className="Society-plan-card">
            <div>
              <div className="Society-plan-header">
                <div className="Society-plan-name">Supreme</div>
                <div className="Society-plan-old-price">₹29,999</div>
                <div className="Society-plan-price">₹24,999</div>
                <div className="Society-plan-meta">Excluding gov fee</div>
              </div>

              <div className="Society-plan-body">
                <ul className="Society-plan-list">
                  <li className="Society-plan-list-item">Enriched Plan Plus</li>
                  <li className="Society-plan-list-item">Income tax filing of Company</li>
                  <li className="Society-plan-list-item">Preparation of Directors Report</li>
                  <li className="Society-plan-list-item">Preparation of Annual Return</li>
                  <li className="Society-plan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="Society-plan-list-item">Preparation of List of Share Holders</li>
                  <li className="Society-plan-list-item">Preparation of Notice of AGM</li>
                  <li className="Society-plan-list-item">Preparation of Notice of BM</li>
                  <li className="Society-plan-list-item">Preparation of Extracts of AGM</li>
                  <li className="Society-plan-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="Society-plan-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="Society-plan-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="Society-plan-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="Society-plan-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="Society-plan-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="Society-plan-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="Society-plan-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="Society-plan-list-item">DIR KYC (2 Directors)</li>
                  <li className="Society-plan-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="Society-plan-list-item">
                    Audit fees are excluded and to be paid directly to Auditor
                  </li>
                </ul>
              </div>
            </div>

            <div className="Society-plan-footer">
              <button className="Society-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default SocietyPlanAndPricing;
