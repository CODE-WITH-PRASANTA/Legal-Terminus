import React from "react";
import "./PublicltdDocument.css";

// ✅ IMPORT THE IMAGE HERE
import ChecklistIllustration from "../../assets/p-2 img.webp";

const documentGroups = [
  {
    title: "Identity Proof of Partners",
    items: [
      "PAN Card (Indian Nationals) or Passport (Foreign Nationals)",
      "Aadhaar Card or Voter ID Card",
      "Passport photograph"
    ]
  },
  {
    title: "Address Proof of Partners",
    items: [
      "Aadhaar Card or Voter ID Card",
      "Passport or Driving License",
      "Utility bills (electricity, water, gas bill or telephone bill) not older than 2 months"
    ]
  },
  {
    title: "Registered Office Proof",
    items: [
      "Rent agreement or lease deed (if rented)",
      "Property receipt or ownership deed (in case of ownership)",
      "NOC from landlord (in case of rent)"
    ]
  },
  {
    title: "Partnership Agreement (LLP Agreement)",
    items: [
      "Duly drafted LLP agreement defining roles, responsibilities, profit-sharing, and decision-making among partners"
    ]
  },
  {
    title: "Digital Signature Certificates (DSC)",
    items: ["DSC of all the partners seeking LLP registration"]
  },
  {
    title: "Consent of Partners",
    items: ["Consent of every partner to be part of LLP in Form 9"]
  },
  {
    title: "Form for LLP Registration",
    items: [
      "Form 2: Incorporation application for LLP including partner details, address & agreement"
    ]
  },
  {
    title: "Declaration by Designated Partners",
    items: [
      "Declaration in Form 1 of LLP for meeting all incorporation requirements"
    ]
  },
  {
    title: "Other Optional Documents",
    items: [
      "Professional qualification proof (if partners are professionals)",
      "Certificate of incorporation/registration (if partners are corporate entities)"
    ]
  }
];

const LLPDocumentsGrid = () => {
  return (
    <section className="llp-docs-wrapper">
      <div className="llp-docs-inner">

        {/* HEADER */}
        <div className="llp-docs-header">
          <div className="llp-docs-text">
            <h1 className="llp-docs-title">
              Documents Required for LLP Registration in India
            </h1>

            <p className="llp-docs-intro">
              In order to register a Limited Liability Partnership (LLP) in India,
              the following documents are generally required:
            </p>
          </div>

          {/* IMAGE IMPORTED PROPERLY */}
          <div className="llp-docs-illustration">
            <img src={ChecklistIllustration} alt="LLP Documents Checklist" />
          </div>
        </div>

        {/* GRID */}
        <div className="llp-docs-grid">
          {documentGroups.map((group, index) => (
            <div key={index} className="llp-doc-card">
              <div className="llp-doc-card-header">
                <span className="llp-doc-pill">{index + 1}</span>
                <h3>{group.title}</h3>
              </div>

              <ul>
                {group.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LLPDocumentsGrid;
