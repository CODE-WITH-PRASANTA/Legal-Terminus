import React, { useState } from "react";
import "./ISOfaq.css";

const faqs = [
  {
    question: "Is ISO Certification mandatory for all business organizations?",
    answer:
      "The ISO Certification is not a mandatory requirement for any organization; however, it certainly provides a competitive not to any organization.",
  },
  {
    question: "Can an organization obtain multiple ISO Certifications?",
    answer:
      "Yes, an organization can obtain multiple ISO Certification as per its requirement.",
  },
  {
    question: "What is the validity of ISO Certificates?",
    answer:
      "The validity of the ISO Certificate depends on the issuing organization or Board and generally certificates are valid for period of 1 to 3 years and are required to be renewed thereafter.",
  },
  {
    question:
      "What are the documents required for ISO Certification?",
    answer: (
      <div>
        <ol>
          <li>Any registration proof of the organization</li>
          <li>One Letter Head of the Organization</li>
          <li>One or more Sale or Purchase Invoices of the organization</li>
        </ol>
      </div>
    ),
  },
  {
    question: "What is the time period within which the ISO Certification can be obtained?",
    answer:
      "The process of obtaining ISO Certification can take anywhere between 7 to 10 working days, subject to submission of correct information and complete documentation.",
  },
  {
    question:
      "What is the procedure to obtain ISO Certification?",
    answer: (
      <div>
        <p>
          The broad process of obtaining ISO Certification involves following steps:
        </p>

        <ol>
          <li>STEP 1: Provide the above-mentioned documents/information of your organization to one of our consultants.</li>
          <li>STEP 2: Our consultant will process the above documents/ information and validate the same.</li>
          <li>STEP 3: The application for ISO CERTIFICATION shall be filled</li>
          <li>STEP 4: The application shall be submitted with requisite fees</li>
          <li>STEP 5: The issuing Board/ Organization shall issue ISO Certificate</li>
        </ol>
      </div>
    ),
  },
  {
    question:
      "How Legal Terminus can help you to obtain ISO Certification?",
    answer:
      "Legal Terminus can help you with obtaining ISO CERTIFICATION for your organization, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
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
          <h2 className="faq-title">ISO Certification FAQ&apos;s</h2>

          <p className="faq-intro">
            Here, we’ve answered the most common questions about ISO certification covering documents, steps, and what happens after registration. These FAQs will help you understand everything clearly and move ahead with confidence.
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
