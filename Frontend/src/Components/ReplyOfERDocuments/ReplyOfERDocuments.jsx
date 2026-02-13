import React from "react";
import "./ReplyOfERDocuments.css";

const documents = [
  {
    number: "01",
    title: "KYC Documents",
    desc: "PAN & Aadhaar of all proposed directors and shareholders along with address proof such as telephone bill, mobile bill, or bank statement.",
    color: "green",
  },
  {
    number: "02",
    title: "Passport Size Photograph",
    desc: "Recent passport size photographs of all proposed directors and shareholders.",
    color: "blue",
  },
  {
    number: "03",
    title: "Electricity Bill",
    desc: "Latest electricity bill corresponding to the registered office address of the company.",
    color: "red",
  },
  {
    number: "04",
    title: "Rent Agreement",
    desc: "Duly notarised rent agreement for the registered office address, if the premises are rented.",
    color: "orange",
  },
  {
    number: "05",
    title: "No Objection Certificate",
    desc: "NOC from the property owner allowing use of the premises as the registered office.",
    color: "teal",
  },
  {
    number: "06",
    title: "Other Documents",
    desc: "Any additional documents as required by authorities will be prepared and guided by our team.",
    color: "purple",
  },
];

const DocumentsInfographic = () => {
  return (
    <section className="documents-section">
      <h2 className="documents-heading">Documents Required</h2>

      <div className="hexagon-wrapper">
        {documents.map((item, index) => (
          <div key={index} className={`hexagon-card ${item.color}`}>
            <div className="hexagon-top">
              <span>{item.number}</span>
            </div>

            <div className="hexagon-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentsInfographic;
