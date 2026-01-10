import React from "react";
import "./LLPDocInfographic.css";

const documentsData = [
  {
    id: 1,
    title: "KYC Documents",
    desc:
      "KYC documents of all proposed directors and shareholders such as ID Proof – PAN and Aadhaar, Address Proof – Telephone Bill / Mobile Bill / Savings Bank Statement.",
    color: "red",
    position: "left",
  },
  {
    id: 2,
    title: "Passport Size Photograph",
    desc:
      "Passport size photograph of all proposed directors and shareholders.",
    color: "orange",
    position: "left",
  },
  {
    id: 3,
    title: "Electricity Bill",
    desc:
      "Electricity bill corresponding to the registered office address of the company.",
    color: "teal",
    position: "left",
  },
  {
    id: 4,
    title: "Rent Agreement",
    desc:
      "Duly notarised rent agreement for the registered office address (if on rent).",
    color: "brown",
    position: "right",
  },
  {
    id: 5,
    title: "No Objection Certificate",
    desc:
      "No Objection Certificate (NOC) from the owner allowing use of the premises as the registered office.",
    color: "purple",
    position: "right",
  },
  {
    id: 6,
    title: "Other Documents",
    desc:
      "Other documents shall be prepared and provided by our team as required.",
    color: "yellow",
    position: "right",
  },
];

const DocumentsInfographic = () => {
  return (
    <section className="llp-docinfo-section">
      <h2 className="llp-docinfo-heading">
        Documents Required for Limited Liability Partnership Registration
      </h2>

      <div className="llp-docinfo-wrapper">
        {/* LEFT ITEMS */}
        <div className="llp-docinfo-column">
          {documentsData
            .filter(item => item.position === "left")
            .map(item => (
              <div key={item.id} className={`llp-docinfo-card ${item.color}`}>
                <span className="llp-docinfo-number">{item.id}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
        </div>

        {/* CENTER INFOGRAPHIC */}
        <div className="llp-docinfo-center">
          <div className="llp-docinfo-circle">
            <span>Documents<br />Required</span>
          </div>
          <div className="llp-docinfo-star"></div>
        </div>

        {/* RIGHT ITEMS */}
        <div className="llp-docinfo-column">
          {documentsData
            .filter(item => item.position === "right")
            .map(item => (
              <div key={item.id} className={`llp-docinfo-card ${item.color}`}>
                <span className="llp-docinfo-number">{item.id}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsInfographic;
