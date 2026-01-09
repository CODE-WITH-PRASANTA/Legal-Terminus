import React from "react";
import "./Featureslegalservice.css";

const features = [
  {
    id: "01",
    title: "Easy Accessibility & Cost Efficiency",
    text:
      "Quick and efficient access to essential legal services at extremely competitive prices through our online platform.",
  },
  {
    id: "02",
    title: "Excellent Reminder Policy",
    text:
      "Our reminder system ensures you never miss a compliance deadline or incur penalties.",
  },
  {
    id: "03",
    title: "Grievance Redressal Policy",
    text:
      "A dedicated grievance redressal team personally oversees and resolves every concern in a timely manner.",
  },
  {
    id: "04",
    title: "Highly Experienced Consultants",
    text:
      "Receive tailored legal advice based on your business size, industry, and specific requirements.",
  },
];

const FeaturesLegalService = () => {
  return (
    <section className="features-root">
      <div className="features-container">
        {/* Header */}
        <header className="features-header">
          <h2 className="featurelegalservice-tittle">
            Why We <span>Stand Out</span>
          </h2>
          <p className="features-subtitle">
            Legal Terminus delivers reliable, transparent, and professional legal
            services across India with a client-first approach.
          </p>
        </header>

        {/* Cards */}
      <div className="features-grid">
        {features.map((item) => (
          <article key={item.id} className="feature-card">
            <div className="feature-left">
              <span className="feature-badge">{item.id}</span>
            </div>

            <div className="feature-content">
              <h4 className="feature-title">{item.title}</h4>
              <p className="feature-text">{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      </div>
    </section>
  );
};

export default FeaturesLegalService;
