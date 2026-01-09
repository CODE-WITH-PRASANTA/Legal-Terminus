import "./OPCPlans.css";

const OPCPlan = () => {
  return (
    <section className="opc-pricing-section">
      <div className="opcpricing-container">
        
        {/* Upper part */}
        <header className="opcpricing-header">
          <h2 className="opcpricing-title">CHOOSE YOUR PLAN</h2>
          <p className="opcpricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="opcpricing-cards">

          {/* Elemental */}
          <article className="opcplan-card">
            <div>
              <div className="opcplan-header">
                <div className="opcplan-name">Elemental</div>
                <div className="opcplan-old-price">₹5,999</div>
                <div className="opcplan-price">₹3,999</div>
                <div className="opcplan-meta">Excluding gov fee</div>
              </div>

              <div className="opcplan-body">
                <ul className="opcplan-list">
                  <li className="opcplan-list-item">Search Report of Name Availability</li>
                  <li className="opcplan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="opcplan-list-item">Director Identification Number for 2 Individuals</li>
                  <li className="opcplan-list-item">Certificate of Incorporation</li>
                  <li className="opcplan-list-item">E-PAN</li>
                  <li className="opcplan-list-item">E-TAN</li>
                  <li className="opcplan-list-item">E-MOA</li>
                  <li className="opcplan-list-item">E-AOA</li>
                  <li className="opcplan-list-item">Documents for Bank Account Opening</li>
                  <li className="opcplan-list-item">Documents for 1st Auditor Appointment</li>
                  <li className="opcplan-list-item">EPF Registrations</li>
                  <li className="opcplan-list-item">ESI Registrations</li>
                </ul>
              </div>
            </div>

            <div className="opcplan-footer">
              <button className="opcplan-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="opcplan-card">
            <div>
              <div className="opcplan-header">
                <div className="opcplan-name">Enriched</div>
                <div className="opcplan-old-price">₹7,999</div>
                <div className="opcplan-price">₹5,999</div>
                <div className="opcplan-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="opcplan-body">
                <ul className="opcplan-list">
                  <li className="opcplan-list-item">Elemental Plan Plus</li>
                  <li className="opcplan-list-item">Share Certificate</li>
                  <li className="opcplan-list-item">Commencement of Business</li>
                  <li className="opcplan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="opcplan-footer">
              <button className="opcplan-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="opcplan-card">
            <div>
              <div className="opcplan-header">
                <div className="opcplan-name">Supreme</div>
                <div className="opcplan-old-price">₹29,999</div>
                <div className="opcplan-price">₹24,999</div>
                <div className="opcplan-meta">Excluding gov fee</div>
              </div>

              <div className="opcplan-body">
                <ul className="opcplan-list">
                  <li className="opcplan-list-item">Enriched Plan Plus</li>
                  <li className="opcplan-list-item">Income tax filing of Company</li>
                  <li className="opcplan-list-item">Preparation of Directors Report</li>
                  <li className="opcplan-list-item">Preparation of Annual Return</li>
                  <li className="opcplan-list-item">Preparation of Auditor Appointment Paperwork</li>
                  <li className="opcplan-list-item">Preparation of List of Share Holders</li>
                  <li className="opcplan-list-item">Preparation of Notice of AGM</li>
                  <li className="opcplan-list-item">Preparation of Notice of BM</li>
                  <li className="opcplan-list-item">Preparation of Extracts of AGM</li>
                  <li className="opcplan-list-item">Filing of AOC - 4 (Financial Statements)</li>
                  <li className="opcplan-list-item">Filing of MGT - 7 (Annual Return)</li>
                  <li className="opcplan-list-item">Filing of ADT - 1 (Auditor Appointment)</li>
                  <li className="opcplan-list-item">Minutes of Board Meeting for 1st FY</li>
                  <li className="opcplan-list-item">Minutes of General Meeting for 1st FY</li>
                  <li className="opcplan-list-item">Maintenance of Statutory E- Registers</li>
                  <li className="opcplan-list-item">Filing of DPT - 3 Annual (If Applicable)</li>
                  <li className="opcplan-list-item">Filing of MSME - 1 (If Applicable) for 1st FY</li>
                  <li className="opcplan-list-item">DIR KYC (2 Directors)</li>
                  <li className="opcplan-list-item">Income Tax Filing of 2 Directors</li>
                  <li className="opcplan-list-item">Audit fees are excluded and to be paid directly to Auditor</li>
                </ul>
              </div>
            </div>

            <div className="opcplan-footer">
              <button className="opcplan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default OPCPlan;
