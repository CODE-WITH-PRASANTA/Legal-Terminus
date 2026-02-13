import React, { useState } from "react";
import "./PublicltdFAQ.css";

const FAQ_ITEMS = [
  {
    question: "How many persons are required to form a Public limited company?",
    answer:
      "Minimum Seven persons are required to form a Public Limited Company and there is no maximum limit to it."
  },
  {
    question: "How many Directors are required to form a Public limited company?",
    answer:
      "Minimum three directors are required in a Public Limited Company, with an upper cap of 15 directors."
  },
  {
    question: "Who are Directors of the company?",
    answer:
      "Directors are officers of the company who are responsible for managing the company and making the decisions as to its operation on a day to day basis, for the benefit of the shareholders."
  },
  {
    question: "What is a company shareholder?",
    answer:
      "Shareholders are the owners of companies limited by shares. As the beneficial owners of a limited company, they are not involved in day-to-day management or financial affairs. They are also called 'members' and they agree to become part of a company by taking a minimum of one share in it. The quantity of shares held by each person represents how much of the business they own."
  },
  {
    question: "How much capital is required to incorporate a Public Limited Company?",
    answer:
      "The Public Limited Company can be incorporated with minimum Authorized and paid up capital of Rs. 5,00,000/- and there is no upper limit, however, ROC fees vary with change in/ increase in Authorised Capital."
  },
  {
    question: "What are some basic/ key documents required to a Public Limited Company Registration in India?",
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
        </ol>
      <p>
          All the documents mentioned above in point no 1 to 3 need to be self-signed by the respective proposed directors/ members/ shareholders All the utility bills or bank statements shall be less the 2 months old
        </p>
        </div>
    ),
    },
  {
    question: "What is the procedure to register a Public Limited Company?",
    answer: (
      <div>
        <p>
          The broad process of registering a Public Limited company involves following steps:
        </p>

        <ol>
          <li>STEP 1 : Provision of requisite mentioned documents/information to us</li>
          <li>STEP 2 : Validating the documents/ information and processing the same</li>
          <li>STEP 3 : Filing of application and submission of the same in online manner</li>
          <li>STEP 4 : Payment of appropriate government fee as applicable</li>
          <li>STEP 5 : Processing of the application and issuance of registration certificate</li>
        </ol>
      </div>
    ),
      
  },
  {
    question: "What is the time period within which a Public Limited Company can be incorporated?",
    answer:
      "The process of incorporating a Public Limited Company can take anywhere between 15 to 20 working days, subject to submission of correct information and complete documentation."
  },
  {
    question: "How Legal Terminus can help you incorporate a Public Limited Company in India?",
    answer:
      "Legal Terminus can help you with the incorporation of a Public Limited Company for you, as and when required, in a hassle-free manner within a reasonable time span and for a competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge."
  },
];

const LlpFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-wrapper">
      <div className="faq-inner">
        {/* LEFT SIDE – CONSTANT TEXT */}
        <div className="faq-left">
          <h1 className="faq-title">Public Limited Company Registration FAQ's</h1>
          <p className="faq-description">
            Find answers to common questions about Public Limited Company registration in India, including benefits, requirements, compliance, and how it compares with other business types.
          </p>
        </div>

        {/* RIGHT SIDE – SCROLLABLE FAQ LIST */}
        <div className="faq-right">
          <div className="faq-right-inner">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="faq-question-row"
                    onClick={() => toggleIndex(index)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className={`faq-icon ${isOpen ? "rotated" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
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

export default LlpFaqs;
