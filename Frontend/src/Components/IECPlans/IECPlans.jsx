import "./IECPlans.css";

const IECPlans = () => {
  return (
    <section className="iec-pricing-section">
      <div className="iecpricing-container">
        
        {/* Upper part */}
        <header className="iecpricing-header">
          <h2 className="iecpricing-title">CHOOSE YOUR PLAN</h2>
          <p className="iecpricing-subtitle">
            Register your IEC code with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="iecpricing-cards">

          {/* Elemental */}
          <article className="iecplan-card">
            <div>
              <div className="iecplan-header">
                <div className="iecplan-name">Elemental</div>
                <div className="iecplan-old-price">₹5,999</div>
                <div className="iecplan-price">₹3,999</div>
                <div className="iecplan-meta">Excluding gov fee</div>
              </div>

              <div className="iecplan-body">
                <ul className="iecplan-list">
                  <li className="iecplan-list-item">IEC Registration Application Filing</li>
                  <li className="iecplan-list-item">Assistance in DGFT Documentation</li>
                  <li className="iecplan-list-item">Certificate of IEC Code Issuance</li>
                  <li className="iecplan-list-item">PAN & Business Details Verification</li>
                  <li className="iecplan-list-item">Email & Mobile Verification Support</li>
                  <li className="iecplan-list-item">Lifetime Valid IEC Certificate</li>
                </ul>
              </div>
            </div>

            <div className="iecplan-footer">
              <button className="iecplan-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="iecplan-card">
            <div>
              <div className="iecplan-header">
                <div className="iecplan-name">Enriched</div>
                <div className="iecplan-old-price">₹7,999</div>
                <div className="iecplan-price">₹5,999</div>
                <div className="iecplan-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="iecplan-body">
                <ul className="iecplan-list">
                  <li className="iecplan-list-item">Elemental Plan Plus</li>
                  <li className="iecplan-list-item">Business Consultancy Support</li>
                  <li className="iecplan-list-item">GST Registration Assistance</li>
                  <li className="iecplan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="iecplan-footer">
              <button className="iecplan-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="iecplan-card">
            <div>
              <div className="iecplan-header">
                <div className="iecplan-name">Supreme</div>
                <div className="iecplan-old-price">₹29,999</div>
                <div className="iecplan-price">₹24,999</div>
                <div className="iecplan-meta">Excluding gov fee</div>
              </div>

              <div className="iecplan-body">
                <ul className="iecplan-list">
                  <li className="iecplan-list-item">Enriched Plan Plus</li>
                  <li className="iecplan-list-item">Annual IEC Renewal & Modifications</li>
                  <li className="iecplan-list-item">Import/Export Compliance Advisory</li>
                  <li className="iecplan-list-item">Business Setup Support for Export</li>
                  <li className="iecplan-list-item">Priority Customer Assistance</li>
                  <li className="iecplan-list-item">Dedicated Relationship Manager</li>
                </ul>
              </div>
            </div>

            <div className="iecplan-footer">
              <button className="iecplan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default IECPlans;
