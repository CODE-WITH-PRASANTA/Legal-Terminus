import React from "react";
import "./PritoPublicDocument.css";
import {
  FaIdCard,
  FaFileContract,
  FaHome,
  FaUserCircle,
  FaBolt,
  FaFileAlt,
} from "react-icons/fa";

const steps = [
  { no: "01", color: "beige" },
  { no: "02", color: "teal" },
  { no: "03", color: "orange" },
  { no: "04", color: "red" },
  { no: "05", color: "yellow" },
  { no: "06", color: "violet" },
];

const PvtltdDocument = () => {
  return (
    <>
      {/* ===== HEADLINE ===== */}
      <div className="prp-doc-header">
        <h2 className="prp-doc-title">
          Documents Required for Private Limited Company Registration
        </h2>
      </div>

      <div className="prp-doc-infographic-wrapper">
        <div className="prp-doc-infographic">

          <div className="prp-doc-ring-wrapper">
            <div className="prp-doc-center-box">
              <h3>Documents Required</h3>
            </div>

            <div className="prp-doc-ring">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`prp-doc-ring-segment ${s.color}`}
                  style={{ transform: `rotate(${i * 60}deg)` }}
                >
                  <span style={{ transform: `rotate(-${i * 60}deg)` }}>
                    {s.no}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="prp-doc-side left">
            <div className="prp-doc-card red">
              <div className="prp-doc-icon"><FaIdCard /></div>
              <div>
                <h4><span className="prp-doc-step-no">1.</span>KYC Documents</h4>
                <p>
                  KYC documents – All the proposed directors and shareholders such as:
                  › ID Proof – PAN and Aadhaar
                  › Address Proof – Telephone Bill / Mobile Bill / Savings Bank Statement
                </p>
              </div>
            </div>

            <div className="prp-doc-card orange">
              <div className="prp-doc-icon"><FaFileContract /></div>
              <div>
                <h4><span className="prp-doc-step-no">2.</span>Passport Size Photograph</h4>
                <p>Passport size photograph of all proposed directors and shareholders.</p>
              </div>
            </div>

            <div className="prp-doc-card cyan">
              <div className="prp-doc-icon"><FaHome /></div>
              <div>
                <h4><span className="prp-doc-step-no">3.</span>Electricity Bill</h4>
                <p>Electricity bill corresponding to the registered office address of the company.</p>
              </div>
            </div>
          </div>

          <div className="prp-doc-side right">
            <div className="prp-doc-card beige">
              <div className="prp-doc-icon"><FaUserCircle /></div>
              <div>
                <h4><span className="prp-doc-step-no">4.</span>Rent Agreement</h4>
                <p>Duly notarised rent agreement for the registered office address (if on rent).</p>
              </div>
            </div>

            <div className="prp-doc-card violet">
              <div className="prp-doc-icon"><FaBolt /></div>
              <div>
                <h4><span className="prp-doc-step-no">5.</span>No Objection Certificate</h4>
                <p>No Objection Certificate (NOC) from the owner allowing use of the premises as the registered office.</p>
              </div>
            </div>

            <div className="prp-doc-card sand">
              <div className="prp-doc-icon"><FaFileAlt /></div>
              <div>
                <h4><span className="prp-doc-step-no">6.</span>Other Documents</h4>
                <p>Other documents shall be prepared and provided by our team as required.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PvtltdDocument;
