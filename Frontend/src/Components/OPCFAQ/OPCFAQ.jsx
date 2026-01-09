import React, { useState } from "react";
import "./OPCFAQ.css";

const faqs = [
  {
    question: "How many persons are required to form a One Person Company?",
    answer:
      "Only one person is required to form a One Person Company (OPC) under the Companies Act, 2013. Additionally, a nominee must be appointed who will take charge in case of the sole member’s incapacity or death.",
  },
  {
    question: "Who can form a One Person Company?",
    answer:
      "Only a natural person who is an Indian citizen and resident in India can incorporate an OPC. Such a person can be both the shareholder and the director.",
  },
  {
    question: "Is there any restriction on the number of OPCs one can form?",
    answer:
      "A person can form only one OPC and cannot be a nominee in more than one OPC at the same time.",
  },
  {
    question: "Can an OPC be converted into a Private Limited Company?",
    answer:
      "Yes, an OPC can be converted into a Private Limited or Public Limited Company upon meeting the prescribed conditions under the Companies Act, 2013.",
  },
  {
    question: "What is the minimum capital required for an OPC?",
    answer:
      "There is no minimum capital requirement for registering an OPC. You can start with any amount that suits your business needs.",
  },
  {
    question: "Who manages an OPC?",
    answer:
      "The single shareholder can also act as the director and manage daily operations, making management simple and efficient.",
  },
  {
    question: "What are the benefits of forming an OPC?",
    answer:
      "It offers limited liability, separate legal identity, ease of management, and access to various government schemes and benefits.",
  },
  {
    question: "How long does it take to register an OPC?",
    answer:
      "Typically, it takes about 7–10 working days for registration, depending on document submission and government approvals.",
  },
  {
    question:
      "How Legal Terminus can help you incorporate a One Person Company?",
    answer:
      "Legal Terminus provides end-to-end assistance for OPC registration, including documentation, filing, and compliance — all handled professionally at a reasonable cost.",
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
            Starting a One Person Company (OPC) is a great step for solo
            entrepreneurs who want full control with limited liability. With the
            right support, the process can be straightforward and stress-free.
            <br />
            <br />
            Here, we’ve answered the most frequently asked questions about OPC
            registration, documents, steps, and other important details to help
            you move ahead with confidence.
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
