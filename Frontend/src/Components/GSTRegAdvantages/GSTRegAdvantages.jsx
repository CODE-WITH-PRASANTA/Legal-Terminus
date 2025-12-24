import React from "react";
import "./GSTRegAdvantages.css";
import gstHero from "../../assets/img-4.webp"; // replace with your image path
import gstBenefitsImg from "../../assets/img-3.webp"; // replace with your image path

const benefits = [
  {
    title: "Regulatory Compliance",
    desc:
      "GST registration safeguards the interests of individuals and business entities operating in India. It ensures legal and tax compliance, preventing penalties.",
  },
  {
    title: "Easy Compliance",
    desc:
      "GST registration simplifies tax filing and online payments, helping businesses streamline operational processes efficiently.",
  },
  {
    title: "Maintains Transparency",
    desc:
      "GST registration allows businesses to maintain updated records, fostering transparency and building trust with stakeholders.",
  },
  {
    title: "Legal Protection",
    desc:
      "GST registration safeguards legal and regulatory standards, protecting the business’s legal rights.",
  },
  {
    title: "Improve Credit Score",
    desc:
      "Businesses that manage GST and regulatory compliance efficiently experience improved credit profiles.",
  },
  {
    title: "Market Advantage",
    desc:
      "GST-registered businesses earn greater trust from customers and gain better market credibility.",
  },
];

const GSTBenefits = () => {
  return (
    <>
      {/* ================= HERO / CERTIFICATE SECTION ================= */}
      <section className="gst-hero">
        <div className="gst-hero-grid">
          <div className="gst-hero-image">
            <img src={gstHero} alt="GST Registration Certificate" />
          </div>

          <div className="gst-hero-content">
            <h2>What is a GST Registration Certificate?</h2>
            <p>
              GST registration certificate is an official document issued by the
              Government of India to businesses registered under GST. It
              validates legal standing and displays GSTIN, business name, and
              registered address.
            </p>
            <p>
              GST registration is essential for LLPs, OPCs, private limited
              companies, and public limited companies to ensure compliance and
              credibility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="gst-benefits">
        <h2 className="gst-section-title">
          What are the Benefits of GST Registration?
        </h2>
        <p className="gst-section-subtitle">
          GST registration offers a variety of benefits to individuals and
          business entities, including the following:
        </p>

        <div className="gst-benefits-grid">
          {/* LEFT – STICKY IMAGE */}
          <div className="gst-benefits-image sticky">
            <img src={gstBenefitsImg} alt="GST Benefits Illustration" />
          </div>

          {/* RIGHT – CARDS */}
          <div className="gst-benefits-cards">
            {benefits.map((item, index) => (
              <div className="gst-benefit-card" key={index}>
                <div className="gst-card-icon">🛡️</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
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
