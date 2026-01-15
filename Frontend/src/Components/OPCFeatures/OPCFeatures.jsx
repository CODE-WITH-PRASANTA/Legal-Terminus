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
            OPC is a business structure that allows a single person to establish a company as a separate legal entity. 
          </p>

          {/* Type 1 */}
          <div className="opc-features-block">
            <h3 className="opc-features-subtitle">OPC Limited by Shares</h3>
            <p className="opc-features-text">
              OPC Limited by Shares is the most common type of One Person Company. In this type, the owner’s responsibility is limited only to the amount of share capital that is still unpaid. The owner holds shares to show ownership and investment in the business. This structure is best for businesses that want to earn profits and grow.
            </p>
          </div>

          {/* Type 2 */}
          <div className="opc-features-block">
            <h3 className="opc-features-subtitle">OPC Limited by Guarantee</h3>
            <p className="opc-features-text">
              OPC Limited by Guarantee is mostly used for non-profit organisations, social businesses, or professional groups. In this type, there are no shares. Instead, the owner promises to pay a fixed amount only if the company is closed (wound up). The owner’s liability is limited only to this guaranteed amount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OPCFeatures;
