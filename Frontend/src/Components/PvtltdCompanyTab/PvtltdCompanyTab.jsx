import React from "react";
import "./PvtltdCompanyTab.css";

// Replace with your actual illustration
import pvtIllustration from "../../assets/f-2 img.webp";

const PvtLtdFull = () => {
  return (
    <div className="pvt-full-wrapper">

      {/* ===========================
          SECTION 1 — OVERVIEW
      ============================ */}
      <div className="overview-wrapper">
        <h2 className="overview-title">Overview</h2>

        <p className="overview-text">
          Private limited company registration in India provides limited
          liability, legal independence, and access to tax benefits. Governed
          by the Companies Act, 2013, it requires a DSC, DIN, and documents
          like ID and address proof. The SPICe+ form enables combined
          application for name approval, incorporation, PAN, TAN, and GST.
          Once approved by the RoC, you receive a Certificate of
          Incorporation, allowing the company to operate legally, own assets,
          and sign contracts. Compliance tasks like annual returns and
          financial reporting are mandatory post-registration.
        </p>

        <p className="overview-text">
          Vakilsearch streamlines the entire process by providing
          comprehensive end-to-end support for private limited company
          registration, legal documentation, and regulatory compliance. Our
          expert team ensures every step is handled efficiently and
          accurately, while maintaining complete transparency in pricing with
          no hidden costs.
        </p>
      </div>

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
              What is a Private Limited Company (Pvt Ltd)?
            </h2>
            <p className="pvt-intro-text">
              A private limited company (Pvt Ltd) is a separate legal entity
              registered under the Companies Act, 2013, offering limited
              liability protection to its members. It restricts share transfers,
              requires a registered office address, and is ideal for startups
              and SMEs seeking credibility, funding, and control.
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
              As per Section 2(68) of the Companies Act, 2013, a private limited
              company means a company having a minimum paid-up share capital as
              may be prescribed, and which by its articles of association:
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(a)</span>
              Restricts the right to transfer its shares;
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(b)</span>
              Limits the number of its members to 200 (excluding present and
              former employees); and
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(c)</span>
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
