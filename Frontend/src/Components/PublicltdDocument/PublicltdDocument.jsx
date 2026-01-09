import React from "react";
import "./PublicltdDocument.css";
import {
  FaIdCard,
  FaHome,
  FaBuilding,
  FaFileContract,
  FaSignature,
  FaUserCheck,
  FaWpforms,
  FaClipboardCheck,
  FaFolderOpen,
} from "react-icons/fa";

const documents = [
  { no: "1", title: "Identity Proof", icon: <FaIdCard />, gradient: "g1",
    points: ["PAN Card / Passport", "Aadhaar / Voter ID", "Photograph"] },
  { no: "2", title: "Address Proof", icon: <FaHome />, gradient: "g2",
    points: ["Aadhaar / Driving License", "Utility Bill (2 months)"] },
  { no: "3", title: "Registered Office", icon: <FaBuilding />, gradient: "g3",
    points: ["Rent / Ownership Deed", "Landlord NOC"] },
  { no: "4", title: "LLP Agreement", icon: <FaFileContract />, gradient: "g4",
    points: ["Roles & Responsibilities", "Profit Sharing"] },
  { no: "5", title: "Digital Signature", icon: <FaSignature />, gradient: "g5",
    points: ["DSC of all Partners"] },
  { no: "6", title: "Consent of Partners", icon: <FaUserCheck />, gradient: "g6",
    points: ["Form 9 Consent"] },
  { no: "7", title: "LLP Registration Form", icon: <FaWpforms />, gradient: "g7",
    points: ["Form 2 – Incorporation"] },
  { no: "8", title: "Declaration", icon: <FaClipboardCheck />, gradient: "g8",
    points: ["Form 1 Declaration"] },
  { no: "9", title: "Optional Documents", icon: <FaFolderOpen />, gradient: "g9",
    points: ["Professional Proof", "Corporate Partner Docs"] },
];

const LLPDocuments = () => {
  return (
    <section className="infographic-section">
      <div className="infographic-header">
        <h2>Documents Required for LLP Registration in India</h2>
        <p>A visual infographic representation of mandatory LLP documents</p>
      </div>

      <div className="infographic-grid">
        {/* CENTER HEX HUB */}
        <div className="hex-hub">
          <div className="hex-content">
            <h3>LLP</h3>
            <span>DOCUMENTS</span>
          </div>
        </div>

        {/* CARDS */}
        {documents.map((doc, i) => (
          <div key={i} className={`info-card ${doc.gradient}`}>
            <div className="card-icon">{doc.icon}</div>
            <h4>{doc.title}</h4>
            <ul>
              {doc.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LLPDocuments;
