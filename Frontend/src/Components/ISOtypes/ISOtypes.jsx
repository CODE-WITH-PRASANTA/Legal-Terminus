import React from "react";
import "./ISOtypes.css";
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
            Types of ISO Certification In india
          </h2>

          {/* Type 1 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">ISO 9001</h3>
            <p className="pvt-types-text">
             Quality Management System (QMS)
            </p>
          </div>

          {/* Type 2 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">ISO 14001</h3>
            <p className="pvt-types-text">
             Environmental Management System (EMS)
            </p>
          </div>

          {/* Type 3 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">ISO 45001</h3>
            <p className="pvt-types-text">
             Occupational Health & Safety Management System (OH&S)
            </p>
          </div>

          {/* Type 4 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">ISO 22000 / HACCP</h3>
            <p className="pvt-types-text">
             Food Safety Management System (FSMS)
            </p>
          </div>

          {/* Type 5 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">ISO 27001</h3>
            <p className="pvt-types-text">
             Information Security Management System (ISMS)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTypes;
