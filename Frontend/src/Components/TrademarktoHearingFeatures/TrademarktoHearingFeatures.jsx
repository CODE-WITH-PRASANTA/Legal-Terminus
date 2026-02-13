import React from "react";
import "./TrademarktoHearingFeatures.css";
import featuresIllustration from "../../assets/tradelicense.jpg";

const TradeLicenseFeatures = () => {
  return (
    <section className="thf-section">
      <div className="thf-container">
        {/* Left graphic */}
        <div className="thf-illustration-wrap">
          <img
            src={featuresIllustration}
            alt="Types of Trade License"
            className="thf-illustration"
          />
        </div>

        {/* Right content */}
        <div className="thf-content">
          <h2 className="thf-title">
            Types of Trade License Registration
          </h2>

          <p className="thf-intro">
            Trade Licenses can be registered in different categories based on the
            nature of business, operations, and applicable municipal regulations.
            Choosing the right type ensures legal compliance, smooth operations,
            and long-term business credibility.
          </p>

          {/* Type 1 */}
          <div className="thf-block">
            <h3 className="thf-subtitle">Shop and Establishment License</h3>
            <p className="thf-text">
              This is the most common form of trade license required for small
              shops, commercial establishments, and local service providers.
              It ensures that the business follows state-specific labor and
              operational regulations.
            </p>
          </div>

          {/* Type 2 */}
          <div className="thf-block">
            <h3 className="thf-subtitle">Industrial Trade License</h3>
            <p className="thf-text">
              This license is issued to manufacturing and production-based
              businesses operating within industrial zones. It ensures that the
              establishment meets environmental and safety norms.
            </p>
          </div>

          {/* Type 3 */}
          <div className="thf-block">
            <h3 className="thf-subtitle">Food and Health Trade License</h3>
            <p className="thf-text">
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
