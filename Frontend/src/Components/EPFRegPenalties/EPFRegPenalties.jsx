import React from "react";
import "./EPFRegPenalties.css";

const penalties = [
  "The penalty rate per annum would be 5% if the applicant has delayed the registration by 2 months.",
  "The penalty rate per annum would be 10% if the applicant has delayed the registration by 2–4 months.",
  "The penalty rate per annum would be 15% if the applicant has delayed the registration by 4–6 months.",
  "The penalty rate per annum would be 25% if the applicant has delayed the registration by more than 6 months.",
];

const EPFPenaltyValidity = () => {
  return (
    <section className="epf-pv-wrapper">
      <div className="epf-pv-grid">
        {/* ================= PENALTIES ================= */}
        <div className="epf-pv-card">
          <h2 className="epf-pv-heading">
            Penalties to Employer for not registering with EPFO
          </h2>

          <p className="epf-pv-desc">
            The penalties imposed on the employer for not registering with the
            EPFO are as follows:
          </p>

          <ul className="epf-pv-list">
            {penalties.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ================= VALIDITY & TIMELINE ================= */}
        <div className="epf-pv-card highlight">
          <h2 className="epf-pv-heading">
            Validity of Employees Provident Fund New Registration
          </h2>

          <p className="epf-pv-desc">
            As soon as the organization is registered with the EPFO and gets the
            certificate of employees provident fund new registration, the entity
            is not required to apply again. As long as the entity is in business,
            the EPF registration certificate remains valid.
          </p>

          <p className="epf-pv-desc">
            There is no need to renew the registration certificate as it comes
            with lifetime validity. However, if compliance requirements are not
            met, the registration certificate may be cancelled.
          </p>

          <h3 className="epf-pv-subheading">Timeline for EPF Registration</h3>

          <p className="epf-pv-desc">
            It generally takes around <strong>10–15 days</strong> to obtain the
            EPF registration certificate from EPFO. Employers must apply within
            one month of reaching the minimum employee strength of 20 to avoid
            penalties and fines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EPFPenaltyValidity;
