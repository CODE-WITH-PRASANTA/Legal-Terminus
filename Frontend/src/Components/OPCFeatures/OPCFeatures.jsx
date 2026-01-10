import React from "react";
import "./OPCFeatures.css";
import featuresIllustration from "../../assets/pvtltd-types1.png";

const OPCFeatures = () => {
  return (
    <section className="opc-features-section">
      <div className="opc-features-container">
        {/* Left graphic */}
        <div className="opc-features-illustration-wrap">
          <img
            src={featuresIllustration}
            alt="Types of One Person Company"
            className="opc-features-illustration"
          />
        </div>

        {/* Right content */}
        <div className="opc-features-content">
          <h2 className="opc-features-title">
            Types of One Person Company Registration
          </h2>

          <p className="opc-features-intro">
            One Person Companies can be registered in different forms based on ownership,
            liability, and business objectives. Choosing the right type helps ensure legal
            protection, smooth operations, and long-term growth.
          </p>

          {/* Type 1 */}
          <div className="opc-features-block">
            <h3 className="opc-features-subtitle">Company limited by Shares</h3>
            <p className="opc-features-text">
              This is the most common type of One Person Company. The liability of the sole
              member is limited to the unpaid amount on their shares. It is ideal for
              startups and growing businesses looking to raise funds while protecting
              personal assets.
            </p>
          </div>

          {/* Type 2 */}
          <div className="opc-features-block">
            <h3 className="opc-features-subtitle">Company limited by Guarantee</h3>
            <p className="opc-features-text">
              In this type, the sole member agrees to contribute a fixed amount in case of
              liquidation. It is generally suitable for non-profit or charitable
              organizations that do not require share capital.
            </p>
          </div>

          {/* Type 3 */}
          <div className="opc-features-block">
            <h3 className="opc-features-subtitle">Unlimited Companies</h3>
            <p className="opc-features-text">
              An unlimited company does not place any limit on the member’s liability. The
              individual is personally responsible for company debts. This structure is less
              common and is usually chosen by closely held businesses with full control over
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OPCFeatures;
