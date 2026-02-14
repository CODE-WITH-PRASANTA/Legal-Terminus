import React from "react";
import "./LLRtypes.css";
import typesIllustration from "../../assets/pvtltd-types.png"


const PvtTypes = () => {
  return (
    <section className="pvt-types-section">
      <div className="pvt-types-container">
        {/* Left graphic */}
        <div className="pvt-types-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Private Limited Company"
            className="pvt-types-illustration"
          />
        </div>

        {/* Right content */}
        <div className="pvt-types-content">
          <h2 className="pvt-types-title">
            Types of Labour Licence Registration in India
          </h2>

          <p className="pvt-types-intro">
            Labour licenses in India may vary depending on the nature of work and duration of employment/project. Below are the major types:
          </p>

          {/* Type 1 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Temporary Labour License</h3>
            <p className="pvt-types-text">
              Issued for a limited time period or a specific project. Commonly required for construction work and other short-term contracts.
            </p>
          </div>

          {/* Type 2 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Permanent Labour License</h3>
            <p className="pvt-types-text">
              Applicable for businesses/establishments with ongoing operations where contract labour is employed on a regular basis.
            </p>
          </div>

          {/* Type 3 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Renewal of Labour License</h3>
            <p className="pvt-types-text">
              Labour license renewal should be done before the expiry date to ensure continuous compliance and to avoid late fees or penalties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTypes;
