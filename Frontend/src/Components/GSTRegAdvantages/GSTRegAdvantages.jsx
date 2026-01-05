import React from "react";
import {
  FiShield,
  FiZap,
  FiBarChart2,
  FiLock,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";
import "./GSTRegAdvantages.css";
import gstHero from "../../assets/img-4.webp";
import gstBenefitsImg from "../../assets/img-3.webp";

const benefits = [
  {
    title: "Regulatory Compliance",
    desc:
      "GST registration safeguards businesses in India by ensuring legal compliance and preventing penalties.",
    icon: <FiShield />,
  },
  {
    title: "Easy Compliance",
    desc:
      "Simplifies GST filing, online payments, and return submissions for businesses.",
    icon: <FiZap />,
  },
  {
    title: "Maintains Transparency",
    desc:
      "Ensures updated tax records and improves trust with vendors and authorities.",
    icon: <FiBarChart2 />,
  },
  {
    title: "Legal Protection",
    desc:
      "Protects businesses by maintaining statutory and regulatory safeguards.",
    icon: <FiLock />,
  },
  {
    title: "Improves Credit Score",
    desc:
      "Consistent GST compliance enhances creditworthiness and financial reputation.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Market Advantage",
    desc:
      "GST-registered businesses enjoy higher credibility and customer trust.",
    icon: <FiAward />,
  },
];

const GSTBenefits = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="gst-hero">
        <div className="gst-hero-grid">
          <div className="gst-hero-image">
            <img src={gstHero} alt="GST Registration Certificate" />
          </div>

          <div className="gst-hero-content">
            <h2>What is a GST Registration Certificate?</h2>
            <p>
              A GST Registration Certificate is an official document issued by
              the Government of India to registered businesses, validating their
              legal GST status.
            </p>
            <p>
              It is mandatory for LLPs, OPCs, private limited companies, and
              public limited companies to ensure compliance and credibility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="gst-benefits">
        <h2 className="gst-section-title">
          Benefits of GST Registration
        </h2>
        <p className="gst-section-subtitle">
          GST registration empowers businesses with compliance, transparency,
          and long-term growth advantages.
        </p>

        <div className="gst-benefits-grid">
          {/* LEFT SIDE – VISUAL CARD (YOUR CODE ADDED) */}
          <div className="gst-benefits-left">
            <div className="gst-visual-card">
              <span className="gst-badge">GST Registration</span>
              <img src={gstBenefitsImg} alt="GST Benefits" />
              <h3>Why GST Registration?</h3>
              <p>
                GST registration gives your business legal recognition, better
                credibility, and access to long-term growth opportunities.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – CARDS */}
          <div className="gst-benefits-cards">
            {benefits.map((item, index) => (
              <div className="gst-benefit-card" key={index}>
                <div className="gst-card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}

            <div className="gst-cta">
              <button>Talk to a GST Expert</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GSTBenefits;
