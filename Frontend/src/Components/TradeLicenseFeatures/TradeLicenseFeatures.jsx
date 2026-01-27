import React from "react";
import "./TradeLicenseFeatures.css";
import featuresIllustration from "../../assets/tradelicense.jpg";

const TradeLicenseFeatures = () => {
  return (
    <section className="trade-features-section">
      <div className="trade-features-container">
        {/* Left graphic */}
        <div className="trade-features-illustration-wrap">
          <img
            src={featuresIllustration}
            alt="Types of Trade License"
            className="trade-features-illustration"
          />
        </div>

        {/* Right content */}
        <div className="trade-features-content">
          <h2 className="trade-features-title">
            Types of Trade License Registration
          </h2>

          <p className="trade-features-intro">
            Trade Licenses can be registered in different categories based on the
            nature of business, operations, and applicable municipal regulations.
            Choosing the right type ensures legal compliance, smooth operations,
            and long-term business credibility.
          </p>

          {/* Type 1 */}
          <div className="trade-features-block">
            <h3 className="trade-features-subtitle">Shop and Establishment License</h3>
            <p className="trade-features-text">
              This is the most common form of trade license required for small
              shops, commercial establishments, and local service providers.
              It ensures that the business follows state-specific labor and
              operational regulations.
            </p>
          </div>

          {/* Type 2 */}
          <div className="trade-features-block">
            <h3 className="trade-features-subtitle">Industrial Trade License</h3>
            <p className="trade-features-text">
              This license is issued to manufacturing and production-based
              businesses operating within industrial zones. It ensures that the
              establishment meets environmental and safety norms.
            </p>
          </div>

          {/* Type 3 */}
          <div className="trade-features-block">
            <h3 className="trade-features-subtitle">Food and Health Trade License</h3>
            <p className="trade-features-text">
              Businesses involved in food processing, restaurants, and public
              health services require this license. It ensures compliance with
              hygiene, safety, and public health standards regulated by local
              authorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseFeatures;
