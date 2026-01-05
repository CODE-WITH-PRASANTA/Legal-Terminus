import React from "react";
import "./GSTRegDocument.css";
import gstDocsImg from "../../assets/img-1.webp";

const documents = [
  "Applicant's PAN Card",
  "Applicant's Aadhar Card",
  "Proof of business registration / Company Registration Certificate of Incorporation",
  "Identity proof of Promoters/Director",
  "Address proof of Promoters/Director",
  "Photographs of Promoters/Director",
  "Address proof of the place of business",
  "Bank Account statement / Cancelled cheque",
  "Digital Signature Certificate (DSC)",
  "Lease / Rent Agreement",
  "Letter of Authorization / Board Resolution for Authorized Signatory",
];

const GSTDocuments = () => {
  return (
    <section className="GSTDocuments-section">
      <div className="GSTDocuments-container">

        {/* LEFT IMAGE */}
        <div className="GSTDocuments-image">
          <img src={gstDocsImg} alt="GST Documents Illustration" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="GSTDocuments-content">
          <h2>Documents Required for GST Registration Online</h2>

          <p className="GSTDocuments-desc">
            In order to ensure successful GST registration, several documents are
            required. The documents required for GST registration online in India
            are showcased below:
          </p>

          <ul className="GSTDocuments-list">
            {documents.map((item, index) => (
              <li key={index} className="GSTDocuments-item">
                <span className="GSTDocuments-check">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <button className="GSTDocuments-btn">
            Apply Online for GST Easily
          </button>
        </div>

      </div>
    </section>
  );
};

export default GSTDocuments;
