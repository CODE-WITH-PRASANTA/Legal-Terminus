import React from "react";
import "./PublicltdTermsCondition.css";

const TermsConditions = () => {
  return (
    <section className="publicltd-tc-section">
      <div className="publicltd-tc-container">
        {/* Heading */}
        <h2 className="publicltd-tc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="publicltd-tc-subtitle">
          By subscribing to the above plans, you agree to abide by our following additional terms and conditions
        </p>

        {/* List */}
        <ol className="publicltd-tc-list">
          <li className="publicltd-tc-item">
            DSC shall be from Sign X Class III only
          </li>

          <li className="publicltd-tc-item">
            The Stamp Duty varies from state to state and in states such as Andhra Pradesh, Bihar, Chandigarh, Chhattisgarh, Daman And Diu, Delhi, Goa, Gujarat, Karnataka, Kerala, Lakshadweep, Madhya Pradesh, Maharashtra, Punjab, Rajasthan, Telangana, Uttar Pradesh, Uttarakhand fees shall vary accordingly & shall be charged additionally as per actuals
          </li>

          <li className="publicltd-tc-item">
            The fees mentioned above is valid for Authorised Capital up to Rs. 15 Lakhs and in case Authorised Capital is above Rs. 15 Lakhs the additional fee shall be charged as per actuals
          </li>

          <li className="publicltd-tc-item">
            The above fee includes Name application for up to 4 choice names and in case all the 4 names are rejected by the department, the additional fee shall be charged as per actuals
          </li>

          <li className="publicltd-tc-item">
            The Audit Fees shall not be a part of our professional fees and shall be payable directly to the Auditor
          </li>

          <li className="publicltd-tc-item">
            In case the above plan does not qualify your requirements, kindly contact our executive, we shall be happy to customise a plan for you
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TermsConditions;
