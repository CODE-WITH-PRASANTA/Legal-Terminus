import React from "react";
import "./TrademarktoOppositionDocuments.css";
import {
  FaRegLightbulb,
  FaUsers,
  FaChartLine,
  FaCogs,
  FaGlobe,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";

const steps = [
  {
    num: "01",
    title: "Planning",
    desc: "Strategize your trade operations effectively with a clear roadmap.",
    icon: <FaRegLightbulb />,
    colorClass: "tldocx-color-1",
  },
  {
    num: "02",
    title: "Documentation",
    desc: "Organize and verify all trade-related documents efficiently.",
    icon: <FaUsers />,
    colorClass: "tldocx-color-2",
  },
  {
    num: "03",
    title: "Application",
    desc: "Apply for Trade License with accurate and verified information.",
    icon: <FaChartLine />,
    colorClass: "tldocx-color-3",
  },
  {
    num: "04",
    title: "Approval",
    desc: "Authorities verify and approve your Trade License request.",
    icon: <FaCogs />,
    colorClass: "tldocx-color-4",
  },
  {
    num: "05",
    title: "Operational Start",
    desc: "Begin your business operations with full compliance.",
    icon: <FaGlobe />,
    colorClass: "tldocx-color-5",
  },
  {
    num: "06",
    title: "Support",
    desc: "Access ongoing assistance and renewals for your license.",
    icon: <FaHandshake />,
    colorClass: "tldocx-color-6",
  },
];

const TradeLicenseDocuments = () => {
  return (
    <section className="tldocx-section">
      <h2 className="tldocx-title">Trade License Documents</h2>

      <div className="tldocx-container">
        {/* Center Hexagon */}
        <div className="tldocx-center">
          <div className="tldocx-content">
            <FaHeart className="tldocx-center-icon" />
            <h3>TRADE LICENSE</h3>
          </div>
        </div>

        {/* Surrounding Hexagons */}
        <div className="tldocx-grid">
          {steps.map((step, index) => (
            <div key={index} className={`tldocx-item ${step.colorClass}`}>
              <div className="tldocx-inner">
                <div className="tldocx-num">{step.num}</div>
                <div className="tldocx-icon">{step.icon}</div>
                <h4 className="tldocx-subtitle">{step.title}</h4>
                <p className="tldocx-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseDocuments;
