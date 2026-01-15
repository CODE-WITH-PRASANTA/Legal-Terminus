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
import gstHero from "../../assets/img-1.webp";
import gstBenefitsImg from "../../assets/img-3.webp";

const benefits = [
  {
    title: "Legal Recognition & Market Expansion",
    desc:
      "GST registration gives businesses official recognition as suppliers of goods or services. It also allows them to sell on eCommerce platforms like Amazon or Flipkart, helping them reach more customers.",
    icon: <FiShield />,
  },
  {
    title: "Tax Benefits & No Double Taxation",
    desc:
      "Registered businesses can claim Input Tax Credit (ITC) on their purchases, reducing their tax burden. Additionally, GST eliminates double taxation by allowing tax credits across the supply chain, lowering costs for businesses and consumers.",
    icon: <FiZap />,
  },
  {
    title: "Simplified Tax Filing & Lower Tax for Small Businesses",
    desc:
      "GST has made tax filing easier with an online system for payments and returns. Small businesses can also opt for the Composition Scheme, which lets them pay tax at a lower, fixed rate, reducing paperwork and compliance hassles.",
    icon: <FiBarChart2 />,
  },
  {
    title: "Higher Exemption Limit for Small Businesses",
    desc:
      "Only businesses with a turnover above ₹40 lakh (₹20 lakh in some states) need to register for GST. This means many small businesses are exempt, making operations simpler and reducing compliance burdens.",
    icon: <FiLock />,
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
            <h2>Who Needs to Register for GST?</h2>
            <p>
              Some businesses and individuals must register for GST to follow tax rules. Here’s who should apply:
            </p>
            <p>
              ✅ Service Providers – If you provide services (like freelancing, consulting, or agency work) and earn more than ₹20 lakh per year (₹10 lakh in some special states), you need GST registration.
              <br></br>
              ✅ Other than Service Provider – If the turnover exceeds 40 lakh per year, you need GST registration.
              <br></br>
              ✅ Online Sellers – If you sell products or services on platforms like Amazon or Flipkart, you must register for GST, no matter how much you earn.
              <br></br>
              ✅ Inter-State Suppliers – If you sell goods or services across different states, GST registration is mandatory, even if your sales are low.
              <br></br>
              ✅ Input Service Distributors (ISD) – If your business distributes tax credits (GST paid on purchases) to different branches, you must register.
              <br></br>
              ✅ Voluntary Registration – You can already register your business under GST voluntarily as per your business need.
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
          Registering for GST is an important step for businesses in India. It comes with several advantages that make tax compliance easier and more beneficial.
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
              {/* <button>Talk to a GST Expert</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GSTBenefits;
