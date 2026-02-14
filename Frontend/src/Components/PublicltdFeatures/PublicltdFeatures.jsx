import React from "react";
import "./PublicltdFeatures.css";
import typesIllustration from "../../assets/public-1.png"


const PvtTypes = () => {
  return (
    <section className="pub-ty-types-section">
      <div className="pub-ty-types-container">
        {/* Left graphic */}
        <div className="pub-ty-types-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Private Limited Company"
            className="pub-ty-types-illustration"
          />
        </div>

        {/* Right content */}
        <div className="pub-ty-types-content">
          <h2 className="pub-ty-types-title">
            Types of Public Limited Company Registration in India
          </h2>

          <p className="pub-ty-types-intro">
            Public limited companies can be different based on how they raise money, who owns them, and whether their shares are available in the market. Below are the main types:
          </p>

          {/* Type 1 */}
          <div className="pub-ty-types-block">
            <h3 className="pub-ty-types-subtitle">Listed Public Company</h3>
            <p className="pub-ty-types-text">
              These companies are registered on a stock exchange. People can buy and sell their shares during market hours. They must follow strict rules set by market authorities.
            </p>
          </div>

          {/* Type 2 */}
          <div className="pub-ty-types-block">
            <h3 className="pub-ty-types-subtitle">Unlisted Public Company</h3>
            <p className="pub-ty-types-text">
              These companies are not registered on a stock exchange. Their shares are not available for public trading. They can still give shares to investors, but only in a limited/private way.
            </p>
          </div>

          {/* Type 3 */}
          <div className="pub-ty-types-block">
            <h3 className="pub-ty-types-subtitle">Government Public Company</h3>
            <p className="pub-ty-types-text">
              In this type of company, the Central or State Government owns at least 51% of the company. Many government-owned companies come under this category.
            </p>
          </div>

          {/* Type 4 */}
          <div className="pub-ty-types-block">
            <h3 className="pub-ty-types-subtitle">Section 8 Company</h3>
            <p className="pub-ty-types-text">
              A Section 8 company is a non-profit company created for social or charitable purposes like education, healthcare, or welfare. It can be registered as a public or private company, but its main goal is service, not profit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTypes;
