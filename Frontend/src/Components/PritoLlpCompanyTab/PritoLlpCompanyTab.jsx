import React from "react";
import "./PritoLlpCompanyTab.css";

// Replace with your actual illustration
import pvtIllustration from "../../assets/whypvt-imp.svg";

const PvtLtdFull = () => {
  return (
    <div className="PLC-to-LLP-pvtfull-wrapper">

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
      <section className="PLC-to-LLP-pvtintro-section">
        <div className="PLC-to-LLP-pvtintro-container">
          {/* Illustration */}
          <div className="PLC-to-LLP-pvtintro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="PLC-to-LLP-pvtintro-illustration"
            />
          </div>

          {/* Text */}
          <div className="PLC-to-LLP-pvtintro-content">
            <h2 className="PLC-to-LLP-pvtintro-title">
              Why Choose Private Limited Company Registration
            </h2>
            <p className="PLC-to-LLP-pvtintro-text">
              
Registering a company in India is the first step to legally starting your business. The Companies Act, 2013, sets the rules for company formation, and the Ministry of Corporate Affairs (MCA) oversees the process. Once registered, your business gets a legal identity, along with rights and protections under Indian law. 
<br></br>
<br></br>
Choosing the right type of Private Limited Company is important, as it determines how your business is owned, managed, and legally protected. Different types of private limited companies suit different business needs, depending on factors such as ownership structure. Selecting the correct type also helps ensure smooth compliance with legal regulations. Proper registration with the Ministry of Corporate Affairs (MCA) allows your company to operate legally, access government benefits, and build strong credibility in the market.            </p>
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
