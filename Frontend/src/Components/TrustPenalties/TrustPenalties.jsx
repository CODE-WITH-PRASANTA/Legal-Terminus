import React from "react";
import "./TrustPenalties.css";

const FeesPenaltiesSection = () => {
  return (
    <section className="fees-section">
      {/* Main heading & intro text */}
      <h2 className="fees-title">Fees &amp; Penalties of Trust Registration</h2>
      <p className="fees-intro">
        Here, the fees involved in the registration process and the risks of not
        registering your trust are discussed.
      </p>

      {/* Grid wrapper */}
      <div className="fees-grid">
        {/* Card 1 – Fees */}
        <article className="fees-card">
          <h3 className="fees-heading">Trust Registration Fees</h3>
          <ul className="fees-list">
            <li>
              <strong>Registration Fees:</strong> Cost around Rs. 2000/- for
              urban &amp; Rs. 1000/- for rural areas.
            </li>
            <li>
              <strong>Stamp duty:</strong> Costs between Rs. 500/- to Rs.
              1,000/-, depending on the state and the value of assets.
            </li>
          </ul>
        </article>

        {/* Card 2 – Penalties */}
        <article className="fees-card">
          <h3 className="fees-heading">Penalties for Non-Registration</h3>
          <ul className="fees-list">
            <li>
              Unregistered trusts cannot legally own property, transfer assets,
              or hold bank accounts in the trust&apos;s name.
            </li>
            <li>
              They cannot file cases in court as a legal entity, limiting their
              ability to enforce rights.
            </li>
            <li>
              Unregistered trusts lose eligibility for tax benefits, which are
              only available to registered entities.
            </li>
            <li>
              Trustees may face personal liability for any financial or legal
              matters related to the trust&apos;s operations.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default FeesPenaltiesSection;
