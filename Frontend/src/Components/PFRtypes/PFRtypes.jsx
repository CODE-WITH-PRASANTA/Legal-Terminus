import React from "react";
import "./PFRtypes.css";
import typesIllustration from "../../assets/pvtltd-types.png"


const PvtTypes = () => {
  return (
    <section className="pvt-types-section">
      <div className="pvt-types-container">
        {/* Left graphic */}
        <div className="pvt-types-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Private Limited Company"
            className="pvt-types-illustration"
          />
        </div>

        {/* Right content */}
        <div className="pvt-types-content">
          <h2 className="pvt-types-title">
            Types of Partnership Firm Registration
          </h2>

          {/* <p className="pvt-types-intro">
            Private Limited Companies can be registered in different forms based on ownership, liability, and business objectives. Choosing the right type helps ensure legal protection, smooth operations, and long-term growth.
          </p> */}

          {/* Type 1 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Partnership at will</h3>
            <p className="pvt-types-text">
              A partnership at will is formed without deciding any fixed time period for the partnership. The partners can decide later when they want to continue or dissolve the firm. The profit earned is considered as income of each partner, and every partner is responsible for paying the firm’s debts.
            </p>
          </div>

          {/* Type 2 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Particular partnership</h3>
            <p className="pvt-types-text">
              A particular partnership is created for a specific purpose or project and is usually temporary in nature. It may end after the work is completed or on a decided date, but partners can also extend it with mutual agreement. In this type of partnership, partners may have to use their personal money or assets to clear business liabilities.
            </p>
          </div>

          {/* Type 3 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Limited liability partnership</h3>
            <p className="pvt-types-text">
              A Limited Liability Partnership (LLP) is governed by the LLP Act, 2008 and works like a corporate business structure. In an LLP, partners have limited liability, meaning they are responsible only up to the amount they have invested in the business. Generally, partners are not legally required to use their personal assets to pay business debts.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTypes;
