import React from "react";
import "./ParttoPriTermsCondition.css";

const TermsConditions = () => {
  return (
    <section className="Partnership-to-PLC-tc-section">
      <div className="Partnership-to-PLC-tc-container">
        {/* Heading */}
        <h2 className="Partnership-to-PLC-tc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="Partnership-to-PLC-tc-subtitle">
          By subscribing to the above plans, you agree to abide by our following
          additional terms and conditions
        </p>

        {/* List */}
        <ol className="Partnership-to-PLC-tc-list">
          <li className="Partnership-to-PLC-tc-item">
            DSC shall be from Sign X Class III only.
          </li>

          <li className="Partnership-to-PLC-tc-item">
            The fees mentioned above are valid for contribution up to Rs. 1
            Lakhs and in case contribution is above Rs. 1 Lakhs the additional
            fee shall be charged as per actuals.
          </li>

          <li className="Partnership-to-PLC-tc-item">
            The above fee includes name application for up to 4 choice names and
            in case all the 4 names are rejected by the department, an
            additional fee shall be charged as per actuals.
          </li>

          <li className="Partnership-to-PLC-tc-item">
            The audit of accounts shall be applicable for the respective FY in
            which the contribution exceeds Rs. 25 Lakhs &amp; turnover exceeds
            Rs. 40 Lakhs. Further, the audit fees, if any, shall not be a part
            of our professional fees and shall be payable directly to the
            auditor.
          </li>

          <li className="Partnership-to-PLC-tc-item">
            In case the above plan does not qualify your requirements, kindly
            contact our executive, we shall be happy to customise a plan for
            you.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TermsConditions;
