import React, { useState } from "react";
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
      "Yes, a recent passport-sized photograph of promoters/partners/directors is required during the GST registration process."
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
    question: "Is a GST certificate mandatory?",
    answer:
      "A GST certificate is mandatory for businesses required to register under GST and serves as legal proof of registration."
  },
  {
    question:
      "Is a person without GST registration eligible to levy and collect GST?",
    answer:
      "No. Only GST-registered entities are legally allowed to collect GST from customers."
  },
  {
    question: "Which state has the highest GST registration?",
    answer:
      "States like Maharashtra, Uttar Pradesh, and Tamil Nadu consistently record the highest GST registrations due to business volume."
  },
  {
    question: "Who was the first chairman of the GST Council?",
    answer:
      "The first chairman of the GST Council was the then Union Finance Minister, Arun Jaitley."
  },
  {
    question: "What indirect taxes were subsumed under GST?",
    answer:
      "GST subsumed taxes like VAT, Service Tax, Excise Duty, CST, Entry Tax, and several others."
  },
  {
    question: "Is there any government fee for GST registration?",
    answer:
      "No. The government does not charge any fee for GST registration. Professional charges may apply."
  },
  {
    question: "How long does it take to get ARN/GSTIN?",
    answer:
      "ARN is generated immediately after application submission. GSTIN is usually issued within 7–10 working days."
  },
  {
    question: "Why do GST applications get rejected?",
    answer:
      "Applications may be rejected due to incorrect documents, mismatched details, or failure to respond to clarification notices."
  },
  {
    question: "Do I need a bank account before applying for GST?",
    answer:
      "Yes, a valid bank account is required to complete GST registration."
  },
  {
    question: "What should be done after obtaining GSTIN?",
    answer:
      "After GSTIN issuance, businesses must start filing returns, issue GST-compliant invoices, and maintain compliance."
  }
];

const GSTFaq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="gstfaq-section">
      <div className="gstfaq-container">
        {/* LEFT SIDE */}
        <div className="gstfaq-left">
          <h2 className="gstfaq-title">
            Frequently Asked Questions on GST Registration
          </h2>
          <p className="gstfaq-intro">
            Have a look at the answers to the most commonly asked questions
            related to GST registration, compliance, eligibility, and legal
            requirements in India.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="gstfaq-right">
          <div className="gstfaq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`gstfaq-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="gstfaq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`gstfaq-arrow ${
                      activeIndex === index ? "open" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="gstfaq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSTFaq;
