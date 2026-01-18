import React, { useState } from "react";
import "./PublictoPriFAQ.css";

const FAQ_ITEMS = [
  {
    question: "What is an LLP and how is it different from a Private Limited Company?",
    answer:
      "A Limited Liability Partnership (LLP) is a hybrid structure that combines features of a partnership and a company. Partners have limited liability and the LLP has a separate legal identity, whereas in a traditional partnership, partners have unlimited liability. Compared to a Private Limited Company, LLPs have fewer compliance requirements and more flexibility in internal management."
  },
  {
    question: "Who can register an LLP in India?",
    answer:
      "Any two or more individuals or body corporates can form an LLP in India, with at least two designated partners who are individuals and at least one of them being a resident in India."
  },
  {
    question: "Is LLP registration mandatory for all partnerships?",
    answer:
      "No. Traditional partnerships can still operate under the Partnership Act, but registering as an LLP gives the partners limited liability, separate legal status, and better credibility."
  },
  {
    question: "How do I register an LLP online in India?",
    answer:
      "The process is done through the MCA portal: obtain DSCs, apply for name reservation, file incorporation forms with partner details and registered office address, submit the LLP agreement, and obtain the Certificate of Incorporation."
  },
  {
    question: "What are the documents required for LLP registration?",
    answer:
      "Key documents include identity and address proof of partners, proof of registered office, LLP agreement, consent of partners, and digital signatures. Some cases may require additional documents like NOC from landlord or professional qualification proof."
  },
  {
    question: "How much does it cost to register an LLP in India?",
    answer:
      "Cost depends on government filing fees, professional fees, and stamp duty on the LLP agreement, which varies by state. Typically the cost is lower than incorporating a Private Limited Company."
  },
  {
    question: "What is the time required to complete LLP registration?",
    answer:
      "Subject to MCA processing times and document readiness, LLP registration can usually be completed within 10–15 working days."
  },
  {
    question: "Can an NRI or foreign national be a partner in an LLP?",
    answer:
      "Yes, NRIs and foreign nationals can be partners in an LLP, subject to FEMA guidelines and at least one designated partner being a resident in India."
  },
  {
    question: "Is there any minimum capital required to start an LLP?",
    answer:
      "No minimum capital is prescribed for LLPs. Partners can decide the capital contribution as per their agreement."
  },
  {
    question: "Do LLPs have to file annual returns and maintain compliance?",
    answer:
      "Yes. LLPs must file annual returns, statements of accounts and solvency, and comply with audit requirements (if applicable), even if they have no business activity."
  },
  {
    question: "Can an existing partnership firm be converted into an LLP?",
    answer:
      "Yes. Existing firms can be converted into LLPs through the prescribed conversion process on the MCA portal while transferring assets, liabilities, and rights to the LLP."
  },
  {
    question: "What is the process to add or remove a partner from an LLP?",
    answer:
      "Changes in partners are made through an amendment to the LLP agreement and filing the corresponding forms with the ROC within the specified time."
  }
];

const LlpFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="llp-faq-wrapper">
      <div className="llp-faq-inner">
        {/* LEFT SIDE */}
        <div className="llp-faq-left">
          <h1 className="llp-faq-title">FAQs on LLP Registration</h1>
          <p className="llp-faq-description">
            Explore answers to common questions about Limited Liability
            Partnership (LLP) registration in India, covering key benefits,
            eligibility, compliance requirements, partner roles, and comparison
            with other business structures to help you choose the best option
            for your needs.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="llp-faq-right">
          <div className="llp-faq-right-inner">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div
                  key={index}
                  className={`llp-faq-item ${isOpen ? "llp-faq-open" : ""}`}
                >
                  <button
                    className="llp-faq-question-row"
                    onClick={() => toggleIndex(index)}
                  >
                    <span className="llp-faq-question-text">
                      {item.question}
                    </span>
                    <span
                      className={`llp-faq-icon ${
                        isOpen ? "llp-faq-rotated" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {isOpen && (
                    <div className="llp-faq-answer">
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
