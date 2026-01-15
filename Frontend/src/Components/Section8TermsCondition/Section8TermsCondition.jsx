import React from "react";
import "./Section8TermsCondition.css";

const Section8TermsCondition = () => {
  return (
    <section className="s8-tc-section">
      <div className="s8-tc-container">

        {/* ================= HEADING ================= */}
        <h2 className="s8-tc-title">TERMS &amp; CONDITIONS</h2>

        {/* ================= SUBTITLE ================= */}
        <p className="s8-tc-subtitle">
          By subscribing to the above plans, you agree to abide by our following
          additional terms and conditions
        </p>

        {/* ================= LIST ================= */}
        <ol className="s8-tc-list">
          <li className="s8-tc-item">
            DSC shall be from Sign X Class III only.
          </li>

          <li className="s8-tc-item">
            The fees mentioned above are valid for contribution up to Rs. 1 Lakhs
            and in case contribution is above Rs. 1 Lakhs, the additional fee
            shall be charged as per actuals.
          </li>

          <li className="s8-tc-item">
            The above fee includes name application for up to 4 choice names and
            in case all the 4 names are rejected by the department, an additional
            fee shall be charged as per actuals.
          </li>

          <li className="s8-tc-item">
            The audit of accounts shall be applicable for the respective FY in
            which the contribution exceeds Rs. 25 Lakhs &amp; turnover exceeds
            Rs. 40 Lakhs. Further, the audit fees, if any, shall not be a part of
            our professional fees and shall be payable directly to the auditor.
          </li>

          <li className="s8-tc-item">
            In case the above plan does not qualify your requirements, kindly
            contact our executive. We shall be happy to customise a plan for you.
          </li>
        </ol>

      </div>
    </section>
  );
};

export default Section8TermsCondition;
