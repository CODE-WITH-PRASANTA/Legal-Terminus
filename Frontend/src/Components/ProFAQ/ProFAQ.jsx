import React, { useState } from "react";
import "./ProFAQ.css";

const faqs = [
  {
    question: "How many persons are required to form a Sole Proprietorship Firm?",
    answer:
      "Only one person is required to form a Sole Proprietorship Firm.",
  },
  {
    question: "Why should I choose to register a Sole Proprietorship Firm?",
    answer:
      "A Sole Proprietorship Firm is very easy to form due to its minimal registration requirement and it requires only one person to incorporate.",
  },
  {
    question: "How can I register a Sole Proprietorship Firm?",
    answer:
      "In India there is no mechanism for registration of a Proprietorship Firm. However, the proprietorship firm can be established through various registrations required to start and/ or operate a business in India as per the rules and regulations, i.e., GST Registration, Trade License, Food License, Aadhar Udyog etc.",
  },
  {
    question:
      "Can I choose any name as per my choice for my Sole Proprietorship Firm?",
    answer:
      "The proprietor can choose any business name as per his/her wish to create a Sole Proprietorship Firm. However, the business name should not be same as of a registered trade mark.",
  },
  {
    question: "Can I restrict others to use my Sole Proprietorship Firm’s name?",
    answer:
      "No, the Sole Proprietorship Firm cannot restrict any other person to use its business name, unless it gets its name registered under Trade Mark.",
  },
  {
    question:
      "What are the Income tax implications on me as a Sole Proprietorship Firm?",
    answer:
      "Income earned by Sole Proprietorship Firm is considered as income earned by the owner and thus, taxed in its individual hand. Accordingly, the tax shall be computed as per slab. However, it is to be noted that Income-tax Act, 1961 provides (almost) common rules for the calculation of taxable business income for all entity structure (say, company, partnership, sole proprietorship firm etc.)",
  },
  {
    question:
      "To what extent the liability of a Sole Proprietorship Firm is limited?",
    answer:
      "The liability of a sole proprietor is unlimited. As the Government does not differentiate between the Sole Proprietorship firm and a Sole Proprietor, the proprietor is personally liable for all the debts incurred by the Sole Proprietorship Firm.",
  },
  {
    question:
      "How Legal Terminus can help us registering a Sole Proprietorship Firm?",
    answer:
      "Legal Terminus can help you with registration of Sole Proprietorship Firm for you, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
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
          <h2 className="faq-title">Proprietorship Firm Registration FAQ&apos;s</h2>

          <p className="faq-intro">
            Starting a Proprietorship Firm Registration in India is an important step for any business owner. With the right support, the process can be simple and stress-free.
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
