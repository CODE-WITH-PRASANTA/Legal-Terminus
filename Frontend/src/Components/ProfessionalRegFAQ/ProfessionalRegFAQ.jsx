import React, { useState } from "react";
import "./ProfessionalRegFAQ.css";

const faqs = [
  {
    question:
      "Which organization is obligated to obtain Professional Tax Registration?",
    answer:
      "Any entity carrying on trade, business, profession, or employment and liable to pay salary or wages is required to obtain Professional Tax Registration as per applicable state laws."
  },
  {
    question: "Is Professional Tax applicable all over India?",
    answer:
      "No. Professional Tax is a state-level tax and is applicable only in states that have enacted Professional Tax legislation. The rates and rules vary from state to state."
  },
  {
    question:
      "What are the basic documents or information required for Professional Tax Registration?",
    answer:
      "Generally required documents include PAN of the business or employer, address proof of establishment, identity proof of owner or authorized signatory, employee details, and business registration certificates."
  },
  {
    question:
      "What is the time period within which the Professional Tax Registration can be obtained?",
    answer:
      "Professional Tax Registration is usually granted within a few working days after submission of the complete application, subject to verification by the respective state authority."
  },
  {
    question:
      "What is the procedure to obtain Professional Tax Registration?",
    answer:
      "The procedure involves online application submission on the state tax portal, uploading required documents, verification by authorities, and issuance of the registration certificate."
  },
  {
    question:
      "How can Legal Terminus help you obtain Professional Tax Registration?",
    answer:
      "Legal Terminus assists with documentation, online filing, compliance guidance, and end-to-end support to ensure quick and hassle-free Professional Tax Registration."
  }
];

const ProfessionalTaxFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="gstfaq-section">
      <div className="gstfaq-container">
        {/* LEFT SIDE */}
        <div className="gstfaq-left">
          <h2 className="gstfaq-title">FAQ</h2>
          <p className="gstfaq-intro">
            Frequently asked questions about professional tax registration to
            help employers and professionals understand applicability,
            compliance, and registration requirements.
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

export default ProfessionalTaxFAQ;
