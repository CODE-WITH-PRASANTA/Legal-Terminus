import React from "react";
import "./ProFOPCTypes.css";
import typesIllustration from "../../assets/pvtltd-types.png";

const PvtTypes = () => {
  return (
    <section className="profopc-types-section">
      <div className="profopc-types-container">
        {/* Left graphic */}
        <div className="profopc-types-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Private Limited Company"
            className="profopc-types-illustration"
          />
        </div>

        {/* Right content */}
        <div className="profopc-types-content">
          <h2 className="profopc-types-title">
            Types of Private Limited Company Registration
          </h2>

          <p className="profopc-types-intro">
            Private Limited Companies can be registered in different forms based on ownership, liability, and business objectives. Choosing the right type helps ensure legal protection, smooth operations, and long-term growth.
          </p>

          {/* Type 1 */}
          <div className="profopc-types-block">
            <h3 className="profopc-types-subtitle">Company limited by Shares</h3>
            <p className="profopc-types-text">
              This is the most common type of Private Limited Company. The liability of shareholders is limited to the unpaid amount on their shares. It is ideal for startups and growing businesses looking to raise funds while protecting personal assets.
            </p>
          </div>

          {/* Type 2 */}
          <div className="profopc-types-block">
            <h3 className="profopc-types-subtitle">Company limited by Guarantee</h3>
            <p className="profopc-types-text">
              In this type, members agree to contribute a fixed amount in case of liquidation. It is generally suitable for non-profit or charitable organizations that do not require share capital.
            </p>
          </div>

          {/* Type 3 */}
          <div className="profopc-types-block">
            <h3 className="profopc-types-subtitle">Unlimited Companies</h3>
            <p className="profopc-types-text">
              An unlimited company does not place any limit on members’ liability. Members are personally responsible for company debts. This structure is less common and is usually chosen by closely held businesses with full control over operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTypes;
