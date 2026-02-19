import React from "react";
import "./IncreaseCompanyTab.css";

// Replace with your actual illustration
import pvtIllustration from "../../assets/whypvt-imp.svg";

const IncreaseCompanyTab = () => {
  return (
    <div className="Increase-com-tabfull-wrapper">

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
      <section className="Increase-com-tabintro-section">
        <div className="Increase-com-tabintro-container">
          {/* Illustration */}
          <div className="Increase-com-tabintro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="Increase-com-tabintro-illustration"
            />
          </div>

          {/* Text */}
          <div className="Increase-com-tabintro-content">
            <h2 className="Increase-com-tabintro-title">
              Why Choose Private Limited Company Registration in India
            </h2>
            <p className="Increase-com-tabintro-text">
             A private limited company is a popular choice for a corporate business structure in India. The company has a separate legal identity, and there is separation of ownership and management. Private limited company registration in India provides benefits like less stringent compliance requirements. Such structures are favored by critical stakeholders such as investors and creditors. Additionally, companies can avail the benefits of start-up recognition under the Start-up India Scheme of the Government of India. Below, we address some common queries related to private limited company registration in India.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 3 — COMPANIES ACT
      ============================ */}
      <section className="Increase-com-tabact-section">
        <div className="Increase-com-tabact-container">
          <div className="Increase-com-tabact-card">
            {/* <h3 className="Increase-com-tabact-title">Companies Act, 2013</h3> */}

            <p className="Increase-com-tabact-text">
             Designed for entrepreneurs and growing businesses looking for a smooth, quick, and hassle-free Private Limited Company registration process, with expert assistance at every step.</p>
            <p className="Increase-com-tabact-point">
              <span className="Increase-com-tabact-point-label">(a)</span>
              PAN and Aadhaar of all Directors/Shareholders;
            </p>

            <p className="Increase-com-tabact-point">
              <span className="Increase-com-tabact-point-label">(b)</span>
              Registered office address proof along with latest utility bill (electricity/water/gas); and
            </p>

            <p className="Increase-com-tabact-point">
              <span className="Increase-com-tabact-point-label">(c)</span>
              Supporting documents (if applicable) such as rent agreement/ownership proof and NOC from the property owner.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IncreaseCompanyTab;
