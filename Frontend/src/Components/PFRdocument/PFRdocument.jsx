import React from "react";
import "./PFRdocument.css";
import { FaUser, FaSearch, FaBullseye, FaComments } from "react-icons/fa";

const docs = [
  {
    id: "01",
    title: "KYC Documents",
    desc: "PAN, Aadhaar, Address proof and bank statement of all partners.",
    icon: <FaUser />,
    color: "one",
  },
  {
    id: "02",
    title: "Passport Photograph",
    desc: "Passport size photographs of all partners.",
    icon: <FaSearch />,
    color: "two",
  },
  {
    id: "03",
    title: "Electricity Bill",
    desc: "Latest electricity bill of registered office address.",
    icon: <FaBullseye />,
    color: "three",
  },
  {
    id: "04",
    title: "Other Documents",
    desc: "Any other documents as required by authorities.",
    icon: <FaComments />,
    color: "four",
  },
];

const PartnershipDocumentsInfographic = () => {
  return (
    <section className="pdi-section">
      <h1 className="pdi-heading">
        Documents Required for Partnership Firm Registration In India
      </h1>

      <div className="pdi-wrapper">
        {/* CENTER CIRCLE */}
        <div className="pdi-center">
          <div className="pdi-circle">
            <h3>Documents<br />Required</h3>
            <p>Complete checklist for registration</p>
          </div>
        </div>

        {/* RIGHT INFOGRAPHIC */}
        <div className="pdi-steps">
          {docs.map((item, index) => (
            <div key={item.id} className={`pdi-step pdi-${item.color}`}>
              <span className="pdi-line"></span>
              <div className="pdi-number">{item.id}</div>
              <div className="pdi-card">
                <div className="pdi-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipDocumentsInfographic;