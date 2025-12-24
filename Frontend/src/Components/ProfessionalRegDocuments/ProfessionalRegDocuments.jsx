import React from "react";
import "./ProfessionalRegDocuments.css";

const documents = [
  {
    text:
      "Any registration certificate of an organization such as Certificate of Incorporation / Partnership Deed / GST Certificate / UDYAM Certificate."
  },
  {
    text:
      "Rent agreement and Electricity bill of the registered office address of the organization."
  },
  {
    text:
      "Photo, PAN Card & Aadhaar Card of all the Directors / Partners / Proprietor."
  },
  {
    text: "PAN of the Organization"
  },
  {
    text: "Number of Employees"
  },
  {
    text:
      "A detailed checklist will be provided by our team in this respect."
  }
];

const ProfessionalTaxDocuments = () => {
  return (
    <section className="ptdoc-section">
      <h2 className="ptdoc-title">
        Documents Required for Professional Tax Registration in India
      </h2>

      <div className="ptdoc-grid">
        {documents.map((item, index) => (
          <div className="ptdoc-card" key={index}>
            <div className="ptdoc-icon">
              <span>{index + 1}</span>
            </div>
            <p className="ptdoc-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalTaxDocuments;
