import React from "react";
import "./ShopRegDocuments.css";

const documents = [
  {
    title:
      "Any registration certificate such as Certificate of Incorporation / Partnership Deed / GST Certificate / UDYAM Certificate."
  },
  {
    title:
      "Rent agreement and Electricity bill of the registered office address of the organization."
  },
  {
    title:
      "Photo, PAN Card & Aadhaar Card of all Directors / Partners / Proprietor."
  },
  {
    title: "PAN of the Organization"
  },
  {
    title: "Number of Employees"
  },
  {
    title: "Specimen Signature of the Applicant"
  },
  {
    title: "Board Resolution for Authorized Person"
  },
  {
    title:
      "Photo of Sign Board having name and detailed address of the business in Odia and English language."
  },
  {
    title: "A detailed checklist will be provided by our team"
  }
];

const ShopDocuments = () => {
  return (
    <section className="shopdoc-section">
      <h2 className="shopdoc-title">
        Documents Required for Shop & Establishment Registration in India
      </h2>

      <div className="shopdoc-grid">
        {documents.map((doc, index) => (
          <div key={index} className="shopdoc-card">
            <div className="shopdoc-icon">
              <span>{index + 1}</span>
            </div>
            <p className="shopdoc-text">{doc.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopDocuments;
