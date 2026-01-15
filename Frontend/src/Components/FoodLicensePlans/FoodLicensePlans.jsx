import "./FoodLicensePlans.css";

const FoodLicensePlans = () => {
  return (
    <section className="foodlicense-pricing-section">
      <div className="foodlicensepricing-container">
        
        {/* Upper part */}
        <header className="foodlicensepricing-header">
          <h2 className="foodlicensepricing-title">CHOOSE YOUR PLAN</h2>
          <p className="foodlicensepricing-subtitle">
            Register your Food License with pocket-friendly prices
          </p>
        </header>

        {/* Cards */}
        <div className="foodlicensepricing-cards">

          {/* Elemental */}
          <article className="foodlicenseplan-card">
            <div>
              <div className="foodlicenseplan-header">
                <div className="foodlicenseplan-name">Elemental</div>
                <div className="foodlicenseplan-old-price">₹5,999</div>
                <div className="foodlicenseplan-price">₹3,999</div>
                <div className="foodlicenseplan-meta">Excluding gov fee</div>
              </div>

              <div className="foodlicenseplan-body">
                <ul className="foodlicenseplan-list">
                  <li className="foodlicenseplan-list-item">FSSAI Registration Application Filing</li>
                  <li className="foodlicenseplan-list-item">Assistance in Documentation</li>
                  <li className="foodlicenseplan-list-item">Certificate of FSSAI License Issuance</li>
                  <li className="foodlicenseplan-list-item">PAN & Business Details Verification</li>
                  <li className="foodlicenseplan-list-item">Email & Mobile Verification Support</li>
                  <li className="foodlicenseplan-list-item">Lifetime Valid FSSAI License</li>
                </ul>
              </div>
            </div>

            <div className="foodlicenseplan-footer">
              <button className="foodlicenseplan-button">Buy Now</button>
            </div>
          </article>

          {/* Enriched */}
          <article className="foodlicenseplan-card">
            <div>
              <div className="foodlicenseplan-header">
                <div className="foodlicenseplan-name">Enriched</div>
                <div className="foodlicenseplan-old-price">₹7,999</div>
                <div className="foodlicenseplan-price">₹5,999</div>
                <div className="foodlicenseplan-meta">
                  Excluding gov fee <span className="popular">(Popular)</span>
                </div>
              </div>

              <div className="foodlicenseplan-body">
                <ul className="foodlicenseplan-list">
                  <li className="foodlicenseplan-list-item">Elemental Plan Plus</li>
                  <li className="foodlicenseplan-list-item">Business Consultancy Support</li>
                  <li className="foodlicenseplan-list-item">GST Registration Assistance</li>
                  <li className="foodlicenseplan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="foodlicenseplan-footer">
              <button className="foodlicenseplan-button">Buy Now</button>
            </div>
          </article>

          {/* Supreme */}
          <article className="foodlicenseplan-card">
            <div>
              <div className="foodlicenseplan-header">
                <div className="foodlicenseplan-name">Supreme</div>
                <div className="foodlicenseplan-old-price">₹29,999</div>
                <div className="foodlicenseplan-price">₹24,999</div>
                <div className="foodlicenseplan-meta">Excluding gov fee</div>
              </div>

              <div className="foodlicenseplan-body">
                <ul className="foodlicenseplan-list">
                  <li className="foodlicenseplan-list-item">Enriched Plan Plus</li>
                  <li className="foodlicenseplan-list-item">Annual FSSAI Renewal & Modifications</li>
                  <li className="foodlicenseplan-list-item">Food Compliance Advisory</li>
                  <li className="foodlicenseplan-list-item">Business Setup Support for Food Units</li>
                  <li className="foodlicenseplan-list-item">Priority Customer Assistance</li>
                  <li className="foodlicenseplan-list-item">Dedicated Relationship Manager</li>
                </ul>
              </div>
            </div>

            <div className="foodlicenseplan-footer">
              <button className="foodlicenseplan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default FoodLicensePlans;
