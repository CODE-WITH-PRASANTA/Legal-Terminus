import React from "react";
import "./LLPTypes.css";
import typesIllustration from "../../assets/LLP-types.webp"


const LlpTypes = () => {
  return (
    <section className="llp-types-section">
      <div className="llp-types-container">
        {/* Left graphic */}
        <div className="llp-types-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Limited Liability Partnership"
            className="llp-types-illustration"
          />
        </div>

        {/* Right content */}
        <div className="llp-types-content">
          <h2 className="llp-types-title">
            Types of Limited Liability Partnership
          </h2>

          <p className="llp-types-intro">
           Limited Liability Partnership can be registered in different forms based on ownership, liability, and business objectives. Choosing the right type helps ensure legal protection, smooth operations, and long-term growth.
          </p>

          {/* Type 1 */}
          <div className="llp-types-block">
            <h3 className="llp-types-subtitle">Company limited by Shares</h3>
            <p className="llp-types-text">
              This is the most common type of Limited Liability Partnership. The liability of shareholders is limited to the unpaid amount on their shares. It is ideal for startups and growing businesses looking to raise funds while protecting personal assets.
            </p>
          </div>

          {/* Type 2 */}
          <div className="llp-types-block">
            <h3 className="llp-types-subtitle">Company limited by Guarantee</h3>
            <p className="llp-types-text">
              In this type, members agree to contribute a fixed amount in case of liquidation. It is generally suitable for non-profit or charitable organizations that do not require share capital.
            </p>
          </div>

          {/* Type 3 */}
          <div className="llp-types-block">
            <h3 className="llp-types-subtitle">Unlimited Companies</h3>
            <p className="llp-types-text">
              An unlimited company does not place any limit on members’ liability. Members are personally responsible for company debts. This structure is less common and is usually chosen by closely held businesses with full control over operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LlpTypes;
