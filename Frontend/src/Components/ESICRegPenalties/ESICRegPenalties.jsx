import React from "react";
import "./ESICRegPenalties.css";

const ESICompliance = () => {
  return (
    <section className="esi-comp-section">
      <div className="esi-comp-container">

        {/* BLOCK 1 – PENALTY & COMPLIANCE */}
        <div className="esi-comp-card">
          <h2 className="esi-comp-title">
            Penalty in Failure to get ESI Registration & Returns
          </h2>

          <p className="esi-comp-text">
            In case of non-compliance such as failure to obtain ESIC employer
            registration or non-filing of ESI returns, the employer is liable to
            a penalty of <strong>₹10,000</strong>.
          </p>

          <h3 className="esi-comp-subtitle">
            Post-Registration Compliances under ESI
          </h3>

          <ul className="esi-comp-list">
            <li>Maintenance of attendance register</li>
            <li>Complete register of wages</li>
            <li>Inspection book</li>
            <li>Monthly return & challan by 15th of succeeding month</li>
            <li>Accident register for incidents on premises</li>
          </ul>
        </div>

        {/* BLOCK 2 – CONTRIBUTION & RETURNS */}
        <div className="esi-comp-card">
          <h2 className="esi-comp-title">
            What do You Mean by ESI Monthly Contribution?
          </h2>

          <p className="esi-comp-text">
            ESI is a contributory scheme where both employer and employee must
            contribute at prescribed rates, which may be revised periodically.
          </p>

          <ul className="esi-comp-list">
            <li>
              <strong>Employee Contribution:</strong> 0.75% of basic wages
            </li>
            <li>
              <strong>Employer Contribution:</strong> 3.25% of basic wages
            </li>
          </ul>

          <p className="esi-comp-text">
            Employees earning up to ₹137 per day are exempted from contribution.
            However, the employer must still pay their own share.
          </p>

          <h3 className="esi-comp-subtitle">
            Returns Filed After Registration
          </h3>

          <ul className="esi-comp-list">
            <li>Attendance register</li>
            <li>Form 6 – Register</li>
            <li>Register of wages</li>
            <li>Accident register</li>
            <li>Monthly returns & challans</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ESICompliance;
