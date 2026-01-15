import React, { useState } from "react";
import "./OPCFAQ.css";

const faqs = [
  {
    question: "How many persons are required to form a One Person Company?",
    answer:
      "Only one person is required to form a One Person Company.",
  },
  {
    question: "How many Directors are required to form a One Person Company?",
    answer:
      "Minimum one director is required in a One Person Company, with an upper cap of 15 directors.",
  },
  {
    question: "Who are Directors of the company?",
    answer:
      "Directors are officers of the company who are responsible for managing the company and making the decisions as to its operation on a day to day basis, for the benefit of the shareholder.",
  },
  {
    question: "What is a company shareholder?",
    answer:
      "Shareholders are the owners of companies limited by shares. As the beneficial owners of a limited company, they are not involved in day-to-day management or financial affairs. They are also called 'members' and they agree to become part of a company by taking a minimum of one share in it. The quantity of shares held by each person represents how much of the business they own. In an OPC there is only one shareholder who represents the only owner of the company.",
  },
  {
    question: "How much capital is required to incorporate a One Person Company?",
    answer:
      "The One Person Company can be incorporated with any amount of capital and there is no lower or upper limit to it. Further, the government has relaxed the government fees for Incorporation of a Private Limited Company up to an Authorized capital of Rs. 15,00,000/-, however, the stamp duty, which is still levied, varies from State to State.",
  },
  {
    question: "What are some basic/ key documents required to incorporate a One Person Company in India?",
    answer: (
      <div>
        <ol>
          <li>PAN Card (All the Proposed Directors and/or Shareholders)</li>
          <li>ID Proof (All the Proposed Directors and/or Shareholders) (Passport/ Voter ID/ Aadhar Card/ Driving License)</li>
          <li>Address Proof (All the Proposed Directors and/or Shareholders) (Telephone Bill/ Mobile Bill/ Savings Bank Statement)</li>
          <li>Passport size Photograph (All the Proposed Directors and/or Shareholders)</li>
          <li>Rent Agreement (For proposed company Address)</li>
          <li>Electricity bill</li>
          <li>A permission letter from the owner about use of his premises for registered office of the proposed company</li>
          <li>All the documents mentioned above in point no 1 to 3 need to be self-signed by the respective proposed directors/ members/ shareholders All the utility bills or bank statements shall be less the 2 months old</li>
        </ol>
      </div>
    ),

  },
  {
    question: "What is the procedure to register a One Person Company?",
    answer: (
      <div>
        <p>
          The broad process of registering a One Person Company involves following steps:
        </p>

        <ol>
          <li>STEP 1: Provision of requisite mentioned documents/information to us</li>
          <li>STEP 2: Validating the documents/ information and processing the same</li>
          <li>STEP 3: Filing of application and submission of the same in online manner</li>
          <li>STEP 4: Payment of appropriate government fee as applicable</li>
          <li>STEP 5: Processing of the application and issuance of registration certificate</li>
        </ol>
      </div>
    ),
  },
  {
    question: "What is the time period within which a One Person Company can be incorporated?",
    answer:
      "The process of incorporating a One Person Company can take anywhere between 15 to 20 working days, subject to submission of correct information and complete documentation.",
  },
  {
    question:
      "How Legal Terminus can help you incorporate a One Person Company in India?",
    answer:
      "Legal Terminus can help you with incorporation of One Person Company for you, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
  },
];

const OPCFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="opcfaq-section">
      <div className="opcfaq-container">
        {/* Left side – static text */}
        <div className="opcfaq-left">
          <h2 className="opcfaq-title">
            One Person Company Registration FAQ&apos;s
          </h2>

          <p className="opcfaq-intro">
            Starting an OPC is ideal for solo entrepreneurs who want full control with limited liability. Here are the most common FAQs on OPC registration, documents, process, and key details to help you get started smoothly.
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="opcfaq-right">
          <div className="opcfaq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`opcfaq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="opcfaq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`opcfaq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                    <div className={`opcfaq-answer ${isActive ? "open" : ""}`}>
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

export default OPCFAQ;
