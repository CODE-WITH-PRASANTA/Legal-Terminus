import React from "react";
import "./ESICRegListicles.css";

const ESIDocuments = () => {
  return (
    <section className="esi-doc-section">
      <div className="esi-doc-container">

        {/* PART 1 */}
        <div className="esi-doc-block">
          <h2 className="esi-doc-title">
            What are the Documents Required for ESI Registration in India?
          </h2>

          <p className="esi-doc-intro">
            Since the registration process is completely online, no physical
            documents are required. The following documents are needed during
            online filing:
          </p>

          <ul className="esi-doc-list">
            <li>Registration certificate under Factories Act / Shops Act</li>
            <li>Company registration certificate / Partnership deed</li>
            <li>Copy of Bank Statement</li>
            <li>Copy of License issued in establishment name</li>
            <li>MOA & AOA of the Company</li>
            <li>List of all employees</li>
            <li>Electricity Bill copy</li>
            <li>Rent / Lease Agreement</li>
            <li>PAN of business and employees</li>
            <li>Board Resolution</li>
            <li>Employee compensation details</li>
            <li>Cancelled cheque of company bank account</li>
            <li>List of Directors & Shareholders</li>
            <li>Attendance register of employees</li>
          </ul>
        </div>

        {/* PART 2 */}
        <div className="esi-doc-block">
          <h3 className="esi-doc-subtitle">
            If any employee is already registered under ESIC
          </h3>

          <ul className="esi-doc-list">
            <li>Employee Insurance Number</li>
            <li>Date of Appointment</li>
          </ul>

          <h3 className="esi-doc-subtitle">
            If employee is not registered with ESIC
          </h3>

          <ul className="esi-doc-list">
            <li>Name of employee</li>
            <li>Father’s / Husband’s name</li>
            <li>Address</li>
            <li>Date of Birth</li>
            <li>Date of Appointment</li>
            <li>Nominee details</li>
            <li>Bank account details (IFSC, branch, account number)</li>
            <li>Employer code number</li>
          </ul>
        </div>

        {/* PART 3 */}
        <div className="esi-doc-block">
          <h3 className="esi-doc-subtitle">
            Details of Previous Employer
          </h3>

          <ul className="esi-doc-list">
            <li>Name of employer</li>
            <li>Employer Insurance Number</li>
            <li>Employer code number</li>
            <li>Contact number</li>
            <li>Address of employer</li>
          </ul>

          <h3 className="esi-doc-subtitle">
            Details of Current Employer
          </h3>

          <ul className="esi-doc-list">
            <li>Employer code number</li>
            <li>Employer Insurance Number</li>
            <li>Name of employer</li>
            <li>Address of employer</li>
            <li>Contact number of employee</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ESIDocuments;
