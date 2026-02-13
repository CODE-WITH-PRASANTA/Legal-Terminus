import React from "react";
import "./IncorporationCompanyTabs.css";
import pvtIllustration from "../../assets/whypvt-imp.svg";

const IncorporationCompanyTabs = () => {
  return (
    <div className="incorp-company-wrapper">

      {/* ===========================
          INTRO SECTION
      ============================ */}
      <section className="incorp-intro-section">
        <div className="incorp-intro-container">

          {/* Illustration */}
          <div className="incorp-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="incorp-intro-illustration"
            />
          </div>

          {/* Content */}
          <div className="incorp-intro-content">
            <h2 className="incorp-intro-title">
              Why Choose Incorporation Of Wholly Owned Subsidiary in India?
            </h2>

            <p className="incorp-intro-text">
              A Wholly Owned Subsidiary in India by Foreign Companies is a preferred corporate structure for global businesses looking to expand into the Indian market. This type of entity is registered as a private limited company where 100% of the shares are held by the foreign parent company, ensuring complete control over operations.
              <br /><br />
              A WOS enjoys a separate legal identity, and its management remains distinct from ownership—making it a compliant and strategic choice for international stakeholders. It offers several benefits, including access to India’s vast market, eligibility for sector-specific incentives, and simplified repatriation of profits in sectors allowing 100% FDI. Below, we address some common queries related to registering a Wholly Owned Subsidiary in India by foreign companies.
            </p>
          </div>

        </div>
      </section>

      {/* ===========================
          COMPANIES ACT SECTION
      ============================ */}
      <section className="incorp-act-section">
        <div className="incorp-act-container">
          <div className="incorp-act-card">

            <h3 className="incorp-act-title">Compliance Requirements for a Wholly Owned Subsidiary</h3>

            <p className="incorp-act-point">
              <span className="incorp-act-point-label">(a)</span>
              Filing financial statements and returns annually to ROC as per the Companies Act,  2013.
            </p>

            <p className="incorp-act-point">
              <span className="incorp-act-point-label">(b)</span>
            Compliance with FEMA (Foreign Exchange Management Act)  1999 regulations.
            </p>

            <p className="incorp-act-point">
              <span className="incorp-act-point-label">(c)</span>
              Tax filings under the Indian Income Tax Act, 1961, and GST regulations.
            </p>

            <p className="incorp-act-point">
              <span className="incorp-act-point-label">(d)</span>
              Conducting board meetings and maintaining statutory records as required by the Companies Act 2013.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};

export default IncorporationCompanyTabs;
