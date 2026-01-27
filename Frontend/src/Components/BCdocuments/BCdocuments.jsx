import React from "react";
import "./BCdocuments.css";
import {
  FaBullhorn,
  FaBrain,
  FaLightbulb,
  FaUsers,
  FaChartPie,
  FaChessKing,
} from "react-icons/fa";

const data = [
  { no: "01", title: "KYC Documents", icon: <FaBullhorn />, color: "red" },
  { no: "02", title: "Passport Photograph", icon: <FaBrain />, color: "orange" },
  { no: "03", title: "Electricity Bill", icon: <FaLightbulb />, color: "yellow" },
  { no: "04", title: "Rent Agreement", icon: <FaUsers />, color: "green" },
  { no: "05", title: "No Objection Certificate", icon: <FaChartPie />, color: "cyan" },
  { no: "06", title: "Other Documents", icon: <FaChessKing />, color: "blue" },
];

const BarcodeInfographic = () => {
  return (
    <section className="bci5-section">
      <h2 className="bci5-heading">
        Documents Required for Bar Code Registration in India
      </h2>

      <div className="bci5-wrapper">
        {/* LEFT INFOGRAPHIC */}
        <div className="bci5-left">
          <div className="bci5-circle">
            <h3>Documents Required</h3>
            
          </div>

          {/* TRUE LEFT HALF CIRCLE */}
          <svg viewBox="0 0 300 300" className="bci5-arc">
            <path d="M150 10 A140 140 0 0 0 150 290" className="arc red" />
            <path d="M150 10 A140 140 0 0 0 150 290" className="arc orange" />
            <path d="M150 10 A140 140 0 0 0 150 290" className="arc yellow" />
            <path d="M150 10 A140 140 0 0 0 150 290" className="arc green" />
            <path d="M150 10 A140 140 0 0 0 150 290" className="arc cyan" />
            <path d="M150 10 A140 140 0 0 0 150 290" className="arc blue" />
          </svg>
        </div>

        {/* RIGHT CARDS */}
        <div className="bci5-right">
          {data.map((item, i) => (
            <div key={i} className={`bci5-card ${item.color}`}>
              <span className="bci5-num">{item.no}</span>
              <h4>{item.title}</h4>
              <i>{item.icon}</i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarcodeInfographic;
