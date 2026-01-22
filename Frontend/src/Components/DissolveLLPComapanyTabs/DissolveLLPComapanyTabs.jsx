import React from "react";
import "./DissolveLLPComapanyTabs.css";
import pvtIllustration from "../../assets/whypvt-imp.svg";

const DissolveLLPComapanyTabs = () => {
  return (
    <div className="Dissllp-company-wrapper">

      {/* ===========================
          INTRO SECTION
      ============================ */}
      <section className="Dissllp-intro-section">
        <div className="Dissllp-intro-container">

          {/* Illustration */}
          <div className="Dissllp-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="Dissllp-intro-illustration"
            />
          </div>

          {/* Content */}
          <div className="Dissllp-intro-content">
            <h2 className="Dissllp-intro-title">
              Why Choose Dissolve-llp Of Wholly Owned Subsidiary in India?
            </h2>

            <p className="Dissllp-intro-text">
              Registering a company in India is the first step to legally starting
              your business. The Companies Act, 2013 governs company formation,
              and the Ministry of Corporate Affairs (MCA) oversees the process.
              Once registered, your business gains a separate legal identity with
              rights and protections under Indian law.
              <br /><br />
              Choosing the right type of Private Limited Company is crucial as it
              defines ownership, management structure, and legal protection.
              Proper registration helps ensure smooth compliance, access to
              government benefits, and strong market credibility.
            </p>
          </div>

        </div>
      </section>

      {/* ===========================
          COMPANIES ACT SECTION
      ============================ */}
      <section className="Dissllp-act-section">
        <div className="Dissllp-act-container">
          <div className="Dissllp-act-card">

            <h3 className="Dissllp-act-title">Companies Act, 2013</h3>

            <p className="Dissllp-act-text">
              As per Section 2(68) of the Companies Act, 2013, a private limited
              company means a company having such minimum paid-up share capital
              as may be prescribed, and which by its articles of association:
            </p>

            <p className="Dissllp-act-point">
              <span className="Dissllp-act-point-label">(a)</span>
              Restricts the right to transfer its shares;
            </p>

            <p className="Dissllp-act-point">
              <span className="Dissllp-act-point-label">(b)</span>
              Limits the number of its members to 200 (excluding employees);
            </p>

            <p className="Dissllp-act-point">
              <span className="Dissllp-act-point-label">(c)</span>
              Prohibits any invitation to the public to subscribe to securities.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};

export default DissolveLLPComapanyTabs;
