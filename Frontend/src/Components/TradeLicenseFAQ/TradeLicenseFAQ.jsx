import React, { useState } from "react";
import "./TradeLicenseFAQ.css";

const faqs = [
  {
    question: "What is a Trade License and why is it required?",
    answer:
      "A Trade License is an official permission granted by the municipal authority that allows you to carry out your trade or business legally within a specific area. It ensures your business complies with safety, health, and zoning laws.",
  },
  {
    question: "Who needs to apply for a Trade License?",
    answer:
      "Every individual, firm, or company engaged in any kind of trade, manufacturing, or service activity must obtain a Trade License from the local municipal body before starting operations.",
  },
  {
    question: "How long is a Trade License valid?",
    answer:
      "A Trade License is generally valid for one financial year and must be renewed annually before its expiry date to avoid penalties or closure of business activities.",
  },
  {
    question: "What are the documents required for a Trade License?",
    answer:
      "The required documents typically include proof of business address, identity proof, PAN card, property tax receipt, NOC from the owner, and layout plan of the premises.",
  },
  {
    question: "What is the processing time for obtaining a Trade License?",
    answer:
      "The processing time varies by city but typically takes 7–15 working days from the date of submission of a complete and accurate application.",
  },
  {
    question: "Can a Trade License be transferred or modified?",
    answer:
      "Yes, a Trade License can be transferred to another person or modified in case of changes in business details, ownership, or address, subject to municipal approval.",
  },
  {
    question: "What happens if I operate without a Trade License?",
    answer:
      "Operating a business without a valid Trade License is illegal and may result in fines, penalties, or closure of the business by municipal authorities.",
  },
  {
    question: "Is online Trade License registration available?",
    answer:
      "Yes, many municipal corporations now allow online submission, document upload, and fee payment for Trade License registration and renewal.",
  },
  {
    question: "How can Legal Terminus help in Trade License registration?",
    answer:
      "Legal Terminus provides end-to-end assistance — from documentation to online submission and municipal follow-up — ensuring a quick and hassle-free Trade License registration process.",
  },
];

const TradeLicenseFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="tradefaq-section">
      <div className="tradefaq-container">
        {/* Left side – static text */}
        <div className="tradefaq-left">
          <h2 className="tradefaq-title">Trade License Registration FAQ&apos;s</h2>

          <p className="tradefaq-intro">
            Getting a Trade License is an essential step for any business owner.
            It not only ensures compliance with municipal laws but also builds
            credibility for your operations. <br /> <br />
            Here, we’ve answered some of the most common questions about Trade
            License registration, process, and documentation to guide you
            through every step confidently.
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="tradefaq-right">
          <div className="tradefaq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`tradefaq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="tradefaq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`tradefaq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                    <div
                      className={`tradefaq-answer ${isActive ? "open" : ""}`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseFAQ;
