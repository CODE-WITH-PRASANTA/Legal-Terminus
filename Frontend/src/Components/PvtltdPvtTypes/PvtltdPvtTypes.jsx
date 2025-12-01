import React from "react";
import "./PvtltdPvtTypes.css";

// replace with your actual image path
import typesIllustration from "../../assets/f-3 img.webp";

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
            Types of Private Limited Company (Pvt. Ltd.)
          </h2>

          <p className="pvt-types-intro">
            Choosing the right type of private limited company is essential for
            legal protection, financial planning, and operational flexibility.
            In India, private companies are categorized based on member
            liability and capital structure. Below are the three key types:
          </p>

          {/* Type 1 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Company limited by Shares</h3>
            <p className="pvt-types-text">
              A company limited by shares is the most widely used structure.
              Here, the liability of shareholders is limited to the unpaid
              amount on their subscribed shares. This model protects personal
              assets and supports ownership through equity. It is ideal for
              businesses that plan to raise capital from private investors or
              co-founders without risking personal finances.
            </p>
          </div>

          {/* Type 2 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Company limited by Guarantee</h3>
            <p className="pvt-types-text">
              Companies limited by guarantee do not have share capital. Instead,
              members pledge to pay a specific amount in case of liquidation.
              This structure is suitable for non-profits, foundations, and
              social enterprises that need legal recognition without focusing on
              profit distribution. Members’ liability is limited to their
              guarantee amount.
            </p>
          </div>

          {/* Type 3 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Unlimited Companies</h3>
            <p className="pvt-types-text">
              In an unlimited company, there is no limit to the liability of its
              members. If the company faces financial losses or debts, members
              are personally responsible for covering them. This structure is
              rarely used but can be suitable for closely held entities where
              members are comfortable with full liability and want maximum
              control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTypes;
