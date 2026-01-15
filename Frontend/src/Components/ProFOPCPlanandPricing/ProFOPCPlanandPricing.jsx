import React from "react";
import "./ProFOPCPlanandPricing.css";

const PricingSection = () => {
  return (
    <section className="profopc-pricing-section">
      <div className="profopc-pricing-container">

        {/* Upper part */}
        <header className="profopc-pricing-header">
          <h2 className="profopc-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="profopc-pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="profopc-pricing-cards">

          {/* Elemental */}
          <article className="profopc-plan-card">
            <div>
              <div className="profopc-plan-header">
                <div className="profopc-plan-name">Elemental</div>
                <div className="profopc-plan-old-price">₹5,999</div>
                <div className="profopc-plan-price">₹3,999</div>
                <div className="profopc-plan-meta">Excluding gov fee</div>
              </div>

              <div className="profopc-plan-body">
                <ul className="profopc-plan-list">
                  <li className="profopc-plan-list-item">Search Report of Name Availability</li>
                  <li className="profopc-plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="profopc-plan-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="profopc-plan-list-item">Certificate of Incorporation</li>
                  <li className="profopc-plan-list-item">E-PAN</li>
                  <li className="profopc-plan-list-item">E-TAN</li>
                  <li className="profopc-plan-list-item">E-MOA</li>
                  <li className="profopc-plan-list-item">E-AOA</li>
                  <li className="profopc-plan-list-item">Documents for Bank Account Opening</li>
                  <li className="profopc-plan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="profopc-plan-list-item">EPF Registrations</li>
                  <li className="profopc-plan-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="profopc-plan-footer">
              <button className="profopc-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="profopc-plan-card">
            <div>
              <div className="profopc-plan-header">
                <div className="profopc-plan-name">Enriched</div>
                <div className="profopc-plan-old-price">₹7,999</div>
                <div className="profopc-plan-price">₹5,999</div>
                <div className="profopc-plan-meta">
                  Excluding gov fee <span className="profopc-popular">(Popular)</span>
                </div>
              </div>

              <div className="profopc-plan-body">
                <ul className="profopc-plan-list">
                  <li className="profopc-plan-list-item">Elemental Plan Plus</li>
                  <li className="profopc-plan-list-item">Share Certificate</li>
                  <li className="profopc-plan-list-item">Commencement of Business</li>
                  <li className="profopc-plan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="profopc-plan-footer">
              <button className="profopc-plan-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="profopc-plan-card">
            <div>
              <div className="profopc-plan-header">
                <div className="profopc-plan-name">Supreme</div>
                <div className="profopc-plan-old-price">₹29,999</div>
                <div className="profopc-plan-price">₹24,999</div>
                <div className="profopc-plan-meta">Excluding gov fee</div>
              </div>

              <div className="profopc-plan-body">
                <ul className="profopc-plan-list">
                  <li className="profopc-plan-list-item">Enriched Plan Plus</li>
                  <li className="profopc-plan-list-item">Income tax filing of Company</li>
                  <li className="profopc-plan-list-item">Preparation of Directors Report</li>
                  <li className="profopc-plan-list-item">Preparation of Annual Return</li>
                  <li className="profopc-plan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="profopc-plan-list-item">Preparation of List of Share Holders</li>
                  <li className="profopc-plan-list-item">Preparation of Notice of AGM</li>
                  <li className="profopc-plan-list-item">Preparation of Notice of BM</li>
                  <li className="profopc-plan-list-item">Preparation of Extracts of AGM</li>
                  <li className="profopc-plan-list-item">Filing of AOC - 4</li>
                  <li className="profopc-plan-list-item">Filing of MGT - 7</li>
                  <li className="profopc-plan-list-item">Filing of ADT - 1</li>
                  <li className="profopc-plan-list-item">Minutes of Board Meeting</li>
                  <li className="profopc-plan-list-item">Minutes of General Meeting</li>
                  <li className="profopc-plan-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="profopc-plan-list-item">DIR KYC (2 Directors)</li>
                  <li className="profopc-plan-list-item">Income Tax Filing of 2 Directors</li>
                </ul>
              </div>
            </div>

            <div className="profopc-plan-footer">
              <button className="profopc-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
