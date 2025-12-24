import React, { useState } from "react";
import "./PvtltdFAQ.css";

const faqs = [
  {
    question: "What Is Private Limited Company Registration in India?",
    answer:
      "A Private Limited Company (Pvt Ltd) is a privately held entity with up to 200 shareholders. It offers limited liability, separate legal status, perpetual succession, and better business credibility, governed by the Companies Act, 2013 under the Ministry of Corporate Affairs.",
  },
  {
    question: "How to Register a Private Limited Company Step-By-Step?",
    answer:
      "The usual steps include: 1) Obtaining DSC & DIN for proposed directors, 2) Choosing and reserving a unique company name, 3) Preparing incorporation documents, 4) Filing the SPICe+ form with MCA, and 5) Receiving the Certificate of Incorporation and post-incorporation registrations.",
  },
  {
    question: "How Much Does It Cost to Register a Private Limited Company in India?",
    answer:
      "The cost depends on authorised capital, state of registration, and professional fees. It typically includes government filing fees, stamp duty, DSC, PAN/TAN, and professional charges for documentation and compliance support.",
  },
  {
    question:
      "Can I Register a Private Limited Company Online Without Visiting Any Office?",
    answer:
      "Yes. Most of the process is online. With valid KYC documents, DSCs, and e-signing, you can complete incorporation without visiting any physical office. All filings are made on the MCA portal.",
  },
  {
    question: "Is a Digital Signature Certificate (DSC) Mandatory?",
    answer:
      "Yes. Every proposed director or authorised signatory who signs e-forms on the MCA portal must have a valid DSC issued by a licensed certifying authority.",
  },
  {
    question:
      "Who Is Eligible to Register a Private Limited Company in India?",
    answer:
      "Any individual or corporate body, Indian or foreign, can become a shareholder or director, subject to the Companies Act and sector-specific regulations. At least one director must be a resident in India.",
  },
  {
    question:
      "What Are the Minimum Requirements for Private Limited Company Registration?",
    answer:
      "You need at least two directors, two shareholders, a unique company name, a registered office address in India, and the necessary KYC documents for all directors and shareholders.",
  },
  {
    question:
      "Can a Salaried Person Become a Director of a Private Limited Company?",
    answer:
      "Yes, unless restricted by their employment contract or employer’s internal policies. Many salaried individuals incorporate companies as co-founders or directors.",
  },
  {
    question:
      "Can a Private Limited Company Operate Multiple Businesses?",
    answer:
      "Yes, as long as the activities are covered in the company’s main and ancillary objects in the MOA and are permitted by applicable laws. You may need to alter objects if you diversify later.",
  },
  {
    question:
      "What Documents Are Required for Private Limited Company Registration?",
    answer:
      "Generally you need PAN, Aadhaar, address proof, photographs of directors/shareholders, proof of registered office (utility bill, rent agreement, NOC), and any additional documents specified in the incorporation checklist.",
  },
  {
    question:
      "How to Choose and Reserve a Name for a Private Limited Company?",
    answer:
      "The name should be unique, not identical or similar to existing companies or trademarks, and must follow MCA naming guidelines. You can check availability on the MCA and IP India portals before filing name reservation.",
  },
  {
    question:
      "How to Avoid Name Rejection and Delays in Private Limited Company Registration?",
    answer:
      "Do a thorough name search, follow naming rules, avoid generic or restricted words, and provide clear, descriptive objects in the SPICe+ form. Keeping documents complete and consistent also helps avoid resubmissions.",
  },
  {
    question: "What Should I Do After My Private Limited Company Is Registered?",
    answer:
      "Post-incorporation tasks include opening a bank account, issuing share certificates, maintaining statutory registers, appointing an auditor, registering for GST or other licenses if required, and ensuring timely ROC and tax compliances.",
  },
  {
    question:
      "What Are the Annual Compliance Requirements for a Private Limited Company?",
    answer:
      "Typical compliances include board and general meetings, maintenance of registers, filing annual return and financial statements with ROC, income-tax returns, and any GST or sectoral filings applicable to the business.",
  },
  {
    question:
      "What Are the Penalties for Not Meeting Annual Compliance in a Private Limited Company?",
    answer:
      "Non-compliance can lead to additional fees, penalties, disqualification of directors, and in extreme cases, striking-off of the company’s name from the register of companies.",
  },
  {
    question:
      "Is GST Registration Mandatory for a Private Limited Company?",
    answer:
      "GST registration is mandatory when your aggregate turnover crosses the threshold prescribed under the GST laws or if you fall under compulsory registration categories (e.g., interstate supply, specific service sectors).",
  },
  {
    question:
      "What Are the Key Advantages of Registering as a Private Limited Company?",
    answer:
      "Key advantages include limited liability, separate legal identity, easier fund-raising, better credibility with customers and investors, perpetual succession, and the ability to issue equity to co-founders or investors.",
  },
  {
    question:
      "What Are the Disadvantages of Registering as a Private Limited Company?",
    answer:
      "Compared to simpler structures, it has higher compliance, more formalities for decision-making, and relatively higher costs for incorporation and maintenance.",
  },
  {
    question:
      "How Does Limited Liability Work in a Private Limited Company?",
    answer:
      "Shareholders are liable only up to the unpaid amount on their shares. Personal assets are usually protected, except in cases of fraud, personal guarantees, or misuse of the corporate form.",
  },
  {
    question:
      "What Is the Difference Between a Director and a Shareholder?",
    answer:
      "Shareholders own the company through shareholding, while directors manage day-to-day affairs and take decisions on behalf of the company. The same person can be both a shareholder and a director.",
  },
  {
    question:
      "Can a Private Limited Company Raise Funds From the Public?",
    answer:
      "A private company cannot invite the general public to subscribe for its securities. It can raise funds through private placements, rights issues, or from existing shareholders and investors.",
  },
  {
    question:
      "Can a Private Limited Company Be Converted Into Another Business Structure?",
    answer:
      "Yes, subject to conditions and approvals, it can be converted to an LLP, public company, or other structures as allowed under the Companies Act and related rules.",
  },
  {
    question:
      "Can I Change My Company’s Registered Office After Registration?",
    answer:
      "Yes. You can shift the registered office within the same city, within the same state, or to another state by following the respective procedures and filing the required ROC forms and approvals.",
  },
  {
    question:
      "Can Foreign Nationals or NRIs Be Directors in a Private Limited Company?",
    answer:
      "Yes, foreign nationals and NRIs can be directors subject to KYC, DIN, and any sector-specific conditions. However, at least one director must be resident in India.",
  },
  {
    question:
      "What Is the Corporate Identification Number (CIN)?",
    answer:
      "CIN is a unique 21-digit alphanumeric code allotted by the ROC to every registered company. It must be quoted on official documents, letterheads, and filings.",
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
          <h2 className="faq-title">Private Limited Company Registration FAQ&apos;s</h2>

          <p className="faq-intro">
            Starting a Private Limited Company is a big milestone for any
            entrepreneur. With the right guidance, the process can be smooth
            and straightforward. Whether you&apos;re curious about the SPICe+
            forms, the documents you&apos;ll need, or what comes after
            registration, we&apos;ve got you covered.
          </p>

          <p className="faq-intro">
            To make things easier, we&apos;ve answered some of the most common
            questions about Private Limited Company registration. These FAQs
            will help you understand each step clearly and give you the
            confidence to move forward. Explore the answers below and take the
            first step toward building your business.
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

export default FaqPvt;
