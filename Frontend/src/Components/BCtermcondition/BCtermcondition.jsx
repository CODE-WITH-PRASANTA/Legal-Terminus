import React from "react";
import "./BCtermcondition.css";

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
            The fee mentioned above does not include govt. fee applicable, if any, which shall be payable over and above the fee mentioned
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TermsConditions;
