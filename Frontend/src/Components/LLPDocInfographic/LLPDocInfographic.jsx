import React from "react";
import "./LLPDocInfographic.css";

const documentsData = [
  {
    id: 1,
    desc:
      "KYC documents - All the Proposed Designated Partners and Partners such as :- >as ID Proof - PAN and Aadhaar >as Address Proof - Telephone Bill/ Mobile Bill/ Savings Bank Statement",
    color: "red",
    position: "left",
  },
  {
    id: 2,
    desc:
      "Passport size Photograph - All the Proposed Designated Partners and Partners",
    color: "orange",
    position: "left",
  },
  {
    id: 3,
    desc:
      "Electricity bill corresponding to the registered office address of the proposed LLP",
    color: "teal",
    position: "left",
  },
  {
    id: 4,
    desc:
      "Rent Agreement duly notarised with respect to the registered office address of the proposed LLP (if on rent)",
    color: "brown",
    position: "right",
  },
  {
    id: 5,
    desc:
      "A No Objection Certificate (NOC) from the owner for use of his/her premise as registered office of the proposed LLP",
    color: "purple",
    position: "right",
  },
  {
    id: 6,
    desc:
      "Other documents shall be prepared and provided by our team",
    color: "yellow",
    position: "right",
  },
];

const DocumentsInfographic = () => {
  return (
    <section className="llp-docinfo-section">
      <h2 className="llp-docinfo-heading">
        Documents Required For Limited Liability Partnership Registration in India
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
