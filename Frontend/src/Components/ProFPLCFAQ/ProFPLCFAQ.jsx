import React, { useState } from "react";
import "./ProFPLCFAQ.css";

const faqs = [
  {
    question: "What are some key benefits/ reasons for conversion of Proprietorship Firm into a company?",
    answer:
      "Once an organization is registered, the liability/responsibility to file returns vested automatically with the organization.",
  },
  {
    question: "What are some key/ basic documents required for conversion of a Proprietorship Firm into a company?",
    answer: (
    <div>
      <ol>
        <li>Particulars of members along with the proposed shareholding ratio</li>
        <li>Declaration of two or more directors verifying the particulars of all members</li>
        <li>Copy of Newspaper advertisement in prescribed format</li>
        <li>Relevant certification from a CA/CS/CWA; etc.</li>
        <li>Declaration/particulars as per DIR 8, DIR 2, 16(1), INC 9</li>
        <li>Bank Statement with current transactions</li>
        <li>KYC documents</li>
        <li>Electricity Bill, Rent Agreement, NOC by the owner of Registered office</li>
        <li>Dissolution Deed</li>
        <li>NOC unsecured creditors & secured creditors</li>
      </ol>
    </div>
  ),
  },
  {
    question: "What is the procedure for conversion a Proprietorship Firm into a company?",
    answer: (
    <div>
      <ol>
        <li>For the purpose of conversion of a sole Proprietorship Firm into a company at least two individuals are required, out of which one shall be the existing proprietor.</li>
        <li>Preparation of DSC and DIN of all proposed Directors</li>
        <li>Preparation and Filing of name application through web form RUN through MCA portal</li>
        <li>Preparation and filing of E form URC 1, E form spice, E form Spice MOA &E form Spice AOA</li>
        <li>Appropriate Government fees is payable depending upon the authorized capital of the company.</li>
        <li>Issuance of Certificate of incorporation along with PAN and TAN.</li>
      </ol>
    </div>
  ),
  },
  {
    question: "What is the time period within which the Conversion of Proprietorship Firm into a Company can be completed?",
    answer:
      "The process of Conversion of Proprietorship Firm into a Company can take anywhere between 40 to 50 working days, subject to submission of correct information and complete documentation.",
  },
  {
    question: "How Legal Terminus can help you to convert a Proprietorship Firm into a company?",
    answer:
      "Legal Terminus can help you with Conversion of Proprietorship Firm into a Company in a hassle-free manner within a reasonable time span and competitive Professional fees. To know more please book a telephonic appointment with one of our consultants for free.",
  },
];

const FaqPvt = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="profplc-faq-section">
      <div className="profplc-faq-container">
        {/* Left side */}
        <div className="profplc-faq-left">
          <h2 className="profplc-faq-title">
            Proprietorship Firm To Private limited company FAQ&apos;s
          </h2>

          <p className="profplc-faq-intro">
            Here, we’ve answered the most common questions about conversion of proprietorship into private limited company—covering documents, steps, and what happens after
            registration.
          </p>
        </div>

        {/* Right side */}
        <div className="profplc-faq-right">
          <div className="profplc-faq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`profplc-faq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="profplc-faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`profplc-faq-icon ${
                        isActive ? "open" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {isActive && (
                    <div
                      className={`profplc-faq-answer ${
                        isActive ? "open" : ""
                      }`}
                    >
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
