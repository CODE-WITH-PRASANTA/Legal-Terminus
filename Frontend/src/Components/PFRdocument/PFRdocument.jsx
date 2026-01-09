import React from "react";
import "./PFRdocument.css";

// MAIN CENTER IMAGE
import wheelImg from "../../assets/document111.jpg";

const DocumentsWheel = () => {
  return (
    <section className="dw-section">
      {/* HEADING */}
      <div className="dw-heading">
        <h2>Documents Required for Private Limited Company Registration</h2>
      </div>

      <div className="dw-container">
        {/* LEFT CARDS */}
        <div className="dw-cards">
          <div className="dw-card">
            <span className="dw-icon red">
              <i className="fa-solid fa-id-card"></i>
            </span>
            <div className="dw-card-content">
              <h4>1. KYC Documents</h4>
              <p>
                Identity and address proof of all directors and shareholders
                including PAN, Aadhaar, mobile bill or bank statement.
              </p>
            </div>
          </div>

          <div className="dw-card">
            <span className="dw-icon orange">
              <i className="fa-solid fa-camera"></i>
            </span>
            <div className="dw-card-content">
              <h4>2. Passport Size Photograph</h4>
              <p>
                Recent passport size photographs of all proposed directors and
                shareholders.
              </p>
            </div>
          </div>

          <div className="dw-card">
            <span className="dw-icon teal">
              <i className="fa-solid fa-bolt"></i>
            </span>
            <div className="dw-card-content">
              <h4>3. Electricity Bill</h4>
              <p>
                Latest electricity bill of the registered office address of the
                company.
              </p>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="dw-center">
          <img src={wheelImg} alt="Documents Required" />
          <span className="dw-center-text">Documents Required</span>
        </div>

        {/* RIGHT CARDS */}
        <div className="dw-cards">
          <div className="dw-card">
            <span className="dw-icon beige">
              <i className="fa-solid fa-file-contract"></i>
            </span>
            <div className="dw-card-content">
              <h4>4. Rent Agreement</h4>
              <p>
                Duly notarized rent agreement for the registered office address
                (if rented).
              </p>
            </div>
          </div>

          <div className="dw-card">
            <span className="dw-icon pink">
              <i className="fa-solid fa-certificate"></i>
            </span>
            <div className="dw-card-content">
              <h4>5. No Objection Certificate</h4>
              <p>
                NOC from the property owner allowing use of premises as
                registered office.
              </p>
            </div>
          </div>

          <div className="dw-card">
            <span className="dw-icon yellow">
              <i className="fa-solid fa-folder-open"></i>
            </span>
            <div className="dw-card-content">
              <h4>6. Other Documents</h4>
              <p>
                Any additional documents required by authorities during
                registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsWheel;
