import React from "react";
import "./CIOdocument.css";
import {
  FaIdCard,
  FaCamera,
  FaBolt,
  FaFileContract,
  FaHome,
  FaFolderOpen,
} from "react-icons/fa";

const ProFPvtDocuments = () => {
  return (
    <section className="ProFPLC-infographic-section">
      <div className="ProFPLC-info-container">
        <h2 className="ProFPLC-info-title">Documents Required for Change In Name(Company)</h2>

        <div className="ProFPLC-rotator">
          {/* SVG CONNECTOR LINES */}
          <svg className="ProFPLC-lines" viewBox="0 0 600 600">
            <line x1="300" y1="300" x2="100" y2="120" />
            <line x1="300" y1="300" x2="300" y2="40" />
            <line x1="300" y1="300" x2="500" y2="120" />
            <line x1="300" y1="300" x2="500" y2="480" />
            <line x1="300" y1="300" x2="300" y2="560" />
            <line x1="300" y1="300" x2="100" y2="480" />
          </svg>

          {/* CENTER CIRCLE (STATIC) */}
          <div className="ProFPLC-center">
           
            <p>
              Mandatory <br /> Documents
            </p>
          </div>

          {/* CARDS */}
          <div className="ProFPLC-segment seg-1">
            <div className="icon"><FaIdCard /></div>
            <h4>KYC Documents</h4>
            <p>PAN, Aadhaar & address proof</p>
          </div>

          <div className="ProFPLC-segment seg-2">
            <div className="icon"><FaCamera /></div>
            <h4>Photograph</h4>
            <p>Passport size photos</p>
          </div>

          <div className="ProFPLC-segment seg-3">
            <div className="icon"><FaBolt /></div>
            <h4>Electricity Bill</h4>
            <p>Office address proof</p>
          </div>

          <div className="ProFPLC-segment seg-4">
            <div className="icon"><FaFileContract /></div>
            <h4>Rent Agreement</h4>
            <p>Notarised agreement</p>
          </div>

          <div className="ProFPLC-segment seg-5">
            <div className="icon"><FaHome /></div>
            <h4>NOC</h4>
            <p>From property owner</p>
          </div>

          <div className="ProFPLC-segment seg-6">
            <div className="icon"><FaFolderOpen /></div>
            <h4>Other Documents</h4>
            <p>Additional documents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProFPvtDocuments;
