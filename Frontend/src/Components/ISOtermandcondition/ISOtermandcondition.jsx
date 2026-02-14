import React from "react";
import "./ISOtermandcondition.css";

const TermsConditions = () => {
  return (
    <section className="pvtltd-tc-section">
      <div className="pvtltd-tc-container">
        {/* Heading */}
        <h2 className="pvtltd-tc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="pvtltd-tc-subtitle">
          By subscribing to the above plans, you agree to abide by our following additional terms and conditions
        </p>

        {/* List */}
        <ol className="pvtltd-tc-list">
          <li className="pvtltd-tc-item">
            In case the above plan does not qualify your requirements, kindly contact our executive, we shall be happy to customise a plan for you
          </li>

          <li className="pvtltd-tc-item">
            Please note that surveilance charges 50% of the fee shall be applicable every year on IAF Certificates
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TermsConditions;
