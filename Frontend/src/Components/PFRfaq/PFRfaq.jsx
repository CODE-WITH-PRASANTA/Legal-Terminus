import React, { useState } from "react";
import "./PFRfaq.css";

const faqs = [
  {
    question: "How many persons are required to form a Partnership Firm?",
    answer:
      "Minimum 2 persons are required to form a Partnership Firm and there is an upper cap of 20 persons.",
  },
  {
    question: "Why should I choose to register a Partnership Firm?",
    answer:
      "A Partnership Firm is very easy to form due to its minimal registration requirement and it requires only a Partnership deed to incorporate.",
  },
  {
    question: "How can I create/ form a Partnership Firm?",
    answer:
      "In India a Partnership Firm can be formed through a Partnership Deep duly notarised by a Notary Public.",
  },
  {
    question:
      "What is the Stamp duty amount to be paid for execution of a Partnership Deed?",
    answer:
      "The Partnership deed needs to be executed with Rs. 200/- Stamp Paper in India.",
  },
  {
    question: "Can I choose any name as per my choice for my Partnership Firm?",
    answer:
      "The partners can choose any business name as per their wish to create a Partnership Firm. However, the business name should not be same as of a registered trade mark.",
  },
  {
    question:
      "Can I restrict others to use my Partnership Firm’s name?",
    answer:
      "No, the Partnership Firm cannot restrict any other person to use its business name, unless it gets its name registered under Trade Mark.",
  },
  {
    question:
      "What are the Income tax implications on me as a Partnership Firm?",
    answer:
      "Income earned by the Partnership firm is taxed in the hands of the firm itself at a flat rate of 30% (surcharge and cess to be charged extra). However, the partner’s share of profit is exempt from tax and interest on capital is exempt to a certain limit.",
  },
  {
    question:
      "To what extent the liability of a Partnership Firm is limited?",
    answer:
      "The liability of a Partnership Firm and its Partners are unlimited in the eyes of Law.",
  },
  {
    question:
      "What is the procedure to register a Partnership Firm?",
    answer: (
      <div>
        <p>
          The broad process of registering a Partnership Firm involves following steps:
        </p>

        <ol>
          <li>STEP 1 : Provision of requisite mentioned documents/information to us</li>
          <li>STEP 2 : Validating the documents/ information and processing the same</li>
          <li>STEP 3 : Filing of application and submission of the same</li>
          <li>STEP 4 : Payment of appropriate government fee as applicable</li>
          <li>STEP 5 : Processing of the application and issuance of registration certificate</li>
        </ol>
      </div>
       ),
  },
  {
    question:
      "What is the time period within which a Partnership Firm can be formed?",
    answer:
      "The process of formation of a Partnership Firm can take anywhere between 5 to 7 working days, subject to submission of correct information and complete documentation.",
  },
  {
    question:
      "How Legal Terminus can help you register a Partnership Firm in India?",
    answer:
      "Legal Terminus can help you with registration of a Partnership Firm for you, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
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
          <h2 className="faq-title">Partnership Firm Registration FAQ&apos;s</h2>

          <p className="faq-intro">
            Starting a Partnership Firm in India is an easy and practical way to run a business with two or more partners. Here, we’ve answered the most common questions related to Partnership Firm Registration, including documents required, registration steps, and post-registration process, so you can proceed smoothly with full clarity and confidence.
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
