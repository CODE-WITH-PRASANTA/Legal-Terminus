import React, { useState } from "react";
import "./Section8FAQ.css"; 

const faqs = [
  {
    question: "Who can form a Section 8 Company?",
    answer:
      "Anyone who promotes social welfare, education, charity, or similar non-profit activities can form a Section 8 Company. It typically requires at least 2 members and the company must have non-profit objectives compliant with the Ministry of Corporate Affairs (MCA) rules.",
  },
  {
    question: "How long does it take to complete the Section 8 Company registration online?",
    answer:
      "The timeline varies by state and document readiness. Generally the end-to-end process (name reservation, document preparation, filing and approval) can take about 7–21 working days when documents are complete.",
  },
  {
    question: "What are the minimum requirements for a Section 8 Company?",
    answer:
      "Key requirements: a minimum number of members (usually 2 for private companies), an approved name, Memorandum & Articles of Association with charitable objects, and compliance with Companies Act formalities.",
  },
  {
    question: "How should I choose the name for my Section 8 Company?",
    answer:
      "Pick a unique name relevant to your objectives. Avoid prohibited words and check the MCA name availability portal. The proposed name must also reflect the non-profit/charitable purpose.",
  },
  {
    question: "How many directors are required for a Section 8 Company?",
    answer:
      "Minimum directors depend on the company type (private/public). For many Section 8 private companies, at least two directors are needed; check the applicable rules for your structure.",
  },
  {
    question: "What is the role of the Regional Director (RD) in Section 8 Company registration?",
    answer:
      "The RD handles certain filings and approvals under the Companies Act and may be involved when special permissions or scrutiny are required for licensing or changes to a Section 8 Company.",
  },
  {
    question: "Is a physical office mandatory to establish a Section 8 Company?",
    answer:
      "Yes — you must provide a registered office address for communication and records. Proof (rent agreement, electricity bill, title deed or NOC) will usually be needed.",
  },
  {
    question: "What is the difference between a trust, a society, and a Section 8 company?",
    answer:
      "Trusts are governed by Trust Acts, societies by Societies Registration Acts (statewise) and Section 8 companies by Companies Act. Section 8 companies generally have stricter compliance but higher credibility and options for national scale operations.",
  },
  {
    question: "What is the difference between an NGO and a Section 8 Company?",
    answer:
      "“NGO” is an umbrella term—NGOs can be trusts, societies or Section 8 companies. A Section 8 company is a formal corporate structure under Companies Act with specific compliance requirements and advantages.",
  },
  {
    question: "How to register a Section 8 Company?",
    answer:
      "Prepare MOA/AOA aligned to charitable objects, reserve a name, collect KYC & documents for members/directors, file the incorporation forms on MCA portal, pay fees and obtain the Certificate of Incorporation.",
  },
  {
    question: "How to get a Registration Number for a Section 8 Company?",
    answer:
      "On successful incorporation via MCA, the Registrar issues a Certificate of Incorporation which includes the Corporate Identification Number (CIN).",
  },
  {
    question: "Is GST registration mandatory for a Section 8 company?",
    answer:
      "GST is required if the company’s taxable turnover crosses the statutory threshold or if the company supplies taxable goods/services. Check current thresholds and specific activities.",
  },
  {
    question: "Is FDI allowed in a Section 8 company?",
    answer:
      "FDI rules vary by sector. Allowability depends on the activity and sectoral FDI policy—seek professional advice to confirm whether foreign investment is permitted for your objectives.",
  },
  {
    question: "Can a Section 8 Company be converted into any other company?",
    answer:
      "Conversion is possible under certain conditions but requires regulatory approvals and compliance with Companies Act provisions and government permissions; it can be complex.",
  },
  {
    question: "Is Section 8 Company tax-free?",
    answer:
      "Section 8 status alone doesn't automatically make income tax exempt. You must apply for 12A/12AB and 80G (where relevant) to obtain tax exemptions/benefits.",
  },
  {
    question: "Can foreign nationals or NRIs become directors of a Section 8 Company in India?",
    answer:
      "Yes, subject to KYC, visa and regulatory compliance. If the company receives foreign contributions, FCRA and other rules may apply.",
  },
  {
    question: "How can I check if my Section 8 Company is registered or not?",
    answer:
      "Use the MCA public search (CIN/name) to check registration status and view public documents and incorporation certificate details.",
  },
  {
    question: "Can a Section 8 company pay remuneration to its directors?",
    answer:
      "Payment of remuneration is allowed subject to the Articles of Association, Board/Shareholder approvals and adherence to Companies Act rules on director remuneration.",
  },
  {
    question: "Is IFC applicable to Section 8 companies?",
    answer:
      "IFC applicability depends on specific international financing arrangements and the nature of activities—consult your financial/legal advisor for applicable regulations.",
  },
  {
    question: "Is CSR applicable to Section 8 companies?",
    answer:
      "CSR provisions apply to companies meeting turnover/profit/net worth thresholds. Many Section 8 companies may not fall under CSR mandates but eligibility depends on financial thresholds.",
  },
  {
    question: "Can the director of the Section 8 company draw a salary?",
    answer:
      "Yes, directors may receive salary/compensation where permitted by the Articles, Board/General Meeting approvals and Companies Act limits or approvals (if required).",
  },
];

const SocietyFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first open by default

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="societyfaqsection" aria-label="Section 8 FAQ">
      <div className="societyfaqcontainer">
        <div className="societyfaqleft">
          <h2 className="societyfaqtitle">Frequently Asked Questions (FAQs)</h2>

          <p className="societyfaqintro">
            Society / Section 8 guidance — answers to common queries about
            incorporation, compliance, documentation and procedures.
          </p>

          <p className="societyfaqintro">
            Click a question on the right to reveal the answer. This list is
            responsive and keyboard accessible.
          </p>
        </div>

        <div className="societyfaqright">
          <div className="societyfaqlist">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`societyfaqitem ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="societyfaqquestion"
                    aria-expanded={isActive}
                    onClick={() => toggleFaq(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleFaq(index);
                      }
                    }}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`societyfaqicon ${isActive ? "open" : ""}`}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </button>

                  {isActive && (
                    <div className="societyfaqanswer">
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

export default SocietyFAQ;
