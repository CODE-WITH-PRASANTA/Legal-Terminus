import React from "react";
import "./FoodLicenseTermCondition.css";

const FoodLicenseTermCondition = () => {
  return (
    <section className="foodlicensetc-section">
      <div className="foodlicensetc-container">
        {/* Heading */}
        <h2 className="foodlicensetc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="foodlicensetc-subtitle">
          By subscribing to the above plans, you agree to abide by our following
          additional terms and conditions
        </p>

        {/* List */}
        <ol className="foodlicensetc-list">
          <li className="foodlicensetc-item">
            FSSAI application shall be filed through the online portal only.
          </li>

          <li className="foodlicensetc-item">
            The mentioned fees are valid for individuals, proprietorships, or
            small food businesses. Additional charges may apply for companies or
            large-scale operations.
          </li>

          <li className="foodlicensetc-item">
            The above fee includes one-time FSSAI registration; any modification
            or re-issuance later will incur additional government or service
            fees as applicable.
          </li>

          <li className="foodlicensetc-item">
            The applicant must ensure all provided documents (PAN, address
            proof, food business details, etc.) are valid and up-to-date.
            Incorrect details may delay the approval process.
          </li>

          <li className="foodlicensetc-item">
            In case your requirements differ from these plans, kindly contact
            our executive — we will be happy to customise a plan for you.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default FoodLicenseTermCondition;
