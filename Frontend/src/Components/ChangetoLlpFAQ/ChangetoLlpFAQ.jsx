import React, { useState } from "react";
import "./ChangetoLlpFAQ.css"; // keep your existing CSS file

const faqs = [
  {
    question: "How many persons are required to form an LLP?",
    answer:
      "Minimum two persons are required to form an LLP and there is no upper limit to it.",
  },
  {
    question: "How many Designated Partners are required to form an LLP?",
    answer: "Minimum two Designated Partners are required in an LLP.",
  },
  {
    question: "Who are Designated Partners of the LLP?",
    answer:
      "Designated Partners are officers of the LLP who are responsible for managing the LLP and making the decisions as to its operation on a day to day basis, for the benefit of the shareholders.",
  },
  {
    question: "How much contribution is required to start an LLP?",
    answer:
      "The LLP can be incorporated with any amount of capital and there is no lower or upper limit to it.",
  },
  {
    question: "What are some basic/ key documents required to incorporate an LLP in India?",
    answer: (
      <ol>
        <li>PAN Card (All the Proposed Designated Partners and/or Partners)</li>
        <li>ID Proof (All the Proposed Designated Partners and/or Partners)(Passport/ Voter ID/ Aadhar Card/ Driving License)</li>
        <li>Address Proof (All the Proposed Designated Partners and/or Partners)(Telephone Bill/ Mobile Bill/ Savings Bank Statement)</li>
        <li>Passport size Photograph (All the Proposed Designated Partners and/or Partners)</li>
        <li>Rent Agreement (For proposed LLP Address)</li>
        <li>Electricity bill</li>
        <li>A permission letter from the owner about use of his premises for registered office of the proposed LLP</li>
        <li>All the documents mentioned above in point no 1 to 3 need to be self-signed by the respective proposed Designated Partners/ Partners All the utility bills or bank statements shall be less the 2 months old</li>
      </ol>
    ),
  },
  {
    question: "What is the procedure to register an LLP?",
    answer: (
      <div>
        <p>The broad process of registering an LLP involves following steps:</p>
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
    question: "What is the time period within which an LLP can be incorporated?",
    answer:
      "The process of incorporating an LLP can take anywhere between 15 to 20 working days, subject to submission of correct information and complete documentation.",
  },
  {
    question: "How Legal Terminus can help you incorporate an LLP in India?",
    answer:
      "Legal Terminus can help you with incorporation of an LLP for you, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
  },
];

const FaqLLP = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="llpfaq-section">
      <div className="llpfaq-container">

        {/* Left side */}
        <div className="llpfaq-left">
          <h2 className="llpfaq-title">Limited Liability Partnership FAQ's</h2>

          <p className="llpfaq-intro">
            Explore answers to frequently asked questions on Limited Liability Partnership (LLP) registration in India, including benefits, eligibility, compliance requirements, and comparisons with other business structures—so you can make the right choice with confidence.
          </p>
        </div>

        {/* Right side */}
        <div className="llpfaq-right">
          <div className="llpfaq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`llpfaq-item ${isActive ? "llpfaq-active" : ""}`}
                >
                  <button
                    type="button"
                    className="llpfaq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isActive}
                    aria-controls={`llpfaq-answer-${index}`}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`llpfaq-icon ${isActive ? "llpfaq-open" : ""}`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>

                  {isActive && (
                    <div
                      id={`llpfaq-answer-${index}`}
                      className="llpfaq-answer"
                      role="region"
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

export default FaqLLP;
