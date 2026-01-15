import React from "react";
import "./ProFPLCDocument.css";

const ProFPvtDocuments = () => {
  return (
    <section className="ProFPLC-infographic-section">
      <div className="ProFPLC-info-container">
        <h2 className="ProFPLC-info-title">Documents Required</h2>

        <div className="ProFPLC-circle">
          {/* CENTER */}
          <div className="ProFPLC-center">
            <h3>6</h3>
            <p>Mandatory<br />Documents</p>
          </div>

          {/* SEGMENTS */}
          <div className="ProFPLC-segment seg-1">
            <span>01</span>
            <h4>KYC Documents</h4>
            <p>PAN, Aadhaar & address proof of directors & shareholders</p>
          </div>

          <div className="ProFPLC-segment seg-2">
            <span>02</span>
            <h4>Photograph</h4>
            <p>Passport size photographs of all directors</p>
          </div>

          <div className="ProFPLC-segment seg-3">
            <span>03</span>
            <h4>Electricity Bill</h4>
            <p>Registered office address proof</p>
          </div>

          <div className="ProFPLC-segment seg-4">
            <span>04</span>
            <h4>Rent Agreement</h4>
            <p>Notarised agreement if office is rented</p>
          </div>

          <div className="ProFPLC-segment seg-5">
            <span>05</span>
            <h4>NOC</h4>
            <p>No Objection Certificate from property owner</p>
          </div>

          <div className="ProFPLC-segment seg-6">
            <span>06</span>
            <h4>Other Documents</h4>
            <p>Additional documents as required</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProFPvtDocuments;
