import React from "react";
import "./AddPlanandPricing.css";

const AddPlanandPricing = () => {
  return (
    <section className="Add-pp-Add-pp-section">
      <div className="Add-pp-container">
        
        {/* Upper part */}
        <header className="Add-pp-header">
          <h2 className="Add-pp-Add-pp-title">CHOOSE YOUR PLAN</h2>
          <p className="Add-pp-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="Add-pp-cards">

          {/* Elemental */}
          <article className="Add-pp-card">
            <div>
              <div className="Add-pp-header">
                <div className="Add-pp-name">Elemental</div>
                <div className="Add-pp-old-price">₹5,999</div>
                <div className="Add-pp-price">₹3,999</div>
                <div className="Add-pp-meta">Excluding gov fee</div>
              </div>

              <div className="Add-pp-body">
                <ul className="Add-pp-list">
                  <li className="Add-pp-list-item">Search Report of Name Availability</li>
                  <li className="Add-pp-list-item">1 RUN Name Approval Certificate</li>
                  <li className="Add-pp-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="Add-pp-list-item">Certificate of Incorporation</li>
                  <li className="Add-pp-list-item">E-PAN</li>
                  <li className="Add-pp-list-item">E-TAN</li>
                  <li className="Add-pp-list-item">E-MOA</li>
                  <li className="Add-pp-list-item">E-AOA</li>
                  <li className="Add-pp-list-item">Documents for Bank Account Opening</li>
                  <li className="Add-pp-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="Add-pp-list-item">EPF Registrations</li>
                  <li className="Add-pp-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="Add-pp-footer">
              <button className="Add-pp-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="Add-pp-card">
            <div>
              <div className="Add-pp-header">
                <div className="Add-pp-name">Enriched</div>
                <div className="Add-pp-old-price">₹7,999</div>
                <div className="Add-pp-price">₹5,999</div>
                <div className="Add-pp-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="Add-pp-body">
                <ul className="Add-pp-list">
                  <li className="Add-pp-list-item">Elemental Plan Plus</li>
                  <li className="Add-pp-list-item">Share Certificate</li>
                  <li className="Add-pp-list-item">Commencement of Business</li>
                  <li className="Add-pp-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="Add-pp-footer">
              <button className="Add-pp-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="Add-pp-card">
            <div>
              <div className="Add-pp-header">
                <div className="Add-pp-name">Supreme</div>
                <div className="Add-pp-old-price">₹29,999</div>
                <div className="Add-pp-price">₹24,999</div>
                <div className="Add-pp-meta">Excluding gov fee</div>
              </div>

              <div className="Add-pp-body">
                <ul className="Add-pp-list">
                  <li className="Add-pp-list-item">Enriched Plan Plus</li>
                  <li className="Add-pp-list-item">Income tax filing of Company</li>
                  <li className="Add-pp-list-item">Preparation of Directors Report</li>
                  <li className="Add-pp-list-item">Preparation of Annual Return</li>
                  <li className="Add-pp-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="Add-pp-list-item">Preparation of List of Share Holders</li>
                  <li className="Add-pp-list-item">Preparation of Notice of AGM</li>
                  <li className="Add-pp-list-item">Preparation of Notice of BM</li>
                  <li className="Add-pp-list-item">Preparation of Extracts of AGM</li>
                  <li className="Add-pp-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="Add-pp-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="Add-pp-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="Add-pp-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="Add-pp-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="Add-pp-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="Add-pp-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="Add-pp-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="Add-pp-list-item">DIR KYC (2 Directors)</li>
                  <li className="Add-pp-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="Add-pp-list-item">Audit fees are excluded and to be paid directly to Auditor</li>
                </ul>
              </div>
            </div>

            <div className="Add-pp-footer">
              <button className="Add-pp-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default AddPlanandPricing;
