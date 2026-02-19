import React from "react";
import "./ChangeaddComTermsCondition.css";

const ChangeaddComTermsCondition = () => {
  return (
    <section className="Change-add-com-Tc-tc-section">
      <div className="Change-add-com-Tc-tc-container">
        {/* Heading */}
        <h2 className="Change-add-com-Tc-tc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="Change-add-com-Tc-tc-subtitle">
          By subscribing to the above plans, you agree to abide by our following
          additional terms and conditions
        </p>

        {/* List */}
        <ol className="Change-add-com-Tc-tc-list">
          <li className="Change-add-com-Tc-tc-item">
            The Stamp Duty varies from state to state and shall be charged as per actuals.
          </li>

          <li className="Change-add-com-Tc-tc-item">
            The fees mentioned above are valid for Authorised Capital up to Rs. 15 Lakhs, where the government fee is minimum. For above Rs. 15 Lakhs, the government fee shall increase accordingly.
          </li>

          <li className="Change-add-com-Tc-tc-item">
            The above fee includes Name application for up to 4 choice names and in case all the 4 names are rejected by the department, an additional fee shall be charged.
          </li>

          <li className="Change-add-com-Tc-tc-item">
            The Audit Fees shall not be a part of our professional fees and shall be payable directly to the Auditor.
          </li>

          <li className="Change-add-com-Tc-tc-item">
            In case the above plan does not qualify your requirements, kindly contact our executive, we shall be happy to customize a plan for you.
          </li>

           <li className="Change-add-com-Tc-tc-item">
            18% GST applicable on professional fee.
          </li>

           <li className="Change-add-com-Tc-tc-item">
            Government fees and DSC charges shall be payable as per actuals.
          </li>

           <li className="Change-add-com-Tc-tc-item">
            In case any of the Directors/ Shareholders is a Foreign National or NRI, the incorporation fees shall be determined with mutual discussion.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ChangeaddComTermsCondition;
