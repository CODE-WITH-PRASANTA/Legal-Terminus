import React from "react";
import "./PublicltdChecklist.css";

const LLPChecklist = () => {
  return (
    <section className="llp-checklist-wrapper">
      <div className="llp-checklist-inner">

        <h1 className="llp-checklist-title">LLP Incorporation Checklist</h1>

        <p className="llp-checklist-intro">
          After registering your LLP you must follow certain important compliances and
          process requirements that have to be followed after registering an LLP.
          Here is a detailed outline for the same:
        </p>

        {/* GRID WRAPPER */}
        <div className="llp-grid">
          
          {/* Pre-Filing Requirements */}
          <div className="llp-card">
            <h2 className="llp-card-title">Pre-Filing Requirements</h2>
            <p className="llp-card-desc">
              It is essential to fulfill the following requirements prior to filing for LLP incorporation:
            </p>

            <ul className="llp-list">
              <li><strong>Name Reservation:</strong> Select a distinct name for the LLP and reserve the name with the Registrar of Companies (ROC). Name approval is fundamental for LLP registration.</li>

              <li><strong>Partnership Agreement:</strong> Draft an LLP agreement specifying roles, duties, profit-sharing, and decision-making among partners.</li>

              <li><strong>Partner Identification:</strong> Get Digital Signature Certificates (DSC) of all partners who are going to be part of the LLP.</li>

              <li><strong>Registered Office:</strong> Give evidence of the registered office address of the LLP.</li>
            </ul>
          </div>

          {/* Filing Processes */}
          <div className="llp-card">
            <h2 className="llp-card-title">Filing Processes</h2>
            <p className="llp-card-desc">Proceed with the below steps for filing incorporation of LLP:</p>

            <ul className="llp-list">
              <li><strong>Document Preparation:</strong> Prepare documents such as LLP agreement, identity proof, address proof, and partners’ consent.</li>

              <li><strong>Form Submission:</strong> Complete and file Form 2 with the ROC along with the documents and fees.</li>

              <li><strong>Verification:</strong> ROC authenticates documents and approves the application for incorporation of LLP.</li>

              <li><strong>Certificate Issuance:</strong> On approval, ROC issues the Certificate of Incorporation, recording the legal existence of the LLP.</li>
            </ul>
          </div>

          {/* Post-Filing Compliance */}
          <div className="llp-card">
            <h2 className="llp-card-title">Post-Filing Compliance</h2>
            <p className="llp-card-desc">Post-LLP incorporation, be in compliance with continuing requirements:</p>

            <ul className="llp-list">
              <li><strong>LLP Agreement Registration:</strong> File the LLP agreement with the ROC within 30 days of incorporation.</li>

              <li><strong>PAN and TAN Application:</strong> Apply for Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) for the LLP.</li>

              <li><strong>Annual Compliance:</strong> File annual returns and maintain financial records as per LLP Act requirements.</li>

              <li><strong>Changes in LLP:</strong> Notify ROC of any changes in partners, addresses, or LLP agreements through prescribed forms.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LLPChecklist;
