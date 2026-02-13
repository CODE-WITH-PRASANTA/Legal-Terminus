import React from "react";
import "./TrademarktoHearingDocuments.css";
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
    colorClass: "thdoc-color-1",
  },
  {
    num: "02",
    title: "Documentation",
    desc: "Organize and verify all trade-related documents efficiently.",
    icon: <FaUsers />,
    colorClass: "thdoc-color-2",
  },
  {
    num: "03",
    title: "Application",
    desc: "Apply for Trade License with accurate and verified information.",
    icon: <FaChartLine />,
    colorClass: "thdoc-color-3",
  },
  {
    num: "04",
    title: "Approval",
    desc: "Authorities verify and approve your Trade License request.",
    icon: <FaCogs />,
    colorClass: "thdoc-color-4",
  },
  {
    num: "05",
    title: "Operational Start",
    desc: "Begin your business operations with full compliance.",
    icon: <FaGlobe />,
    colorClass: "thdoc-color-5",
  },
  {
    num: "06",
    title: "Support",
    desc: "Access ongoing assistance and renewals for your license.",
    icon: <FaHandshake />,
    colorClass: "thdoc-color-6",
  },
];

const TradeLicenseDocuments = () => {
  return (
    <section className="thdoc-section">
      <h2 className="thdoc-title">Trade License Documents</h2>

      <div className="thdoc-container">
        {/* Center Hexagon */}
        <div className="thdoc-center">
          <div className="thdoc-content">
            <FaHeart className="thdoc-center-icon" />
            <h3>TRADE LICENSE</h3>
          </div>
        </div>

        {/* Surrounding Hexagons */}
        <div className="thdoc-grid">
          {steps.map((step, index) => (
            <div key={index} className={`thdoc-item ${step.colorClass}`}>
              <div className="thdoc-inner">
                <div className="thdoc-num">{step.num}</div>
                <div className="thdoc-icon">{step.icon}</div>
                <h4 className="thdoc-subtitle">{step.title}</h4>
                <p className="thdoc-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseDocuments;
