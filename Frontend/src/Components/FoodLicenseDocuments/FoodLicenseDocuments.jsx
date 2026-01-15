import React from "react";
import "./FoodLicenseDocuments.css";
import {
  FaIdCard,
  FaUserCheck,
  FaMapMarkerAlt,
  FaHome,
  FaCamera,
  FaFileAlt,
} from "react-icons/fa";

const documents = [
  {
    icon: <FaIdCard />,
    title: "Business Owner’s ID Proof",
    desc: "Aadhar card, PAN card, or Voter ID of the business owner or responsible person.",
    colorClass: "color-1",
  },
  {
    icon: <FaUserCheck />,
    title: "Identity Verification",
    desc: "Government-issued identity proof such as Driving License, Passport, or Aadhaar.",
    colorClass: "color-2",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address Proof",
    desc: "Recent electricity bill, water bill, or property tax receipt of the business premises.",
    colorClass: "color-3",
  },
  {
    icon: <FaHome />,
    title: "Premises Ownership Proof",
    desc: "Rental agreement with NOC from the owner or property ownership documents.",
    colorClass: "color-4",
  },
  {
    icon: <FaCamera />,
    title: "Passport Size Photographs",
    desc: "Recent passport-sized photographs of the applicant and key personnel.",
    colorClass: "color-5",
  },
  {
    icon: <FaFileAlt />,
    title: "Business Documents",
    desc: "Partnership deed, company incorporation certificate, or declaration as applicable.",
    colorClass: "color-6",
  },
];

const FoodLicenseDocuments = () => {
  return (
    <section className="food-doc-section" id="documents">
      <div className="food-doc-container">
        <div className="food-doc-center-text">
          <h2 className="food-doc-heading">Documents Required for Food License</h2>
          <p className="food-doc-sub">
            Below is the list of documents to be submitted for Food License registration in India.
          </p>
        </div>

        <div className="food-doc-layout">
          {/* Left Side */}
          <div className="food-doc-side food-doc-left">
            {documents.slice(0, 3).map((doc, index) => (
              <div
                className={`food-doc-box left ${doc.colorClass}`}
                key={index}
              >
                <div className="food-doc-icon">{doc.icon}</div>
                <div className="food-doc-content">
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Circle */}
          <div className="food-doc-center-circle">
            <div className="food-doc-dotted-ring"></div>
            <div className="food-doc-circle-inner">
              <h3>FOOD LICENSE</h3>
            </div>
          </div>

          {/* Right Side */}
          <div className="food-doc-side food-doc-right">
            {documents.slice(3).map((doc, index) => (
              <div
                className={`food-doc-box right ${doc.colorClass}`}
                key={index}
              >
                <div className="food-doc-icon">{doc.icon}</div>
                <div className="food-doc-content">
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodLicenseDocuments;
