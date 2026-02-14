import React from "react";
import "./ProFOPCCondition.css";

const TermsConditions = () => {
  return (
    <section className="profopc-tc-section">
      <div className="profopc-tc-container">
        {/* Heading */}
        <h2 className="profopc-tc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        {/* <p className="profopc-tc-subtitle">
          By subscribing to the above plans, you agree to abide by our following
          additional terms and conditions
        </p> */}

        {/* List */}
        <ol className="profopc-tc-list">
          <li className="profopc-tc-item">
            The fee mentioned above does not include any govt fees, expenditure towards any newspaper advertisement, certification from any professional, preparation of Statement of accounts and accordingly kindly contact our executive to get an all inclusive fee quote
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TermsConditions;
