import React from "react";
import "./PublicltdBenifits.css";

const RequirementsPvt = () => {
  return (
    <section className="req-section">
      <div className="req-container">
        {/* Heading + intro */}
        <header className="req-header">
          <h2 className="req-title">
            Benefits of Public Limited Company Registration in India
          </h2>
          <p className="req-subtitle">
            A Public Limited Company is best for big businesses that want to grow fast and reach more customers, even in other countries. It has many benefits for owners, investors, and the business.
          </p>
        </header>

        {/* Cards */}
        <div className="req-grid">
          {/* 1 */}
          <article className="req-card">
            <h3 className="req-card-title">Easy to Raise Large Funds</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
             A public limited company can raise money by selling shares to the public. If the company is listed on the stock market, it can collect a large amount of funds.
            </p>
          </article>

          {/* 2 */}
          <article className="req-card">
            <h3 className="req-card-title">More Shareholders = Less Risk</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              A public limited company can have many shareholders. This means the business risk is not on one person—it is shared among many owners.
            </p>
          </article>

          {/* 3 */}
          <article className="req-card">
            <h3 className="req-card-title">
              More Ways to Get Money
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Apart from shares, a public limited company can also raise money through loans and other funding options. It becomes easier because the company is seen as more trustworthy.
            </p>
          </article>

          {/* 4 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Higher Trust and Strong Image
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Public limited companies look more professional and established. This increases trust among customers, investors, banks, and business partners. Also, more people know about the company which helps in branding.
            </p>
          </article>

          {/* 5 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Easy Share Transfer
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Shares can be transferred easily in a public limited company. There are fewer restrictions compared to private companies.
            </p>
          </article>

          {/* 4 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Better Ideas and Support
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Since there are many shareholders, the company can get new ideas, opinions, and support from people with different experience and knowledge.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPvt;
