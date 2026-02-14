import React from "react";
import "./TrademarktoOppositionPlan.css";

const TradeLicensePlans = () => {
  return (
    <section className="tpl-pricing-section">
      <div className="tpl-container">

        {/* Header Section */}
        <header className="tpl-header">
          <h2 className="tpl-title">CHOOSE YOUR PLAN</h2>
          <p className="tpl-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="tpl-cards">

          {/* ===== Elemental Plan ===== */}
          <article className="tpl-card">
            <div>
              <div className="tpl-card-header">
                <div className="tpl-name">Elemental</div>
                <div className="tpl-old-price">₹5,999</div>
                <div className="tpl-price">₹3,999</div>
                <div className="tpl-meta">Excluding gov fee</div>
              </div>

              <div className="tpl-body">
                <ul className="tpl-list">
                  <li className="tpl-list-item">Search Report of Name Availability</li>
                  <li className="tpl-list-item">1 RUN Name Approval Certificate</li>
                  <li className="tpl-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="tpl-list-item">Certificate of Incorporation</li>
                  <li className="tpl-list-item">E-PAN</li>
                  <li className="tpl-list-item">E-TAN</li>
                  <li className="tpl-list-item">E-MOA</li>
                  <li className="tpl-list-item">E-AOA</li>
                  <li className="tpl-list-item">Documents for Bank Account Opening</li>
                  <li className="tpl-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="tpl-list-item">EPF Registrations</li>
                  <li className="tpl-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="tpl-footer">
              <button className="tpl-button">Buy Now</button>
            </div>
          </article>

          {/* ===== Enriched Plan ===== */}
          <article className="tpl-card">
            <div>
              <div className="tpl-card-header">
                <div className="tpl-name">Enriched</div>
                <div className="tpl-old-price">₹7,999</div>
                <div className="tpl-price">₹5,999</div>
                <div className="tpl-meta">
                  Excluding gov fee <span className="tpl-popular">(Popular)</span>
                </div>
              </div>

              <div className="tpl-body">
                <ul className="tpl-list">
                  <li className="tpl-list-item">Elemental Plan Plus</li>
                  <li className="tpl-list-item">Share Certificate</li>
                  <li className="tpl-list-item">Commencement of Business</li>
                  <li className="tpl-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="tpl-footer">
              <button className="tpl-button">Buy Now</button>
            </div>
          </article>

          {/* ===== Supreme Plan ===== */}
          <article className="tpl-card">
            <div>
              <div className="tpl-card-header">
                <div className="tpl-name">Supreme</div>
                <div className="tpl-old-price">₹29,999</div>
                <div className="tpl-price">₹24,999</div>
                <div className="tpl-meta">Excluding gov fee</div>
              </div>

              <div className="tpl-body">
                <ul className="tpl-list">
                  <li className="tpl-list-item">Enriched Plan Plus</li>
                  <li className="tpl-list-item">Income tax filing of Company</li>
                  <li className="tpl-list-item">Preparation of Directors Report</li>
                  <li className="tpl-list-item">Preparation of Annual Return</li>
                  <li className="tpl-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="tpl-list-item">Preparation of List of Share Holders</li>
                  <li className="tpl-list-item">Preparation of Notice of AGM</li>
                  <li className="tpl-list-item">Preparation of Notice of BM</li>
                  <li className="tpl-list-item">Preparation of Extracts of AGM</li>
                  <li className="tpl-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="tpl-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="tpl-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="tpl-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="tpl-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="tpl-list-item">Maintenance of Statutory E-Registers</li>
                  <li className="tpl-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="tpl-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="tpl-list-item">DIR KYC (2 Directors)</li>
                  <li className="tpl-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="tpl-list-item">Audit fees are excluded and to be paid directly to Auditor</li>
                </ul>
              </div>
            </div>

            <div className="tpl-footer">
              <button className="tpl-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default TradeLicensePlans;
