import React from "react";
import "./ChangetoCompanyTypes.css";
import typesIllustration from "../../assets/pvtltd-types.png";

const PvtTypes = () => {
  return (
    <section className="prp-types-section">
      <div className="prp-types-container">
        {/* Left graphic */}
        <div className="prp-types-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Private Limited Company"
            className="prp-types-illustration"
          />
        </div>

        {/* Right content */}
        <div className="prp-types-content">
          <h2 className="prp-types-title">
            Types of Proprietorship Firms Registration
          </h2>

          {/* Type 1 */}
          <div className="prp-types-block">
            <h3 className="prp-types-subtitle">Company limited by Shares</h3>
            <p className="prp-types-text">
              This is the most common type of Private Limited Company. The liability of shareholders is limited to the unpaid amount on their shares. It is ideal for startups and growing businesses looking to raise funds while protecting personal assets.
            </p>
          </div>

          {/* Type 2 */}
          <div className="prp-types-block">
            <h3 className="prp-types-subtitle">Company limited by Guarantee</h3>
            <p className="prp-types-text">
              In this type, members agree to contribute a fixed amount in case of liquidation. It is generally suitable for non-profit or charitable organizations that do not require share capital.
            </p>
          </div>

          {/* Type 3 */}
          <div className="prp-types-block">
            <h3 className="prp-types-subtitle">Unlimited Companies</h3>
            <p className="prp-types-text">
              An unlimited company does not place any limit on members’ liability. Members are personally responsible for company debts. This structure is less common and is usually chosen by closely held businesses with full control over operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTypes;
