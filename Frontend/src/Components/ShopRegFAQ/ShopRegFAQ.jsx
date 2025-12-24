import React, { useState } from "react";
import "./ShopRegFAQ.css";

const faqs = [
  {
    question:
      "Is it mandatory for every organization to obtain Shop & Establishment Registration?",
    answer:
      "Shop & Establishment Registration is applicable to every organization irrespective of scale of operation including retail and wholesale shops, commercial establishments, offices, store rooms, godowns or warehouses, residential hotels, restaurants, theatres, or places of public entertainment."
  },
  {
    question:
      "Is there any organization to whom the Shop & Establishment Registration Act is not applicable?",
    answer:
      "Certain charitable institutions, hospitals, educational institutions, and government establishments may be exempt depending on state-specific laws."
  },
  {
    question:
      "Can an organization engaged in the business of trading apply for Shop & Establishment Registration?",
    answer:
      "Yes, trading businesses including wholesalers, retailers, and distributors are required to obtain Shop & Establishment Registration."
  },
  {
    question:
      "What documents or information are required for Shop & Establishment Registration?",
    answer:
      "Basic documents include identity proof of owner, address proof of establishment, business details, employee information, and nature of business activity."
  },
  {
    question:
      "What is the time period within which Shop & Establishment Registration can be obtained?",
    answer:
      "The registration is generally issued within a few working days after submission of a complete and accurate application, subject to state regulations."
  },
  {
    question:
      "What is the procedure to obtain Shop & Establishment Registration?",
    answer:
      "The process involves online application submission, document upload, verification by authorities, and issuance of the registration certificate."
  },
  {
    question:
      "How can Legal Terminus help you obtain Shop & Establishment Registration?",
    answer:
      "Legal Terminus assists with documentation, online filing, compliance guidance, and end-to-end registration support to ensure hassle-free approval."
  }
];

const ShopEstablishmentFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="gstfaq-section">
      <div className="gstfaq-container">
        {/* LEFT */}
        <div className="gstfaq-left">
          <h2 className="gstfaq-title">FAQ</h2>
          <p className="gstfaq-intro">
            Frequently asked questions about shop & establishment registration
            to help businesses understand legal requirements and compliance.
          </p>
        </div>

        {/* RIGHT */}
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

export default ShopEstablishmentFAQ;
