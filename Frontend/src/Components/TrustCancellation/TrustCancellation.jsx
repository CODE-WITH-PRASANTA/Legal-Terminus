import React from "react";
import "./TrustCancellation.css";

const CancellationGrounds = () => {
  return (
    <section className="cancel-section">
      <h2 className="cancel-title">Grounds of Cancellation for Trust Registration</h2>

      <p className="cancel-desc">
        Violations below can cancel registration:
      </p>

      <div className="cancel-grid">
        {/* CARD 1 */}
        <div className="cancel-card">
          <h3 className="cancel-heading">1. Administrative Non-Compliance</h3>
          <ul>
            <li>Missing annual ITR-5 or Form 10B filing.</li>
            <li>Failing to audit (when required) or maintain proper books.</li>
            <li>Skipping or inadequately documenting trustee meetings.</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="cancel-card">
          <h3 className="cancel-heading">2. Financial Misappropriation</h3>
          <ul>
            <li>Diverting corpus or income for personal use.</li>
            <li>
              Spending outside the trust’s declared charitable or private
              purposes.
            </li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="cancel-card">
          <h3 className="cancel-heading">3. Operational Violations</h3>
          <ul>
            <li>Halting the activities you promised in your deed.</li>
            <li>
              Amending objectives without trustee and beneficiary consent or
              proper registration.
            </li>
          </ul>
        </div>

        {/* CARD 4 */}
        <div className="cancel-card">
          <h3 className="cancel-heading">4. Legal Infractions</h3>
          <ul>
            <li>Registering with false or forged documents.</li>
            <li>Engaging in prohibited or unlawful acts.</li>
            <li>
              Ignoring court orders or directives from the Charity Commissioner
              or Income-Tax authorities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CancellationGrounds;
