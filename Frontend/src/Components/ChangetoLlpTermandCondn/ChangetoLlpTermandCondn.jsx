import React from "react";
import "./ChangetoLlpTermandCondn.css";

const TermsConditions = () => {
  return (
    <section className="llptc-section">
      <div className="llptc-container">
        {/* Heading */}
        <h2 className="llptc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="llptc-subtitle">
          By subscribing to the above plans, you agree to abide by our following additional terms and conditions
        </p>

        {/* List */}
        <ol className="llptc-list">
          <li className="llptc-item">
            DSC shall be from Sign X Class III only.
          </li>

          <li className="llptc-item">
            The fees mentioned above are valid for Contribution up to Rs. 1 Lakhs and in case Contribution is above Rs. 1 Lakhs the additional fee shall be charged as per actuals.
          </li>

          <li className="llptc-item">
            The above fee includes Name application for up to 4 choice names and in case all the 4 names are rejected by the department, an additional fee shall be charged as per actuals.
          </li>

          <li className="llptc-item">
            The Audit of accounts shall be applicable for the respective FY in which the contribution exceeds Rs. 25 Lakhs & Turnover exceeds Rs. 40 Lakhs. Further, the Audit Fees, if any, shall not be a part of our professional fees and shall be payable directly to the Auditor.
          </li>

          <li className="llptc-item">
            In case the above plan does not qualify your requirements, kindly contact our executive, we shall be happy to customise a plan for you.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TermsConditions;
