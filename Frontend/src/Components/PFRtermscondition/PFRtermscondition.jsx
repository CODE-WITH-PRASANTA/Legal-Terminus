import React from "react";
import "./PFRtermscondition.css";

const TermsConditions = () => {
  return (
    <section className="pvtltd-tc-section">
      <div className="pvtltd-tc-container">
        {/* Heading */}
        <h2 className="pvtltd-tc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="pvtltd-tc-subtitle">
          By subscribing to the above plans, you agree to abide by our following
          additional terms and conditions
        </p>

        {/* List */}
        <ol className="pvtltd-tc-list">
          <li className="pvtltd-tc-item">
            The above fees includes only preparation and Noterisation of Partnership Deed and does not include the Stamp Duty.
          </li>

          <li className="pvtltd-tc-item">
            The registration of Partnership Deed with the Registrar of Firms is not mandatory and in case you want us to register the same with the Registrar of Firms additional fee shall be chargeable which varies from State to State.
          </li>

          <li className="pvtltd-tc-item">
            In case the above plan does not qualify your requirements, kindly contact our executive, we shall be happy to customise a plan for you.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TermsConditions;
