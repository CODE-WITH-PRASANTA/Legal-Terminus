import React from "react";
import "./ChangetoCompanyPlanandPrice.css";

const PricingSection = () => {
  return (
    <section className="prp-price-section">
      <div className="prp-price-container">

        {/* Upper part */}
        <header className="prp-price-header">
          <h2 className="prp-price-title">CHOOSE YOUR PLAN</h2>
          <p className="prp-price-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="prp-price-cards">

          {/* Elemental */}
          <article className="prp-price-card">
            <div>
              <div className="prp-price-plan-header">
                <div className="prp-price-plan-name">Elemental</div>
                <div className="prp-price-old">₹5,999</div>
                <div className="prp-price-current">₹3,999</div>
                <div className="prp-price-meta">Excluding gov fee</div>
              </div>

              <div className="prp-price-body">
                <ul className="prp-price-list">
                  <li className="prp-price-item">Search Report of Name Availability</li>
                  <li className="prp-price-item">1 RUN Name Approval Certificate</li>
                  <li className="prp-price-item">Director Identification Number for 2 Individuals</li>
                  <li className="prp-price-item">Certificate of Incorporation</li>
                  <li className="prp-price-item">E-PAN</li>
                  <li className="prp-price-item">E-TAN</li>
                  <li className="prp-price-item">E-MOA</li>
                  <li className="prp-price-item">E-AOA</li>
                  <li className="prp-price-item">Documents for Bank Account Opening</li>
                  <li className="prp-price-item">Documents for 1st Auditor Appointment</li>
                  <li className="prp-price-item">EPF Registrations</li>
                  <li className="prp-price-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="prp-price-footer">
              <button className="prp-price-btn">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="prp-price-card">
            <div>
              <div className="prp-price-plan-header">
                <div className="prp-price-plan-name">Enriched</div>
                <div className="prp-price-old">₹7,999</div>
                <div className="prp-price-current">₹5,999</div>
                <div className="prp-price-meta">
                  Excluding gov fee <span className="prp-price-popular">(Popular)</span>
                </div>
              </div>

              <div className="prp-price-body">
                <ul className="prp-price-list">
                  <li className="prp-price-item">Elemental Plan Plus</li>
                  <li className="prp-price-item">Share Certificate</li>
                  <li className="prp-price-item">Commencement of Business</li>
                  <li className="prp-price-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="prp-price-footer">
              <button className="prp-price-btn">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="prp-price-card">
            <div>
              <div className="prp-price-plan-header">
                <div className="prp-price-plan-name">Supreme</div>
                <div className="prp-price-old">₹29,999</div>
                <div className="prp-price-current">₹24,999</div>
                <div className="prp-price-meta">Excluding gov fee</div>
              </div>

              <div className="prp-price-body">
                <ul className="prp-price-list">
                  <li className="prp-price-item">Enriched Plan Plus</li>
                  <li className="prp-price-item">Income tax filing of Company</li>
                  <li className="prp-price-item">Preparation of Directors Report</li>
                  <li className="prp-price-item">Preparation of Annual Return</li>
                  <li className="prp-price-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="prp-price-item">Preparation of List of Share Holders</li>
                  <li className="prp-price-item">Preparation of Notice of AGM</li>
                  <li className="prp-price-item">Preparation of Notice of BM</li>
                  <li className="prp-price-item">Preparation of Extracts of AGM</li>
                  <li className="prp-price-item">Filing of AOC - 4</li>
                  <li className="prp-price-item">Filing of MGT - 7</li>
                  <li className="prp-price-item">Filing of ADT - 1</li>
                  <li className="prp-price-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="prp-price-item">Minutes of General Meeting for 1st FY</li>
                  <li className="prp-price-item">Maintenance of Statutory E- Registers</li>
                  <li className="prp-price-item">DIR KYC (2 Directors)</li>
                  <li className="prp-price-item">Income Tax Filing of 2 Directors</li>
                  <li className="prp-price-item">Audit fees excluded</li>
                </ul>
              </div>
            </div>

            <div className="prp-price-footer">
              <button className="prp-price-btn">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
