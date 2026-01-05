import React from "react";
import {
  FaIdCard,
  FaAddressCard,
  FaBuilding,
  FaUserTie,
  FaMapMarkerAlt,
  FaUniversity,
  FaPenNib,
  FaFileAlt,
} from "react-icons/fa";
import "./GSTRegDocument.css";

const leftDocs = [
  {
    title: "PAN Card",
    desc: "Permanent Account Number of the applicant.",
    icon: <FaIdCard />,
    bg: "bg-blue",
  },
  {
    title: "Aadhaar Card",
    desc: "Aadhaar of proprietor, partner, or director.",
    icon: <FaAddressCard />,
    bg: "bg-orange",
  },
  {
    title: "Business Registration Proof",
    desc: "Certificate of incorporation or registration.",
    icon: <FaBuilding />,
    bg: "bg-purple",
  },
  {
    title: "Director Identity Proof",
    desc: "Identity proof of directors or promoters.",
    icon: <FaUserTie />,
    bg: "bg-red",
  },
];

const rightDocs = [
  {
    title: "Business Address Proof",
    desc: "Electricity bill or rent agreement.",
    icon: <FaMapMarkerAlt />,
    bg: "bg-teal",
  },
  {
    title: "Bank Proof",
    desc: "Cancelled cheque or bank statement.",
    icon: <FaUniversity />,
    bg: "bg-green",
  },
  {
    title: "Digital Signature (DSC)",
    desc: "Required for GST filing and authentication.",
    icon: <FaPenNib />,
    bg: "bg-indigo",
  },
  {
    title: "Authorization Letter",
    desc: "Board resolution for authorized signatory.",
    icon: <FaFileAlt />,
    bg: "bg-pink",
  },
];

const GSTDocuments = () => {
  return (
    <section className="gst-section">
      <div className="gst-wrapper">
        {/* LEFT */}
        <div className="gst-column">
          {leftDocs.map((doc, i) => (
            <div key={i} className={`gst-card ${doc.bg}`}>
              <div className="gst-icon">{doc.icon}</div>
              <div className="gst-text">
                <h4>{doc.title}</h4>
                <p>{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="gst-center">
          <svg className="gst-lines" viewBox="0 0 300 300">
            {[45, 105, 195, 255].map((y, i) => (
              <line key={i} x1="150" y1="150" x2="20" y2={y} />
            ))}
            {[45, 105, 195, 255].map((y, i) => (
              <line key={i} x1="150" y1="150" x2="280" y2={y} />
            ))}
          </svg>

          <div className="gst-hexagon">
            <div className="gst-hex-content">
              <h3>GST</h3>
              <span>Documents</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="gst-column">
          {rightDocs.map((doc, i) => (
            <div key={i} className={`gst-card ${doc.bg}`}>
              <div className="gst-icon">{doc.icon}</div>
              <div className="gst-text">
                <h4>{doc.title}</h4>
                <p>{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="gst-bottom">
        <h2>
          Simplified <span>GST Registration</span> with Expert Support
        </h2>
        <p>
          We take care of documentation, verification, and filing to ensure
          quick and compliant GST registration for your business.
        </p>

        <button className="gst-btn">Apply for GST Registration</button>
      </div>
    </section>
  );
};

export default GSTDocuments;
