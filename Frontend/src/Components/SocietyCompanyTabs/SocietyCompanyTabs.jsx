import React from "react";
import "./SocietyCompanyTabs.css";
import pvtIllustration from "../../assets/whypvt-imp.svg";

const SocietyCompanyTabs = () => {
  return (
    <div className="society-company-wrapper">

      {/* ===========================
          INTRO SECTION
      ============================ */}
      <section className="society-intro-section">
        <div className="society-intro-container">

          {/* Illustration */}
          <div className="society-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="society-intro-illustration"
            />
          </div>

          {/* Content */}
          <div className="society-intro-content">
            <h2 className="society-intro-title">
              Why Choose societyoration Of Wholly Owned Subsidiary in India?
            </h2>

            <p className="society-intro-text">
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
      <section className="society-act-section">
        <div className="society-act-container">
          <div className="society-act-card">

            <h3 className="society-act-title">Companies Act, 2013</h3>

            <p className="society-act-text">
              As per Section 2(68) of the Companies Act, 2013, a private limited
              company means a company having such minimum paid-up share capital
              as may be prescribed, and which by its articles of association:
            </p>

            <p className="society-act-point">
              <span className="society-act-point-label">(a)</span>
              Restricts the right to transfer its shares;
            </p>

            <p className="society-act-point">
              <span className="society-act-point-label">(b)</span>
              Limits the number of its members to 200 (excluding employees);
            </p>

            <p className="society-act-point">
              <span className="society-act-point-label">(c)</span>
              Prohibits any invitation to the public to subscribe to securities.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SocietyCompanyTabs;
