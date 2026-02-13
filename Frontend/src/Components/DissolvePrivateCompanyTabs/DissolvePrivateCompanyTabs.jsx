import React from "react";
import "./DissolvePrivateCompanyTabs.css";
import pvtIllustration from "../../assets/whypvt-imp.svg";

const DissolvePrivateCompanyTabs = () => {
  return (
    <div className="Dissolve-company-wrapper">

      {/* ===========================
          INTRO SECTION
      ============================ */}
      <section className="Dissolve-intro-section">
        <div className="Dissolve-intro-container">

          {/* Illustration */}
          <div className="Dissolve-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="Dissolve-intro-illustration"
            />
          </div>

          {/* Content */}
          <div className="Dissolve-intro-content">
            <h2 className="Dissolve-intro-title">
              Why Choose Dissolve-Private Of Wholly Owned Subsidiary in India?
            </h2>

            <p className="Dissolve-intro-text">
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
      <section className="Dissolve-act-section">
        <div className="Dissolve-act-container">
          <div className="Dissolve-act-card">

            <h3 className="Dissolve-act-title">Companies Act, 2013</h3>

            <p className="Dissolve-act-text">
              As per Section 2(68) of the Companies Act, 2013, a private limited
              company means a company having such minimum paid-up share capital
              as may be prescribed, and which by its articles of association:
            </p>

            <p className="Dissolve-act-point">
              <span className="Dissolve-act-point-label">(a)</span>
              Restricts the right to transfer its shares;
            </p>

            <p className="Dissolve-act-point">
              <span className="Dissolve-act-point-label">(b)</span>
              Limits the number of its members to 200 (excluding employees);
            </p>

            <p className="Dissolve-act-point">
              <span className="Dissolve-act-point-label">(c)</span>
              Prohibits any invitation to the public to subscribe to securities.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};

export default DissolvePrivateCompanyTabs;
