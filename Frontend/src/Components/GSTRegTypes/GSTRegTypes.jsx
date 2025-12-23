import React from "react";
import "./GSTRegTypes.css";
import timelineImg from "../../assets/img-2.webp"; // ONLY IMAGE IMPORT

const GSTOverview = () => {
  return (
    <section className="gst-wrapper">

      {/* ================= Difference Table ================= */}
      <div className="gst-section">
        <h2 className="gst-heading">Difference Between GST and Income Tax</h2>
        <p className="gst-subtext">
          The table below specifies the difference between GST and Income Tax:
        </p>

        <div className="gst-table">
          <div className="gst-table-head">
            <span>S.No.</span>
            <span>GST (Goods and Services Tax)</span>
            <span>Income Tax</span>
          </div>

          {[
            ["1", "It is an indirect tax.", "It is a direct tax."],
            [
              "2",
              "Imposed on consumption of goods and services.",
              "Imposed on income like salary, capital gains, etc.",
            ],
            [
              "3",
              "Filed monthly/quarterly/annually.",
              "Filed annually.",
            ],
            [
              "4",
              "Collected by Central & State Governments.",
              "Collected only by Central Government.",
            ],
            [
              "5",
              "Mandatory if turnover exceeds ₹40 lakhs.",
              "Mandatory if income exceeds ₹3 lakhs.",
            ],
          ].map((row, i) => (
            <div className="gst-table-row" key={i}>
              <span>{row[0]}</span>
              <span>{row[1]}</span>
              <span>{row[2]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Timeline & Fees ================= */}
      <div className="gst-section gst-grid-2">
        <div>
          <h2 className="gst-heading">Timeline and Fees for GST Registration</h2>
          <ul className="gst-checklist">
            <li>GST registration is mandatory for legal compliance.</li>
            <li>Approval timeline: 7–10 working days.</li>
            <li>Entire process may take up to 30 days.</li>
            <li>Fees start from ₹1999 and vary by state.</li>
            <li>No government fee for GST certificate.</li>
          </ul>

          <button className="gst-btn">Register Your Business for GST Today</button>
        </div>

        <div className="gst-image-box">
          <img src={timelineImg} alt="GST Timeline" />
        </div>
      </div>

      {/* ================= Trust Section ================= */}
      <div className="gst-section">
        <h2 className="gst-heading center">
          Why Trust Corpbiz for GST Registration Certificate?
        </h2>

        <div className="gst-cards">
          {[
            {
              title: "Simplified Registration",
              text: "Successfully processed 5000+ GST registrations.",
            },
            {
              title: "High Success Rate",
              text: "99% success rate in GST registration.",
            },
            {
              title: "Simplify Documentation",
              text: "Assistance in preparing error-free documents.",
            },
            {
              title: "Legal Advice",
              text: "Expert legal guidance & regular updates.",
            },
            {
              title: "End-to-End Solutions",
              text: "Complete GST support from start to finish.",
            },
            {
              title: "Affordable Pricing",
              text: "100% transparent and affordable pricing.",
            },
            {
              title: "Reduced Compliance Burden",
              text: "Reduce compliance load by up to 30%.",
            },
            {
              title: "10+ Years Experience",
              text: "Highly experienced GST professionals.",
            },
            {
              title: "24/7 Customer Support",
              text: "Round-the-clock assistance.",
            },
          ].map((card, i) => (
            <div className="gst-card" key={i}>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="center">
          <button className="gst-btn">Apply Online for GST Easily</button>
        </div>
      </div>
    </section>
  );
};

export default GSTOverview;
