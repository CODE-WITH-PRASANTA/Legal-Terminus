import React from "react";
import "./ESICRegBenefits.css";

const benefitList = [
  "Unemployment Benefits",
  "Medical Benefits",
  "Maternity Benefits",
  "Deceased Employee",
  "Funeral Expenses",
  "Retirement Benefits",
  "Benefits for Permanent Disablement",
  "Sickness Benefits"
];

const ESIBenefits = () => {
  return (
    <section className="esi-benefits-section">
      <div className="esi-benefits-container">

        {/* LEFT – BENEFITS LIST */}
        <div className="esi-benefits-list">
          <h2 className="esi-benefits-title">
            What are the Benefits of ESI Registration
          </h2>

          <ul className="esi-benefits-points">
            {benefitList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT – DETAILS */}
        <div className="esi-benefits-details">

          <div className="esi-benefit-card">
            <h3>Sickness Benefits</h3>
            <p>
              Sickness benefits are provided at the rate of 70% of salary if the
              sickness continues for more than 91 days in a year and is duly
              certified.
            </p>
          </div>

          <div className="esi-benefit-card">
            <h3>Medical Benefits</h3>
            <p>
              Comprehensive medical care is provided to insured persons and
              their family members with no ceiling on medical expenditure.
              Medical benefits also extend to retired and permanently disabled
              persons on nominal annual contribution.
            </p>
          </div>

          <div className="esi-benefit-card">
            <h3>Maternity Benefits</h3>
            <p>
              Paid maternity leave for women employees is provided for three
              months, extendable by one additional month on medical advice,
              subject to contribution requirements.
            </p>
          </div>

          <div className="esi-benefit-card">
            <h3>Deceased Employee</h3>
            <p>
              In case of death during employment, 90% of the insured person’s
              salary is payable to the family members.
            </p>
          </div>

          <div className="esi-benefit-card">
            <h3>Funeral Expenses</h3>
            <p>
              An amount of ₹10,000 is payable towards funeral expenses to the
              dependents or the person performing the last rites.
            </p>
          </div>

          <div className="esi-benefit-card">
            <h3>Retirement Benefits</h3>
            <p>
              Medical care and benefits continue after retirement or in old age
              for insured persons.
            </p>
          </div>

          <div className="esi-benefit-card">
            <h3>Benefits for Permanent Disablement</h3>
            <p>
              In case of permanent disablement, 90% of salary is provided as a
              monthly insurance benefit.
            </p>
          </div>

          <div className="esi-benefit-card">
            <h3>Unemployment Benefits</h3>
            <p>
              Insured persons unemployed after three years of insurance are
              eligible for unemployment allowance under the Rajiv Gandhi
              Shramik Kalyan Yojana.
            </p>

            <ul className="esi-sub-points">
              <li>50% of wages payable for up to one year</li>
              <li>Medical care for self and family during unemployment</li>
              <li>Vocational training with expenses borne by ESIC</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ESIBenefits;
