import React, { useState } from "react";
import "./ProFOPCFAQ.css";

const faqs = [
  {
    question: "What are some key benefits/ reasons of the conversion of Proprietorship Firm into a One Person Company?",
    answer:(
    <div>
      <ol>
        <li>Investors prefer corporate structures over proprietorship firms.</li>
        <li>The liability of the members or the directors are limited in case of a one person company whereas in case of proprietorship firm the liabilities are unlimited</li>
        <li>A one person company is more transparent structure of business as compared to proprietorship firm</li>
        <li>The benefit of startup recognition under the startup India scheme of the government of India can be availed by a one person company and not by any proprietorship firm.</li>
        <li>The one person company has a separate legal identity as compared to a proprietorship firm.</li>
        <li>There is a separation of ownership and management in a company, whereas in proprietorship firm, the proprietor considered as owners as well as the manager of the firm.</li>
      </ol>
    </div>
  ),
},
  {
    question: "What are some key/ basic documents required for conversion of a Proprietorship Firm into a One Person Company?",
    answer:(
    <div>
      <ol>
        <li>Particulars of proposed member</li>
        <li>Declaration of director verifying the particulars of member</li>
        <li>Copy of Newspaper advertisement in prescribed format</li>
        <li>Relevant certification from a CA/CS/CWA; etc.</li>
        <li>Declaration/particulars as per DIR 8, DIR 2, 16(1), INC 9</li>
        <li>Bank Statement with current transactions</li>
        <li>KYC documents</li>
        <li>Electricity Bill, Rent Agreement, NOC by the owner of Registered office</li>
        <li>NOC unsecured creditors & secured creditors</li>
      </ol>
    </div>
  ),
},
  {
    question: "What is the procedure for conversion a Proprietorship Firm into a One Person Company?",
    answer:(
    <div>
      <ol>
        <li>For the purpose of conversion of a sole Proprietorship Firm into a one person company the owner of the proprietorship firm shall be the shareholder of the one person company</li>
        <li>Preparation of DSC and DIN of proposed Director</li>
        <li>Preparation and Filing of name application through web form RUN through MCA portal.</li>
        <li>Preparation and filing of E-form URC 1, E-form spice, E-form Spice MOA & E-form Spice AOA</li>
        <li>Appropriate Government fees is payable depending upon the authorized capital of the company.</li>
        <li>Issuance of Certificate of incorporation along with PAN and TAN.</li>
      </ol>
    </div>
  ),
},
  {
    question: "What is the time period within which the Conversion of proprietorship Firm in one person Company can be completed?",
    answer:
      "The process of Conversion of Proprietorship Firm in one person Company can take anywhere between 40 to 50 working days, subject to submission of correct information and complete documentation.",
  },
  {
    question: "How Legal Terminus can help you to convert a Proprietorship Firm into a one person company?",
    answer:
      "Legal Terminus can help you with Conversion of Proprietorship Firm into a one person Company in a hassle-free manner within a reasonable time span and competitive Professional fees. To know more please book a telephonic appointment with one of our consultants for free.",
  },
];

const FaqPvt = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="profopc-faq-section">
      <div className="profopc-faq-container">
        {/* Left side */}
        <div className="profopc-faq-left">
          <h2 className="profopc-faq-title">
            Proprietorship Firm To OPC Private Limited Company FAQ&apos;s
          </h2>

          <p className="profopc-faq-intro">
            Here, we’ve answered the most common questions about conversion of proprietorship into OPC private limited company covering documents, steps, and what happens after
            registration.
          </p>
        </div>

        {/* Right side */}
        <div className="profopc-faq-right">
          <div className="profopc-faq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`profopc-faq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="profopc-faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`profopc-faq-icon ${
                        isActive ? "open" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {isActive && (
                    <div
                      className={`profopc-faq-answer ${
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
