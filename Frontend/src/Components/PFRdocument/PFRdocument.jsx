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
        Documents Required for Partnership Firm Registration in India
      </h2>

      <div className="di-wrapper">
        {/* LEFT COLUMN */}
        <div className="di-column">
          <div className="di-card di-left">
            {/* <span className="di-number">1</span> */}
            <FaIdCard className="di-icon" />
            <p>
              Rs. 200/- stamp paper on name of any of the proposed Partner
            </p>
          </div>

          <div className="di-card di-left">
            {/* <span className="di-number">2</span> */}
            <FaCamera className="di-icon" />
            <p>KYC documents - All the Proposed Partners such as :-as ID Proof - PAN and Aadhaar</p>
          </div>

          {/* <div className="di-card di-left"> */}
            {/* <span className="di-number">3</span> */}
            {/* <FaBolt className="di-icon" /> */}
            {/* <p>
              Electricity bill corresponding to the registered office address of the proposed Partnership Firm
            </p> */}
          {/* </div> */}
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
            {/* <span className="di-number">4</span> */}
            <FaFileContract className="di-icon" />
            <p>
              Electricity bill corresponding to the registered office address of the proposed Partnership Firm
            </p>
          </div>

          <div className="di-card di-right">
            {/* <span className="di-number">5</span> */}
            <FaCertificate className="di-icon" />
            <p>
              Rent Agreement duly notarised with respect to the registered office address of the proposed Partnership Firm (if on rent)
            </p>
          </div>

          {/* <div className="di-card di-right">
            <span className="di-number">6</span>
            <FaFolderOpen className="di-icon" />
            <h4>Other Documents</h4>
            <p>Additional documents as required by our team.</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default DocumentsInfographic;
