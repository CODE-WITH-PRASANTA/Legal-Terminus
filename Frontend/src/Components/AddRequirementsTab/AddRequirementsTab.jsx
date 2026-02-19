import React from "react";
import "./AddRequirementsTab.css";

const AddRequirementsTab = () => {
  return (
    <section className="Add-reqsection">
      <div className="Add-reqcontainer">
        {/* Heading + intro */}
        <header className="Add-reqheader">
          <h2 className="Add-reqtitle">
            Benefits of Private Limited Company Registration in India
          </h2>
          <p className="Add-reqsubtitle">
            The Ministry of Corporate Affairs (MCA) manages the company registration process in India. It includes registering the business with the Registrar of Companies (RoC) and obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN).


          </p>
        </header>

        {/* Cards */}
        <div className="Add-reqgrid">
          {/* 1 */}
          <article className="Add-reqcard">
            <h3 className="Add-reqcard-title">Separate Legal Identity</h3>
            <div className="Add-reqcard-underline" />
            <p className="Add-reqcard-text">
Once registered, a company becomes its own legal entity. It can own property, sign contracts, and operate separately from its owners.

            </p>
          </article>

          {/* 2 */}
          <article className="Add-reqcard">
            <h3 className="Add-reqcard-title">Limited Liability Protection</h3>
            <div className="Add-reqcard-underline" />
            <p className="Add-reqcard-text">
              The personal assets of shareholders are safe from company debts and risks, ensuring financial protection.
            </p>
          </article>

          {/* 3 */}
          <article className="Add-reqcard">
            <h3 className="Add-reqcard-title">
              Access to Government Schemes
            </h3>
            <div className="Add-reqcard-underline" />
            <p className="Add-reqcard-text">
              Registered companies can benefit from government schemes like Startup India for tax benefits and easier compliance, and Make in India for incentives and support for manufacturing businesses.
            </p>
          </article>

          {/* 4 */}
          <article className="Add-reqcard">
            <h3 className="Add-reqcard-title">
              Increased Credibility
            </h3>
            <div className="Add-reqcard-underline" />
            <p className="Add-reqcard-text">
              A registered company is more trusted by investors, clients, and vendors, making it easier to get funding and partnerships.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AddRequirementsTab;
