import React from "react";
import "./ReplyOfERTypes.css";
import typesIllustration from "../../assets/pvtltd-types.png"


const PvtTypes = () => {
  return (
    <section className="Replyof-ERtypes-section">
      <div className="Replyof-ERtypes-container">
        {/* Left graphic */}
        <div className="Replyof-ERtypes-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Private Limited Company"
            className="Replyof-ERtypes-illustration"
          />
        </div>

        {/* Right content */}
        <div className="Replyof-ERtypes-content">
          <h2 className="Replyof-ERtypes-title">
            Types of Proprietorship Firms Registration
          </h2>

          {/* <p className="Replyof-ERtypes-intro">
            Private Limited Companies can be registered in different forms based on ownership, liability, and business objectives. Choosing the right type helps ensure legal protection, smooth operations, and long-term growth.
          </p> */}

          {/* Type 1 */}
          <div className="Replyof-ERtypes-block">
            <h3 className="Replyof-ERtypes-subtitle">Company limited by Shares</h3>
            <p className="Replyof-ERtypes-text">
              This is the most common type of Private Limited Company. The liability of shareholders is limited to the unpaid amount on their shares. It is ideal for startups and growing businesses looking to raise funds while protecting personal assets.
            </p>
          </div>

          {/* Type 2 */}
          <div className="Replyof-ERtypes-block">
            <h3 className="Replyof-ERtypes-subtitle">Company limited by Guarantee</h3>
            <p className="Replyof-ERtypes-text">
              In this type, members agree to contribute a fixed amount in case of liquidation. It is generally suitable for non-profit or charitable organizations that do not require share capital.
            </p>
          </div>

          {/* Type 3 */}
          <div className="Replyof-ERtypes-block">
            <h3 className="Replyof-ERtypes-subtitle">Unlimited Companies</h3>
            <p className="Replyof-ERtypes-text">
              An unlimited company does not place any limit on members’ liability. Members are personally responsible for company debts. This structure is less common and is usually chosen by closely held businesses with full control over operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTypes;
