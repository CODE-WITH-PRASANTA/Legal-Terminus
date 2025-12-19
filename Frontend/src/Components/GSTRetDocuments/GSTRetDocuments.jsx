import React from "react";
import "./GSTRetDocuments.css";
import docsImg from "../../assets/img-1.webp"; // replace with your image path

const documents = [
  "Certificate of Incorporation / LLP Agreement",
  "PAN, AOA, and MOA of the Company / LLP / Proprietorship",
  "Resolution signed by the Board of Members / Partners / Proprietors",
  "Digital signature",
  "List and type of Invoices (B2B Services, B2C Services)",
  "Telephone bill, bank account statement, or driving license of directors",
  "Customer’s GSTIN",
  "Taxable Value and Rate of GST",
  "Amount of CGST, SGST, IGST, and GST Cess applicable",
  "Consolidated intra-state and inter-state sales",
  "HSN-wise summary details",
  "Summary of requisite Documents (Debit and Credit Notes)",
  "Required GST return forms",
];

const GSTDocuments = () => {
  return (
    <section className="gst-docs-section">
      <div className="gst-docs-container">
        {/* LEFT IMAGE */}
        <div className="gst-docs-image">
          <img src={docsImg} alt="GST Documents Illustration" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="gst-docs-content">
          <h2 className="gst-docs-title">
            Documents Needed to File GST Return Online
          </h2>

          <p className="gst-docs-subtitle">
            The following are some of the documents required to file GST return online:
          </p>

          <ul className="gst-docs-list">
            {documents.map((item, index) => (
              <li className="gst-docs-item" key={index}>
                <span className="gst-docs-check">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="gst-docs-btn">
            Get started with CorpBIZ
          </button>
        </div>
      </div>
    </section>
  );
};

export default GSTDocuments;
