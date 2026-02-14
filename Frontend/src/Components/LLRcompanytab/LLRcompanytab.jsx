import React from "react";
import "./LLRcompanytab.css";

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
              Why Choose Labour Licence Registration in India
            </h2>
            <p className="pvt-intro-text">
             Labour License Registration is governed under Contract Labour (Regulation and Abolition) Act, 1970. Every contractor executing any contract work by engaging 20 or more contract labourers has to obtain a licence under the Act. The local District Labour Officers have been declared as Licensing Officers who will grant licenses to the contractors. The object of the Act is to regulate the employment of contract Labour in certain establishments and provide for its abolition in certain circumstances and for matters connected therewith. Below, we address some common queries related to Labour License registration in India.
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
            <h3 className="companies-act-title">Labour Laws / Labour License (India)</h3>

            <p className="companies-act-text">
              As per the applicable Labour Laws (State Labour Department), a Labour License is a mandatory registration for establishments/contractors engaging workers. It ensures legal compliance, worker safety, and proper maintenance of statutory records.
            </p>

             Labour License generally covers the following key compliances:

            <p className="companies-act-point">
              <span className="companies-act-point-label">(a)</span>
              Permission to legally employ workers/contract labour as per prescribed rules;
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(b)</span>
              Compliance with statutory requirements like registers, wages, attendance, working hours, and welfare provisions; and
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(c)</span>
              Adherence to labour inspections and avoidance of penalties for non-compliance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PvtLtdFull;
