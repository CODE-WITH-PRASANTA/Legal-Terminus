import React, { useState } from "react";
import "./FoodLicenseFAQ.css";

const faqs = [
  {
    question: "Is FSSAI Registration mandatory for all business organizations?",
    answer:
      "The FSSAI Registration or Food License is mandatory for those Food Business Operator (FBO)who are engaged in the business of food including manufacturer, traders, distributor, food trucks, hotels, Restaurant owners, food vending establishments, hawkers, Dhaba, club, canteen and storage etc.",
  },
  {
    question: "What are the types of Food license?",
    answer:
      "There are three types of food licenses: Basic license, State license, Central license",
  },
  {
    question: "What is the validity of license?",
    answer:
      "A Registration or license granted under these Regulations shall be valid and subsisting, unles so therewise specified, for a period of 1 to 5 years as chosen by the Food Business Operator, from the date of issue of registration or license subject to remittance of fee applicable for the period and compliance with all conditions of license.",
  },
  {
    question: "What is the due date of renewal of license?",
    answer:
      "The renewal of license shall be completed at least 30 days prior to the date of expiry and the application for renewal can be filed 120 days prior to the date of expiry.",
  },
  {
    question: "What if we do not renew the license at least 30 days prior to the date of expiry?",
    answer:
      "Any renewal application filed beyond the period mentioned as above but before the expiry date, shall be accompanied by a late fee of Rs 100 per day for each day of delay.",
  },
  {
    question: "Can we renew the food license after the date of expiry?",
    answer:
      "Any Registration or license for which renewal has not been applied for within the period mentioned above shall expire and the Food Business Operator shall stop all business activity at the premises. The Food Business Operator will have to apply for fresh Registration or license as the case may be, if it wants to restart the business.",
  },
  {
    question: "What are the documents required for registration of food license?",
    answer: (
      <div>
        <p>
          An organization shall be required to obtain GST Registration on fulfilment
          of prescribed criteria and some key/basic criteria is mentioned below:
        </p>

        <ol>
          <li>Address Proof (preferably Electricity Bill) of premise(s) from where the business to be carried on in Odisha</li>
          <li>Copy of PAN &Registration certificate of the organisation</li>
          <li>Copy of MOA & AOA, in case of a Company</li>
          <li>Proof of possession of premises (Rental Agreement/ Utility Bill)</li>
          <li>Copy of PAN of all the Directors/partners/proprietor</li>
          <li>Copy of Address proof of all the Directors/partners/proprietor</li>
          <li>Bank details & Bank Statement of the organisation of last 2 Months (from which it operates)
           PAN, photo & Address proof of the person authorized to represent at the Food License Department</li>
          <li>List of food products manufactured or processed or stored.</li>
          <li>Food safety management system undertaking</li>
          <li>Signed and Completed Form-B</li>
          <li>Physical Health Certificate for all the employees from a practicing Doctor</li>
          <li>Email id & Mobile number</li>
          <li>Water Testing Certificate (in case of manufacturer and restaurant owners, not applicable for traders/marketers)</li>
          <li>Trade License (Mandatory in case the address of the business falls under the jurisdiction of any municipality)</li>
        </ol>
      </div>
    ),
  },
  {
    question: "What is the time period within which the FSSAI Registration can be obtained?",
    answer:
      "The process of obtaining FSSAI Registration can take anywhere between 15 to 20 working days, subject to submission of correct information and complete documentation",
  },
  {
    question: "What is the procedure to obtain FSSAI Registration?",
    answer: (
      <div>
        <p>
          The broad process of obtaining FSSAI Registration involves following steps:
        </p>

        <ol>
          <li>STEP 1: Provide the above-mentioned documents/information of your organization to one of our consultants.</li>
          <li>STEP 2: Our consultant will process the above documents/ information and validate the same.</li>
          <li>STEP 3: The application for Trade License shall be filled online or offline as the case may be.</li>
          <li>STEP 4: The application shall be submitted with required attachments.</li>
          <li>STEP 5: The department shall process the application and issue a registration certificate</li>
        </ol>
      </div>
    ),
  },
  {
    question: "How Legal Terminus can help you to register your organization under FSSAI?",
    answer:
      "Legal Terminus can help you with obtaining FSSAI Registration for your organization, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
  },
];

const FoodLicenseFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="foodfaq-section">
      <div className="foodfaq-container">
        {/* Left side – static text */}
        <div className="foodfaq-left">
          <h2 className="foodfaq-title">Food License Registration FAQ&apos;s</h2>

          <p className="foodfaq-intro">
            Here are the most commonly asked questions regarding FSSAI
            registration, documentation, process, and compliance to help you
            understand the procedure better.
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="foodfaq-right">
          <div className="foodfaq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`foodfaq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="foodfaq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`foodfaq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                    <div className={`foodfaq-answer ${isActive ? "open" : ""}`}>
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

export default FoodLicenseFAQ;
