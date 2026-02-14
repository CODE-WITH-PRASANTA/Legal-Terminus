import React, { useState } from "react";
import "./BCfaq.css";

const faqs = [
  {
    question: "Is Bar Code Registration mandatory for all business organizations?",
    answer:
      "The Bar Code Registration is not a mandatory requirement for any organization; however, In order to capture a wider market place as well as audience it is recommended to obtain Bar Code Registration for your products.",
  },
  {
    question: "What are some basic/ key documents required for Bar Code Registration?",
    answer: (
      <div>
        <ol>
          <li>Applicant Company’s PAN card</li>
          <li>Copy of audited balance sheet latest</li>
          <li>Letter on company letterhead requesting bar code allotment</li>
          <li>Registration Proof of Organisation along with GST Registration Certificate</li>
          <li>Cancelled cheque copy of the Organisation</li>
        </ol>
      </div>
    ),
  },
  {
    question: "Who are Directors of the company?",
    answer: (
      <div>
        <p>
          The broad process of obtaining Bar Code Registration involves following steps:
        </p>

        <ol>
          <li>STEP 1: Provide the above-mentioned documents/information of your organization to one of our consultants.</li>
          <li>STEP 2: Our consultant will process the above documents/ information and validate the same.</li>
          <li>STEP 3: The application for BAR CODE REGISTRATION shall be filled</li>
          <li>STEP 4: The application shall be submitted with requisite fees</li>
          <li>STEP 5: The issuing Board/ Organization shall issue Bar Codes Registration Certificate</li>
        </ol>
      </div>
    ),
  },
  {
    question:
      "What is the time period within which the Bar Code Registration can be obtained?",
    answer:
      "The process of obtaining Bar Code Registration can take anywhere between 7 to 10 working days, subject to submission of correct information and complete documentation.",
  },
  {
    question: "How Legal Terminus can help you to obtain Bar Code Registration?",
    answer:
      "Legal Terminus can help you with obtaining BAR CODE REGISTRATION for your organization, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
  },
];

const FaqPvt = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left side – static text */}
        <div className="faq-left">
          <h2 className="faq-title">Bar Code Registration FAQ&apos;s</h2>

          <p className="faq-intro">
            Here, we’ve answered the most common questions about barcode registration covering documents, steps, and what happens after registration. These FAQs will help you understand everything clearly and move ahead with confidence.
          </p>

          <p className="faq-intro">
            
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="faq-right">
          <div className="faq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`faq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`faq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                   <div className={`faq-answer ${isActive ? "open" : ""}`}>
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

export default FaqPvt;
