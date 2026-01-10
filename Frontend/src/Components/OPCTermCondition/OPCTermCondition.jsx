import React from "react";
import "./OPCTermCondition.css";

const OPCTermCondition = () => {
  return (
    <section className="opctc-section">
      <div className="opctc-container">
        {/* Heading */}
        <h2 className="opctc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="opctc-subtitle">
          By subscribing to the above plans, you agree to abide by our following
          additional terms and conditions
        </p>

        {/* List */}
        <ol className="opctc-list">
          <li className="opctc-item">
            DSC shall be from Sign X Class III only.
          </li>

          <li className="opctc-item">
            The fees mentioned above are valid for contribution up to Rs. 1
            Lakh and in case contribution is above Rs. 1 Lakh, additional fees
            shall be charged as per actuals.
          </li>

          <li className="opctc-item">
            The above fee includes name application for up to 4 choice names and
            in case all 4 names are rejected by the department, an additional fee
            shall be charged as per actuals.
          </li>

          <li className="opctc-item">
            The audit of accounts shall be applicable for the respective FY in
            which the contribution exceeds Rs. 25 Lakhs &amp; turnover exceeds
            Rs. 40 Lakhs. Further, the audit fees, if any, shall not be a part
            of our professional fees and shall be payable directly to the
            auditor.
          </li>

          <li className="opctc-item">
            In case the above plan does not qualify your requirements, kindly
            contact our executive — we shall be happy to customise a plan for
            you.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default OPCTermCondition;
