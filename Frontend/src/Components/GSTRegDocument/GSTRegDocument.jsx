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
    desc: "Any registration certificate of an organization such as Certification of Incorporation/Partnership Deed/Trade License.",
    icon: <FaIdCard />,
    bg: "bg-blue",
  },
  {
    desc: "Rent agreement and Electricity bill of the registered office address of the organization.",
    icon: <FaAddressCard />,
    bg: "bg-orange",
  },
  {
    desc: "ROR copy / Property Tax receipt",
    icon: <FaBuilding />,
    bg: "bg-purple",
  },
  {
    desc: "Photo, PAN card & Aadhar Card of all the Directors/Partners/Proprietor.",
    icon: <FaUserTie />,
    bg: "bg-red",
  },
];

const rightDocs = [
  {
    desc: "Photo, PAN card & Aadhar Card of the Authorised person who will be responsible under GST",
    icon: <FaMapMarkerAlt />,
    bg: "bg-teal",
  },
  {
    desc: "Authorization letter/ Board Resolution for Authorised person (shall be provided by us)",
    icon: <FaUniversity />,
    bg: "bg-green",
  },
  {
    desc: "A detailed checklist will be provided by our team in this respect",
    icon: <FaPenNib />,
    bg: "bg-indigo",
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
      {/* <div className="gst-bottom">
        <h2>
         Simple Steps for GST Registration in India
        </h2>
        <p>
          We take care of documentation, verification, and filing to ensure
          quick and compliant GST registration for your business.
        </p>

        <button className="gst-btn">Apply for GST Registration</button>
      </div> */}
    </section>
  );
};

export default GSTDocuments;
