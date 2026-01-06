import React, { useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import "./GSTRegFAQ.css";

const faqs = [
  {
    question: "What is GST?",
    answer:
      "The Goods and Services Tax (GST) is a single indirect tax introduced in India to replace multiple indirect taxes levied by the central and state governments on goods and services."
  },
  {
    question: "In which cases is GST registration crucial?",
    answer:
      "GST registration is mandatory for businesses exceeding prescribed turnover limits, inter-state suppliers, e-commerce operators, and those required under GST law."
  },
  {
    question: "Will I need to upload my photograph for GST registration?",
    answer:
      "Yes, a recent passport-sized photograph of promoters, partners, or directors is required during the GST registration process."
  },
  {
    question:
      "I am an e-commerce operator registered as TCS under GST. Do I need to register in each state?",
    answer:
      "Yes, e-commerce operators supplying goods to multiple states must obtain GST registration in each applicable state."
  },
  {
    question: "Is GST registration mandatory in India?",
    answer:
      "Yes, GST registration is mandatory once a business crosses the threshold limit or falls under compulsory registration categories."
  },
  {
    question: "Is there any government fee for GST registration?",
    answer:
      "No. The government does not charge any fee for GST registration. Professional charges may apply."
  }
];

const GSTFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="GSTFaq-section">
      <div className="GSTFaq-container">

        {/* LEFT CONTENT */}
        <div className="GSTFaq-left">
          <span className="GSTFaq-badge">FAQs</span>
          <h2 className="GSTFaq-title">
            GST Registration <br /> Frequently Asked Questions
          </h2>
          <p className="GSTFaq-intro">
            Clear answers to the most common questions about GST registration,
            eligibility, timelines, fees, and compliance requirements.
          </p>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="GSTFaq-right">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`GSTFaq-item ${isActive ? "active" : ""}`}
              >
                <button
                  className="GSTFaq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="GSTFaq-q-left">
                    <FaCircleQuestion className="GSTFaq-q-icon" />
                    <span>{faq.question}</span>
                  </div>

                  <span
                    className={`GSTFaq-arrow ${isActive ? "open" : ""}`}
                  >
                    ▾
                  </span>
                </button>

                <div
                  className={`GSTFaq-answer-wrapper ${
                    isActive ? "show" : ""
                  }`}
                >
                  <div className="GSTFaq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GSTFaq;
