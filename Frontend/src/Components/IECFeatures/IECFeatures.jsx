import React from "react";
import "./IECFeatures.css";
import featuresIllustration from "../../assets/iec.png";

const IECFeatures = () => {
  return (
    <section className="iec-features-section">
      <div className="iec-features-container">
        {/* Left graphic */}
        <div className="iec-features-illustration-wrap">
          <img
            src={featuresIllustration}
            alt="Types of Import Export Code Registration"
            className="iec-features-illustration"
          />
        </div>

        {/* Right content */}
        <div className="iec-features-content">
          <h2 className="iec-features-title">
            Types of Import Export Code (IEC) Registration
          </h2>

          <p className="iec-features-intro">
            Import Export Codes (IEC) can be categorized based on the nature of business 
            and the type of entity applying. Choosing the right registration ensures 
            smooth compliance with DGFT and customs authorities while supporting 
            your international trade goals.
          </p>

          {/* Type 1 */}
          <div className="iec-features-block">
            <h3 className="iec-features-subtitle">Individual / Proprietorship IEC</h3>
            <p className="iec-features-text">
              Ideal for small business owners or freelancers dealing with imports 
              or exports in their own name. The IEC is issued using the proprietor’s 
              PAN and business details, simplifying compliance for solo traders.
            </p>
          </div>

          {/* Type 2 */}
          <div className="iec-features-block">
            <h3 className="iec-features-subtitle">Partnership / LLP IEC</h3>
            <p className="iec-features-text">
              This type is issued to registered partnership firms or LLPs engaging 
              in international trade. The firm’s PAN is used, and partners gain 
              legal recognition for imports and exports under the firm’s name.
            </p>
          </div>

          {/* Type 3 */}
          <div className="iec-features-block">
            <h3 className="iec-features-subtitle">Company / Organization IEC</h3>
            <p className="iec-features-text">
              Designed for Private Limited, Public Limited, or One Person Companies 
              that import or export goods and services. It allows access to global 
              markets, trade benefits, and DGFT schemes for corporate entities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IECFeatures;
