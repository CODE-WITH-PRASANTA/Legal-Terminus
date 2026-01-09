import React from "react";
import "./IncorporationPvtTypes.css";
import typesIllustration from "../../assets/pvtltd-types.png";

const IncorporationPvtTypes = () => {
  return (
    <section className="incorp-types-section">
      <div className="incorp-types-container">

        {/* Illustration */}
        <div className="incorp-types-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Private Limited Company"
            className="incorp-types-illustration"
          />
        </div>

        {/* Content */}
        <div className="incorp-types-content">
          <h2 className="incorp-types-title">
            Types of Private Limited Company Registration
          </h2>

          <p className="incorp-types-intro">
            Private Limited Companies can be registered in different forms based
            on ownership, liability, and business objectives. Choosing the right
            type ensures legal protection, smooth operations, and long-term
            growth.
          </p>

          {/* Type 1 */}
          <div className="incorp-types-block">
            <h3 className="incorp-types-subtitle">
              Company Limited by Shares
            </h3>
            <p className="incorp-types-text">
              This is the most common type of Private Limited Company. The
              liability of shareholders is limited to the unpaid amount on their
              shares. Ideal for startups and growing businesses looking to raise
              funds while protecting personal assets.
            </p>
          </div>

          {/* Type 2 */}
          <div className="incorp-types-block">
            <h3 className="incorp-types-subtitle">
              Company Limited by Guarantee
            </h3>
            <p className="incorp-types-text">
              Members agree to contribute a fixed amount in case of liquidation.
              This structure is generally suitable for non-profit or charitable
              organizations that do not require share capital.
            </p>
          </div>

          {/* Type 3 */}
          <div className="incorp-types-block">
            <h3 className="incorp-types-subtitle">Unlimited Companies</h3>
            <p className="incorp-types-text">
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

export default IncorporationPvtTypes;
