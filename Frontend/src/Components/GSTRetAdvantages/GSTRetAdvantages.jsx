import React from "react";
import "./GSTRetAdvantages.css";
import heroImg from "../../assets/img-4.webp";
import advantageImg from "../../assets/img-3.webp";

const advantages = [
  {
    title: "Curb Tax Evasion",
    desc:
      "GST return filing ensures greater transparency, helping curb tax evasion and minimizing tax fraud to a large extent.",
  },
  {
    title: "Eliminates Cascading Effect",
    desc:
      "GST removes the cascading effect of taxes on goods and services, reducing the overall tax burden.",
  },
  {
    title: "Encourage Compliance",
    desc:
      "The GST return filing system encourages organized and small businesses to comply with tax regulations.",
  },
  {
    title: "Better Regulation & Accountability",
    desc:
      "GST return filing results in better regulation of tax laws and enhanced accountability of taxpayers.",
  },
  {
    title: "Promotes Competitive Pricing",
    desc:
      "GST return filing assists businesses in promoting competitive pricing through improved cost efficiency.",
  },
  {
    title: "Startup Benefits",
    desc:
      "GST simplifies taxation for startups, reduces costs through input tax credits, and supports business growth.",
  },
  {
    title: "Track Business Performance",
    desc:
      "Timely GST returns help track business performance by summarizing sales and purchases for a period.",
  },
  {
    title: "Increased Creditworthiness",
    desc:
      "Regular GST filing improves business credibility, making it easier to access loans and financial credit.",
  },
];

const GSTReturnOverview = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="gstret-hero">
        <div className="gstret-hero-grid">
          <div className="gstret-hero-img">
            <img src={heroImg} alt="GST Return Filing" />
          </div>

          <div className="gstret-hero-content">
            <h2>What is GST Return?</h2>
            <p>
              A GST return contains details of purchases, sales, input tax credit,
              net GST payable, and output tax liability. It reflects the revenues
              and expenses of a registered business.
            </p>
            <p>
              All GST-registered businesses must file GST returns online to remain
              compliant and avoid penalties.
            </p>

            <h3>Who Must File GST Return Online?</h3>
            <p>
              Any individual or business registered under GST must file returns.
              Filing requirements may vary based on turnover, taxpayer type, and
              scheme opted.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ADVANTAGES SECTION ================= */}
      <section className="gstret-advantages">
        <h2 className="gstret-title">Advantages of GST Return Filing</h2>
        <p className="gstret-subtitle">
          The key benefits of GST return filing are listed below:
        </p>

        <div className="gstret-grid">
          {/* LEFT STICKY IMAGE */}
          <div className="gstret-image sticky">
            <img src={advantageImg} alt="GST Filing Benefits" />
          </div>

          {/* RIGHT CARDS */}
          <div className="gstret-cards">
            {advantages.map((item, index) => (
              <div className="gstret-card" key={index}>
                <div className="gstret-icon">✔</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GSTReturnOverview;
