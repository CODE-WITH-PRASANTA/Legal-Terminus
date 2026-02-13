import React from "react";
import "./TrustPvtTypes.css";
import typesIllustration from "../../assets/pvtltd-types.png";

const TrustPvtTypes = () => {
  return (
    <section className="trust-types-section">
      <div className="trust-types-container">

        {/* Illustration */}
        <div className="trust-types-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Private Limited Company"
            className="trust-types-illustration"
          />
        </div>

        {/* Content */}
        <div className="trust-types-content">
          <h2 className="trust-types-title">
            Incorporation Of Wholly Owned Subsidiary in India
          </h2>

          <p className="trust-types-intro">
            Private Limited Companies can be registered in different forms based
            on ownership, liability, and business objectives. Choosing the right
            type ensures legal protection, smooth operations, and long-term
            growth.
          </p>

          {/* Type 1 */}
          <div className="trust-types-block">
            <h3 className="trust-types-subtitle">
              Company Limited by Shares
            </h3>
            <p className="trust-types-text">
              This is the most common type of Private Limited Company. The
              liability of shareholders is limited to the unpaid amount on their
              shares. Ideal for startups and growing businesses looking to raise
              funds while protecting personal assets.
            </p>
          </div>

          {/* Type 2 */}
          <div className="trust-types-block">
            <h3 className="trust-types-subtitle">
              Company Limited by Guarantee
            </h3>
            <p className="trust-types-text">
              Members agree to contribute a fixed amount in case of liquidation.
              This structure is generally suitable for non-profit or charitable
              organizations that do not require share capital.
            </p>
          </div>

          {/* Type 3 */}
          <div className="trust-types-block">
            <h3 className="trust-types-subtitle">Unlimited Companies</h3>
            <p className="trust-types-text">
              An unlimited company places no limit on members’ liability.
              Members are personally responsible for company debts. This model
              is less common and usually adopted by closely held businesses.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustPvtTypes;
