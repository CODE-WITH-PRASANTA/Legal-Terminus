import React from "react";
import "./PublicltdOverview.css";

// Replace with your actual illustration
import pvtIllustration from "../../assets/whypvt-imp.svg";

const PvtLtdFull = () => {
  return (
    <div className="pvt-full-wrapper">

      {/* ===========================
          SECTION 1 — OVERVIEW
      ============================ */}
      {/* <div className="overview-wrapper">
        <h2 className="overview-title">Understanding the Basics
</h2>
        <p className="overview-text">
A Private Limited Company is a legally registered business under the Companies Act, 2013, with its own separate identity from its owners. It protects the personal assets of its members, limits who can own shares, and must have a registered office address. </p>
      </div> */}

      {/* ===========================
          SECTION 2 — INTRO
      ============================ */}
      <section className="pvt-intro-section">
        <div className="pvt-intro-container">
          {/* Illustration */}
          <div className="pvt-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="pvt-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="pvt-intro-content">
            <h2 className="pvt-intro-title">
              Why Choose Public Limited Company Registration in India
            </h2>
            <p className="pvt-intro-text">
            A public limited company is the most transparent form of corporate business structure. It’s a popular choice for businesses because it allows shares to be easily bought and sold, and it’s seen as trustworthy by investors. Here, we’ll answer some common questions about a public limited company registration in India.
           </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 3 — COMPANIES ACT
      ============================ */}
      <section className="companies-act-section">
        <div className="companies-act-container">
          <div className="companies-act-card">
            <h3 className="companies-act-title">Companies Act, 2013</h3>

            <p className="companies-act-text">
              As per Section 2(71) of the Companies Act, 2013, a Public Limited Company means a company having a minimum paid-up share capital as may be prescribed, and which by its Articles of Association:
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(a)</span>
              Does not restrict the right to transfer its shares;
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(b)</span>
              Does not limit the number of its members; and
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(c)</span>
              Invites the public to subscribe to its shares, debentures, or other securities in accordance with applicable laws.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PvtLtdFull;
