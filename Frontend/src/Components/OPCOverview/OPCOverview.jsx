import React from "react";
import "./OPCOverview.css";
import opcIllustration from "../../assets/whypvt-imp1.svg"; // Replace with your actual image if needed

const OPCOverview = () => {
  return (
    <div className="opc-full-wrapper">

      {/* ===========================
          SECTION 1 — INTRO
      ============================ */}
      <section className="opc-intro-section">
        <div className="opc-intro-container">
          {/* Illustration */}
          <div className="opc-intro-illustration-wrap">
            <img
              src={opcIllustration}
              alt="One Person Company illustration"
              className="opc-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="opc-intro-content">
            <h2 className="opc-intro-title">
              Why Choose One Person Company Registration
            </h2>
            <p className="opc-intro-text">
              A One Person Company (OPC) is an ideal business structure for individuals who want to start a company with full ownership and legal protection. It allows a single founder to run the business independently while enjoying the benefits of a corporate identity. 
              <br /><br />
              OPC is registered under the Companies Act, 2013, and regulated by the Ministry of Corporate Affairs (MCA). Once incorporated, the business becomes a separate legal entity, which means it can open a bank account, sign contracts, raise invoices, and operate legally in India.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 2 — COMPANIES ACT
      ============================ */}
      <section className="opc-act-section">
        <div className="opc-act-container">
          <div className="opc-act-card">
            <h3 className="opc-act-title">Companies Act, 2013</h3>

            <p className="opc-act-text">
              As per Section 2(62) of the Companies Act, 2013, a One Person
              Company means a company which has only one person as a member.
            </p>

            <p className="opc-act-point">
              <span className="opc-act-point-label">(a)</span>
              Allows a single entrepreneur to start a company with complete control and limited liability protection.
            </p>

            <p className="opc-act-point">
              <span className="opc-act-point-label">(b)</span>
              Makes business registration and management simpler and more structured compared to traditional setups.
            </p>

            <p className="opc-act-point">
              <span className="opc-act-point-label">(c)</span>
              Makes business registration and management simpler and more structured compared to traditional setups.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OPCOverview;
