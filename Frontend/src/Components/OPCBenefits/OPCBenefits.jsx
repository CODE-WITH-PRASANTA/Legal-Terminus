import React from "react";
import "./OPCBenefits.css";

const OPCBenefits = () => {
  return (
    <section className="opc-section">
      <div className="opc-container">
        <h2 className="opc-main-title">Benefits of a One Person Company</h2>
        <p className="opc-intro">
          A One Person Company (OPC) provides protection for limited liability,
          with the personal assets of the owner not being at risk. It also gives
          a separate legal identity, adding credibility and continuity to the
          business.
        </p>

        <div className="opc-grid">
          {/* Card 1 */}
          <div className="opc-card">
            <h3 className="opc-card-title">Business Operation Benefits</h3>
            <ul>
              <li>
                <strong>Full Control:</strong> The sole owner has complete
                authority over operations and decision-making.
              </li>
              <li>
                <strong>Ease of Administration:</strong> Fewer regulatory
                requirements make OPCs easier to manage.
              </li>
              <li>
                <strong>Flexibility:</strong> OPCs can be converted into other
                company types as the business grows.
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="opc-card">
            <h3 className="opc-card-title">Legal & Compliance Benefits</h3>
            <ul>
              <li>
                <strong>Limited Liability Safeguard:</strong> Owner’s liability
                is limited to their investment.
              </li>
              <li>
                <strong>Separate Legal Entity:</strong> OPCs can own assets,
                enter contracts, and sue or be sued independently.
              </li>
              <li>
                <strong>Less Compliance:</strong> No AGM requirement and reduced
                statutory obligations.
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="opc-card">
            <h3 className="opc-card-title">
              Funding & Succession Planning
            </h3>
            <ul>
              <li>
                <strong>Higher Credibility:</strong> Registered status improves
                access to loans and funding.
              </li>
              <li>
                <strong>Succession Planning:</strong> Nominee director ensures
                continuity in case of incapacity.
              </li>
            </ul>
          </div>
        </div>

        <div className="opc-requirements">
          <h2 className="opc-sub-title">
            One Person Company Registration Requirements
          </h2>
          <p>
            For OPC registration, a single individual can act as the sole
            shareholder and director. A nominee must be appointed to ensure
            business continuity in case of incapacity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OPCBenefits;
