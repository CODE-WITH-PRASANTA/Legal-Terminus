import React, { useState } from "react";
import "./IncorporationFAQ.css";

const faqs = [
  {
    question: "How many persons are required to form a Private Limited Company?",
    answer:
      "Minimum two persons are required to form a Private Limited Company and a maximum up to 200 persons can be a member of a single Private Limited Company.",
  },
  {
    question: "How many Directors are required to form a Private Limited Company?",
    answer:
      "Minimum two directors are required in a Private Limited Company, with an upper cap up to 15 directors.",
  },
  {
    question: "Who are Directors of the company?",
    answer:
      "Directors are officers of the company who are responsible for managing the company and making the decisions as to its operation on a day to day basis, for the benefit of the shareholders.",
  },
  {
    question: "What is a company shareholder?",
    answer:
      "Shareholders are the owners of companies limited by shares. As the beneficial owners of a limited company, they are not involved in day-to-day management or financial affairs.",
  },
  {
    question: "How much capital is required to start a Private Limited Company?",
    answer:
      "The Private Limited Company can be incorporated with any amount of capital and there is no lower or upper limit.",
  },
  {
    question: "What documents are required to incorporate a Private Limited Company?",
    answer:
      "PAN Card, Address Proof, Identity Proof of all directors and shareholders.",
  },
  {
    question: "What is the procedure to register a Private Limited Company?",
    answer:
      "You need two directors, shareholders, a company name, office address, and KYC documents.",
  },
  {
    question: "What is the time period for incorporation?",
    answer:
      "Incorporation usually takes 10–15 working days after submission of correct documents.",
  },
  {
    question: "How Legal Terminus can help?",
    answer:
      "Legal Terminus assists with hassle-free incorporation at competitive fees.",
  },
];

const IncorporationFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="s8faq-section">
      <div className="s8faq-container">

        {/* LEFT */}
        <div className="s8faq-left">
          <h2 className="s8faq-title">
            Incorporation Company Registration FAQ&apos;s
          </h2>

          <p className="s8faq-intro">
            Starting a Private Limited Company in India is an important step for
            any business owner. With the right support, the process can be simple
            and stress-free.
            <br /><br />
            Below are answers to the most common questions related to company
            registration.
          </p>
        </div>

        {/* RIGHT */}
        <div className="s8faq-right">
          <div className="s8faq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`s8faq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    className="s8faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`s8faq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>

                  <div
                    className={`s8faq-answer ${
                      isActive ? "open" : ""
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IncorporationFAQ;
