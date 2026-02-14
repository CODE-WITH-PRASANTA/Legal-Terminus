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
            Types of Trade License Registration in India
          </h2>

          <p className="trade-features-intro">
            Trade Licenses can be registered in different categories based on the
            nature of business, operations, and applicable municipal regulations.
            Choosing the right type ensures legal compliance, smooth operations,
            and long-term business credibility.
          </p>

          {/* Type 1 */}
          <div className="trade-features-block">
            <h3 className="trade-features-subtitle">Industrial Trade License</h3>
            <p className="trade-features-text">
              Required for businesses involved in manufacturing or production work.
              <br></br>
              Examples: factories, manufacturing units, processing plants.
            </p>
          </div>

          {/* Type 2 */}
          <div className="trade-features-block">
            <h3 className="trade-features-subtitle">Shop and Establishment License</h3>
            <p className="trade-features-text">
              Needed for businesses running a shop or service outlet.
              <br></br>
              Examples: clothing stores, general stores, salons, repair/service centers.
            </p>
          </div>

          {/* Type 3 */}
          <div className="trade-features-block">
            <h3 className="trade-features-subtitle">Food and Health Trade License</h3>
            <p className="trade-features-text">
              Required for businesses that sell or supply food and beverages in an area.
              <br></br>
              Examples: restaurants, cafes, catering services, food trucks.
              For larger operations, an FSSAI license may also be required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseFeatures;
