import React, { useEffect, useState } from "react";
import "./IncorporationDocuments.css";
import {
  FaLightbulb,
  FaClipboardList,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";

const DATA = [
  { id: 1, side: "left", title: "Research", desc: "Market and user research.", icon: FaLightbulb, color: "green" },
  { id: 2, side: "left", title: "Planning", desc: "Define strategy and roadmap.", icon: FaClipboardList, color: "blue" },
  { id: 3, side: "left", title: "Process", desc: "Design and development execution.", icon: FaCogs, color: "purple" },
  { id: 4, side: "right", title: "Teamwork", desc: "Collaborative execution.", icon: FaUsers, color: "green" },
  { id: 5, side: "right", title: "Growth", desc: "Scale and optimize performance.", icon: FaChartLine, color: "blue" },
  { id: 6, side: "right", title: "Success", desc: "Deliver value and results.", icon: FaTrophy, color: "purple" },
];

const IncorporationDocuments = () => {
  const [active, setActive] = useState(1);

  /* AUTO HOVER */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p === DATA.length ? 1 : p + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="incdocs-section">
      <div className="incdocs-layout">

        {/* LEFT */}
        <div className="incdocs-block left">
          {DATA.filter(i => i.side === "left").map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`incdocs-card ${item.color} ${active === item.id ? "active" : ""}`}
                onMouseEnter={() => setActive(item.id)}
              >
                <span className="incdocs-no">{`0${item.id}`}</span>
                <Icon />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CENTER */}
        <div className="incdocs-center">
          <div className="incdocs-ring">
            <div className="incdocs-ring-inner">
              <h3>INFOGRAPHIC</h3>
              <span>DESIGN TEMPLATE</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="incdocs-block right">
          {DATA.filter(i => i.side === "right").map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`incdocs-card ${item.color} ${active === item.id ? "active" : ""}`}
                onMouseEnter={() => setActive(item.id)}
              >
                <span className="incdocs-no">{`0${item.id}`}</span>
                <Icon />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IncorporationDocuments;
