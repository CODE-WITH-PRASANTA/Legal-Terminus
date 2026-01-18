import React from "react";
import "./TMApplicaDocument.css";

const DocumentsInfographic = () => {
  return (
    <section className="TM-Applica-doc-wrapper">
      <h2 className="TM-Applica-doc-heading">
        DOCUMENTS REQUIRED <br />
        <span>FOR PRIVATE LIMITED COMPANY REGISTRATION IN INDIA</span>
      </h2>

      <div className="TM-Applica-doc-container">
        {/* LEFT CARDS */}
        <div className="TM-Applica-doc-col left">
          <div className="TM-Applica-doc-card red">
            <h4>1. KYC Documents</h4>
            <p>
              PAN & Aadhaar of all proposed directors and shareholders.
              Address proof like Telephone Bill / Mobile Bill / Bank Statement.
            </p>
          </div>

          <div className="TM-Applica-doc-card orange">
            <h4>2. Passport Size Photograph</h4>
            <p>
              Passport size photograph of all proposed directors and
              shareholders.
            </p>
          </div>

          <div className="TM-Applica-doc-card teal">
            <h4>3. Electricity Bill</h4>
            <p>
              Latest electricity bill corresponding to the registered office
              address of the company.
            </p>
          </div>
        </div>

        {/* CENTER INFOGRAPHIC */}
        <div className="TM-Applica-doc-center">
          <div className="star">
            <span className="TMApplica-star-item pink"></span>
            <span className="TMApplica-star-item yellow"></span>
            <span className="TMApplica-star-item red"></span>
            <span className="TMApplica-star-item orange"></span>
            <span className="TMApplica-star-item teal"></span>
            <span className="TMApplica-star-item beige"></span>
          </div>
          <div className="TMApplica-center-circle">
            <h3>DOCUMENTS<br />REQUIRED</h3>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="TM-Applica-doc-col right">
          <div className="TM-Applica-doc-card beige">
            <h4>4. Rent Agreement</h4>
            <p>
              Duly notarised rent agreement for the registered office address
              (if on rent).
            </p>
          </div>

          <div className="TM-Applica-doc-card pink">
            <h4>5. No Objection Certificate</h4>
            <p>
              NOC from the owner allowing use of the premises as registered
              office.
            </p>
          </div>

          <div className="TM-Applica-doc-card yellow">
            <h4>6. Other Documents</h4>
            <p>
              Any additional documents as required shall be prepared and
              provided by our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsInfographic;
