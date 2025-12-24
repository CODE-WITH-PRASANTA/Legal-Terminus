import React from "react";
import "./GSTRegDocument.css";
import gstDocsImg from "../../assets/img-1.webp"; 
// ⬆️ replace path with your actual image location

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
    <section className="gst-docs-section">
      <div className="gst-docs-container">
        {/* LEFT IMAGE */}
        <div className="gst-docs-image">
          <img src={gstDocsImg} alt="GST Documents Illustration" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="gst-docs-content">
          <h2>Documents Required for GST Registration Online</h2>

          <p className="gst-docs-desc">
            In order to ensure successful GST registration, several documents are
            required. The documents required for GST registration online in India
            are showcased below:
          </p>

          <ul className="gst-docs-list">
            {documents.map((item, index) => (
              <li key={index} className="gst-doc-item">
                <span className="check-icon">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <button className="gst-docs-btn">
            Apply Online for GST Easily
          </button>
        </div>
      </div>
    </section>
  );
};

export default GSTDocuments;
