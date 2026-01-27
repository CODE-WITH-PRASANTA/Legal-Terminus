import React from "react";
import "./PartnershipLLPDocument.css";

const documents = [
  {
    step: "01",
    title: "KYC Documents",
    desc: "PAN, Aadhaar & address proof of all directors and shareholders.",
    color: "red",
  },
  {
    step: "02",
    title: "Passport Photograph",
    desc: "Recent passport size photographs of all directors.",
    color: "orange",
  },
  {
    step: "03",
    title: "Electricity Bill",
    desc: "Latest electricity bill of registered office address.",
    color: "yellow",
  },
  {
    step: "04",
    title: "Rent Agreement",
    desc: "Notarised rent agreement if office is on rent.",
    color: "green",
  },
  {
    step: "05",
    title: "No Objection Certificate",
    desc: "NOC from the property owner for registered office use.",
    color: "blue",
  },
  {
    step: "06",
    title: "Other Documents",
    desc: "Any additional documents required by authorities.",
    color: "purple",
  },
];

const ProFPvtDocuments = () => {
  return (
    <section className="Partnership-llp-ring-section">
      <div className="Partnership-llp-ring-wrapper">
        <h2 className="Partnership-llp-ring-title">Documents Required</h2>

        <div className="Partnership-llp-ring">
          {/* CENTER */}
          <div className="Partnership-llp-ring-center">
            <h3>Documents</h3>
            <p>For Company Registration</p>
          </div>

          {/* STEPS */}
          {documents.map((item, index) => (
            <div
              key={index}
              className={`Partnership-llp-ring-step step-${index + 1} ${item.color}`}
            >
              <span className="step-number">{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProFPvtDocuments;
