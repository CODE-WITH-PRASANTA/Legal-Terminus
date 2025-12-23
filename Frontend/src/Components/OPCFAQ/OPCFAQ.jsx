import React, { useState } from "react";
import "./OPCFAQ.css";

const faqs = [
  {
    question: "What is a One Person Company (OPC)?",
    answer:
      "A One Person Company (OPC) is a type of company structure in India that allows a single individual to own and manage a company with limited liability and a separate legal identity.",
  },
  {
    question: "Who can register a One Person Company in India?",
    answer:
      "Only a natural person who is an Indian citizen and resident in India can incorporate an OPC. One person can incorporate only one OPC at a time.",
  },
  {
    question: "What are the benefits of registering an OPC?",
    answer:
      "OPC offers limited liability protection, separate legal identity, ease of compliance, complete control over business decisions, and enhanced credibility compared to sole proprietorship.",
  },
  {
    question: "How long does it take to register an OPC in India?",
    answer:
      "If all documents are in order and name approval is obtained smoothly, OPC registration generally takes 7–10 working days.",
  },
  {
    question: "What is the minimum capital required to start an OPC?",
    answer:
      "There is no minimum paid-up capital requirement to start a One Person Company in India.",
  },
  {
    question: "Is GST registration mandatory for an OPC?",
    answer:
      "GST registration is mandatory for an OPC if it crosses the prescribed turnover threshold or if it engages in interstate supply or other GST-notified activities.",
  },
  {
    question: "Can an NRI register an OPC in India?",
    answer:
      "No, NRIs and foreign nationals are not allowed to incorporate an OPC. Only Indian citizens who are residents of India can form an OPC.",
  },
  {
    question: "What documents are required for OPC registration?",
    answer:
      "Key documents include PAN, Aadhaar, address proof, registered office proof, nominee consent, and identity documents of the nominee director.",
  },
  {
    question: "Is an audit compulsory for an OPC?",
    answer:
      "Audit is mandatory if the OPC exceeds the prescribed turnover or capital thresholds as per the Companies Act, 2013.",
  },
  {
    question: "Can an OPC be converted into a Private Limited Company?",
    answer:
      "Yes, an OPC can be converted into a Private Limited Company upon meeting eligibility criteria and completing the required legal formalities.",
  },
];

const FaqOPC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="lp-section">
      <div className="lp-container">
        {/* LEFT SIDE */}
        <div className="lp-left">
          <h2 className="lp-title">
            FAQs on One Person Company Registration
          </h2>

          <p className="lp-intro">
            Find answers to frequently asked questions about One Person Company
            (OPC) registration in India, including eligibility criteria,
            compliance requirements, conversion thresholds, and nominee roles,
            to help you make well-informed decisions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="lp-right">
          <div className="lp-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`lp-item ${isActive ? "active" : ""}`}
                >
                  <button
                    className="lp-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isActive}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`lp-icon ${isActive ? "open" : ""}`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>

                  {isActive && (
                    <div className="lp-answer">
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

export default FaqOPC;
