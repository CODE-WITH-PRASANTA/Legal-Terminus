import React from "react";
import "./PvtltdDocument.css";
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
  { no: "05", color: "sand" },
  { no: "06", color: "cyan" },
];

const PvtltdDocument = () => {
  return (
    <div className="infographic-wrapper">
      <div className="infographic">

        {/* MOBILE + DESKTOP RING WRAPPER */}
        <div className="ring-wrapper">
          <div className="center-box">
            <h3>Documents Required</h3>
          </div>

          <div className="ring">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`ring-segment ${s.color}`}
                style={{ transform: `rotate(${i * 60}deg)` }}
              >
                <span style={{ transform: `rotate(-${i * 60}deg)` }}>
                  {s.no}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LEFT */}
        <div className="side left">
          <div className="card red">
            <div className="icon"><FaIdCard /></div>
            <div>
              <h4>KYC Documents</h4>
              <p>KYC documents – All the proposed directors and shareholders such as:
› ID Proof – PAN and Aadhaar
› Address Proof – Telephone Bill / Mobile Bill / Savings Bank Statement</p>
            </div>
          </div>

          <div className="card orange">
            <div className="icon"><FaFileContract /></div>
            <div>
              <h4>Passport Size Photograph</h4>
              <p>Passport size photograph of all proposed directors and shareholders.</p>
            </div>
          </div>

          <div className="card cyan">
            <div className="icon"><FaHome /></div>
            <div>
              <h4>Electricity Bill</h4>
              <p>Electricity bill corresponding to the registered office address of the company.</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="side right">
          <div className="card beige">
            <div className="icon"><FaUserCircle /></div>
            <div>
              <h4>Rent Agreement</h4>
              <p>Duly notarised rent agreement for the registered office address (if on rent).</p>
            </div>
          </div>

          <div className="card teal">
            <div className="icon"><FaBolt /></div>
            <div>
              <h4>No Objection Certificate</h4>
              <p>No Objection Certificate (NOC) from the owner allowing use of the premises as the registered office.</p>
            </div>
          </div>

          <div className="card sand">
            <div className="icon"><FaFileAlt /></div>
            <div>
              <h4>Other Documents</h4>
              <p>Other documents shall be prepared and provided by our team as required.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PvtltdDocument;
