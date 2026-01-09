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
              Registering a company in India is the first step to legally starting your
              business. The Companies Act, 2013, sets the rules for company formation, and
              the Ministry of Corporate Affairs (MCA) oversees the process. Once registered,
              your business gets a legal identity, along with rights and protections under
              Indian law. 
              <br /><br />
              Choosing the right type of One Person Company is important, as it determines
              how your business is owned, managed, and legally protected. Different types of
              company structures suit different business needs, depending on factors such as
              ownership structure. Selecting the correct type also helps ensure smooth
              compliance with legal regulations. Proper registration with the Ministry of
              Corporate Affairs (MCA) allows your company to operate legally, access
              government benefits, and build strong credibility in the market.
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
              Provides full control to a single entrepreneur while enjoying limited liability protection;
            </p>

            <p className="opc-act-point">
              <span className="opc-act-point-label">(b)</span>
              Simplifies the process of business registration and management; and
            </p>

            <p className="opc-act-point">
              <span className="opc-act-point-label">(c)</span>
              Offers legal recognition similar to private limited companies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OPCOverview;
