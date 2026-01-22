import React from "react";
import "./TMApplicaPlanandPricing.css";

const PricingSection = () => {
  return (
    <section className="Tm-Tm-Applica-pricing-section">
      <div className="Tm-Applica-pricing-container">
        
        {/* Upper part */}
        <header className="Tm-Applica-pricing-header">
          <h2 className="Tm-Tm-Applica-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="Tm-Applica-pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="Tm-Applica-pricing-cards">

          {/* Elemental */}
          <article className="Applica-card">
            <div>
              <div className="Applica-header">
                <div className="Applica-name">Elemental</div>
                <div className="Applica-old-price">₹5,999</div>
                <div className="Applica-price">₹3,999</div>
                <div className="Applica-meta">Excluding gov fee</div>
              </div>

              <div className="Applica-body">
                <ul className="Applica-list">
                  <li className="Applica-list-item">Search Report of Name Availability</li>
                  <li className="Applica-list-item">1 RUN Name Approval Certificate</li>
                  <li className="Applica-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="Applica-list-item">Certificate of Incorporation</li>
                  <li className="Applica-list-item">E-PAN</li>
                  <li className="Applica-list-item">E-TAN</li>
                  <li className="Applica-list-item">E-MOA</li>
                  <li className="Applica-list-item">E-AOA</li>
                  <li className="Applica-list-item">Documents for Bank Account Opening</li>
                  <li className="Applica-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="Applica-list-item">EPF Registrations</li>
                  <li className="Applica-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="Applica-footer">
              <button className="Applica-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="Applica-card">
            <div>
              <div className="Applica-header">
                <div className="Applica-name">Enriched</div>
                <div className="Applica-old-price">₹7,999</div>
                <div className="Applica-price">₹5,999</div>
                <div className="Applica-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="Applica-body">
                <ul className="Applica-list">
                  <li className="Applica-list-item">Elemental Plan Plus</li>
                  <li className="Applica-list-item">Share Certificate</li>
                  <li className="Applica-list-item">Commencement of Business</li>
                  <li className="Applica-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="Applica-footer">
              <button className="Applica-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="Applica-card">
            <div>
              <div className="Applica-header">
                <div className="Applica-name">Supreme</div>
                <div className="Applica-old-price">₹29,999</div>
                <div className="Applica-price">₹24,999</div>
                <div className="Applica-meta">Excluding gov fee</div>
              </div>

              <div className="Applica-body">
                <ul className="Applica-list">
                  <li className="Applica-list-item">Enriched Plan Plus</li>
                  <li className="Applica-list-item">Income tax filing of Company</li>
                  <li className="Applica-list-item">Preparation of Directors Report</li>
                  <li className="Applica-list-item">Preparation of Annual Return</li>
                  <li className="Applica-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="Applica-list-item">Preparation of List of Share Holders</li>
                  <li className="Applica-list-item">Preparation of Notice of AGM</li>
                  <li className="Applica-list-item">Preparation of Notice of BM</li>
                  <li className="Applica-list-item">Preparation of Extracts of AGM</li>
                  <li className="Applica-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="Applica-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="Applica-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="Applica-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="Applica-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="Applica-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="Applica-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="Applica-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="Applica-list-item">DIR KYC (2 Directors)</li>
                  <li className="Applica-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="Applica-list-item">Audit fees are excluded and to be paid directly to Auditor</li>
                </ul>
              </div>
            </div>

            <div className="Applica-footer">
              <button className="Applica-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
