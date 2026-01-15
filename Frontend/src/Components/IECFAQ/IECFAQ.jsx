import React, { useState } from "react";
import "./IECFAQ.css";

const faqs = [
  {
    question: "What is an Import Export Code (IEC)?",
    answer:
      "An Import Export Code (IEC) is a 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT), required for businesses involved in importing or exporting goods and services from India.",
  },
  {
    question: "Who needs to apply for an IEC?",
    answer:
      "Any individual or business entity planning to import or export goods or services from India must obtain an IEC before starting international trade activities.",
  },
  {
    question: "Can an IEC be used for both import and export?",
    answer:
      "Yes, the same IEC can be used for both import and export transactions. It serves as a universal business identification number for all foreign trade operations.",
  },
  {
    question: "Is there a validity period for an IEC?",
    answer:
      "The IEC remains valid for the lifetime of the business and does not require renewal. However, it must be updated annually to confirm business details on the DGFT portal.",
  },
  {
    question: "What are the documents required for IEC registration?",
    answer:
      "You’ll need a PAN card, proof of business address, bank details (cancelled cheque or bank certificate), and valid contact details of the applicant.",
  },
  {
    question: "Can IEC be modified after registration?",
    answer:
      "Yes, any changes in business details such as address, ownership, or bank account must be updated in the DGFT system using the IEC modification form.",
  },
  {
    question: "Can a single person obtain an IEC?",
    answer:
      "Yes, even an individual can apply for and hold an IEC for personal or small-scale import/export activities.",
  },
  {
    question: "Is there any government fee for obtaining an IEC?",
    answer:
      "Yes, a nominal government fee is applicable for filing the IEC application on the DGFT portal.",
  },
  {
    question: "How can Legal Terminus assist with IEC registration?",
    answer:
      "Legal Terminus provides expert assistance throughout the IEC registration process — from preparing and filing your application to coordinating with DGFT for prompt approval.",
  },
];

const IECFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="iecfaq-section">
      <div className="iecfaq-container">
        {/* Left side – static text */}
        <div className="iecfaq-left">
          <h2 className="iecfaq-title">Import Export Code (IEC) FAQ&apos;s</h2>

          <p className="iecfaq-intro">
            Obtaining an Import Export Code (IEC) is a crucial step for anyone
            looking to start an import or export business in India. With expert
            guidance, the process is simple and can be completed online within a
            few days.
            <br />
            <br />
            Below are the most commonly asked questions regarding IEC
            registration, documentation, process, and compliance to help you
            understand the procedure better.
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="iecfaq-right">
          <div className="iecfaq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`iecfaq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="iecfaq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`iecfaq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                    <div className={`iecfaq-answer ${isActive ? "open" : ""}`}>
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

export default IECFAQ;
