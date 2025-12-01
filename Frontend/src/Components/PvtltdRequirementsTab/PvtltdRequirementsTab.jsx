import React from "react";
import "./PvtltdRequirementsTab.css";

const RequirementsPvt = () => {
  return (
    <section className="req-section">
      <div className="req-container">
        {/* Heading + intro */}
        <header className="req-header">
          <h2 className="req-title">
            Requirements for Private Limited Company Registration
          </h2>
          <p className="req-subtitle">
            For private limited company registration in India, certain legal and
            procedural requirements must be fulfilled under the Companies Act,
            2013. Meeting these minimum conditions ensures a valid incorporation
            and smooth operation post-registration.
          </p>
        </header>

        {/* Cards */}
        <div className="req-grid">
          {/* 1 */}
          <article className="req-card">
            <h3 className="req-card-title">Minimum Two Directors</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              A private limited company must have at least two directors. At
              least one director must be a resident of India, meaning they have
              stayed in the country for a minimum of 182 days during the
              financial year.
            </p>
          </article>

          {/* 2 */}
          <article className="req-card">
            <h3 className="req-card-title">Minimum Two Shareholders</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              The company must have a minimum of two shareholders. Directors and
              shareholders can be the same individuals, and both individuals and
              corporate entities are eligible to be shareholders.
            </p>
          </article>

          {/* 3 */}
          <article className="req-card">
            <h3 className="req-card-title">Registered Office Address</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              A valid Indian address must be provided as the company&apos;s
              registered office. Proof of address and a NOC (No Objection
              Certificate) from the property owner are required.
            </p>
          </article>

          {/* 4 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Digital Signature Certificate (DSC)
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              All proposed directors must have a valid Digital Signature
              Certificate to digitally sign incorporation documents.
            </p>
          </article>

          {/* 5 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Director Identification Number (DIN)
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Each director must obtain a DIN, which serves as a unique
              identification number issued by the Ministry of Corporate Affairs.
            </p>
          </article>

          {/* 6 */}
          <article className="req-card">
            <h3 className="req-card-title">Company Name</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              A unique name must be chosen for the company, which is not
              identical or similar to existing companies or trademarks. Meeting
              these requirements is essential before filing the SPICe+ form for
              incorporation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPvt;
