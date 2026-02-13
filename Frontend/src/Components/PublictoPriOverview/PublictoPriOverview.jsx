import React from "react";
import "./PublictoPriOverview.css";
import pvtIllustration from "../../assets/whypvt-imp.svg";

const PvtLtdFull = () => {
  return (
    <div className="pvt-ov-full-wrapper">

      {/* ===========================
          SECTION 2 — INTRO
      ============================ */}
      <section className="pvt-ov-intro-section">
        <div className="pvt-ov-intro-container">
          {/* Illustration */}
          <div className="pvt-ov-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="pvt-ov-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="pvt-ov-intro-content">
            <h2 className="pvt-ov-intro-title">
              Why Choose Public Limited Company Registration
            </h2>
            <p className="pvt-ov-intro-text">
              Registering a company in India is the first step to legally starting your business. The Companies Act, 2013, sets the rules for company formation, and the Ministry of Corporate Affairs (MCA) oversees the process. Once registered, your business gets a legal identity, along with rights and protections under Indian law.
              <br /><br />
              Choosing the right type of Private Limited Company is important, as it determines how your business is owned, managed, and legally protected. Different types of private limited companies suit different business needs, depending on factors such as ownership structure. Selecting the correct type also helps ensure smooth compliance with legal regulations. Proper registration with the Ministry of Corporate Affairs (MCA) allows your company to operate legally, access government benefits, and build strong credibility in the market.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 3 — COMPANIES ACT
      ============================ */}
      <section className="pvt-ov-companies-act-section">
        <div className="pvt-ov-companies-act-container">
          <div className="pvt-ov-companies-act-card">
            <h3 className="pvt-ov-companies-act-title">Companies Act, 2013</h3>

            <p className="pvt-ov-companies-act-text">
              As per Section 2(68) of the Companies Act, 2013, a private limited
              company means a company having a minimum paid-up share capital as
              may be prescribed, and which by its articles of association:
            </p>

            <p className="pvt-ov-companies-act-point">
              <span className="pvt-ov-companies-act-point-label">(a)</span>
              Restricts the right to transfer its shares;
            </p>

            <p className="pvt-ov-companies-act-point">
              <span className="pvt-ov-companies-act-point-label">(b)</span>
              Limits the number of its members to 200 (excluding present and
              former employees); and
            </p>

            <p className="pvt-ov-companies-act-point">
              <span className="pvt-ov-companies-act-point-label">(c)</span>
              Prohibits any invitation to the public to subscribe for any
              securities of the company.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PvtLtdFull;
