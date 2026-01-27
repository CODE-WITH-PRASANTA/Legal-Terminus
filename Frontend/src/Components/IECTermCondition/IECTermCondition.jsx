import React from "react";
import "./IECTermCondition.css";

const IECTermCondition = () => {
  return (
    <section className="iectc-section">
      <div className="iectc-container">
        {/* Heading */}
        <h2 className="iectc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="iectc-subtitle">
          By subscribing to the above plans, you agree to abide by our following
          additional terms and conditions
        </p>

        {/* List */}
        <ol className="iectc-list">
          <li className="iectc-item">
            IEC application shall be filed through the DGFT online portal only.
          </li>

          <li className="iectc-item">
            The mentioned fees are valid for individuals, proprietorships, or
            small businesses. Additional charges may apply for companies or LLPs.
          </li>

          <li className="iectc-item">
            The above fee includes one-time IEC application; any modification
            or re-issuance later will incur additional government or service
            fees as applicable.
          </li>

          <li className="iectc-item">
            The applicant must ensure all provided documents (PAN, address
            proof, bank certificate, etc.) are valid and up-to-date. Incorrect
            details may delay the approval process.
          </li>

          <li className="iectc-item">
            In case your requirements differ from these plans, kindly contact
            our executive — we will be happy to customise a plan for you.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default IECTermCondition;
