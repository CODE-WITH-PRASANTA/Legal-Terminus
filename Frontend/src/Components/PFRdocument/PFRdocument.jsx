import React from "react";
import "./PFRdocument.css";

// REACT ICONS
import {
  FaIdCard,
  FaCamera,
  FaBolt,
  FaFileContract,
  FaCertificate,
  FaFolderOpen,
} from "react-icons/fa";

const DocumentsInfographic = () => {
  return (
    <section className="di-section">
      <h2 className="di-heading">
        Documents Required for Partnership firm registration in india
      </h2>

      <div className="di-wrapper">
        {/* LEFT COLUMN */}
        <div className="di-column">
          <div className="di-card di-left">
            <span className="di-number">1</span>
            <FaIdCard className="di-icon" />
            <h4>KYC Documents</h4>
            <p>
              PAN & Aadhaar, Address Proof – Telephone Bill / Mobile Bill /
              Savings Bank Statement.
            </p>
          </div>

          <div className="di-card di-left">
            <span className="di-number">2</span>
            <FaCamera className="di-icon" />
            <h4>Passport Size Photograph</h4>
            <p>Passport size photograph of all proposed directors.</p>
          </div>

          <div className="di-card di-left">
            <span className="di-number">3</span>
            <FaBolt className="di-icon" />
            <h4>Electricity Bill</h4>
            <p>
              Electricity bill corresponding to the registered office address.
            </p>
          </div>
        </div>

        {/* CENTER INFOGRAPHIC */}
        <div className="di-center">
          <div className="di-rays">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="di-circle">
            <span>Documents Required</span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="di-column">
          <div className="di-card di-right">
            <span className="di-number">4</span>
            <FaFileContract className="di-icon" />
            <h4>Rent Agreement</h4>
            <p>
              Duly notarised rent agreement for registered office (if rented).
            </p>
          </div>

          <div className="di-card di-right">
            <span className="di-number">5</span>
            <FaCertificate className="di-icon" />
            <h4>No Objection Certificate</h4>
            <p>
              NOC from the owner allowing use of premises as registered office.
            </p>
          </div>

          <div className="di-card di-right">
            <span className="di-number">6</span>
            <FaFolderOpen className="di-icon" />
            <h4>Other Documents</h4>
            <p>Additional documents as required by our team.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsInfographic;
