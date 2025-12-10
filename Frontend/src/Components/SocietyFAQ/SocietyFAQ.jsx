import React, { useState } from "react";
import "./SocietyFAQ.css"; // reuse the same CSS for identical design

const faqs = [
  {
    question: "What is Society Registration?",
    answer:
      "Society Registration is the formal legal process of registering a nonprofit association under the Societies Registration Act, granting it a recognized legal identity to operate officially and transparently.",
  },
  {
    question: "How to do Society Registration?",
    answer:
      "To register a society, you usually choose a unique name, draft a Memorandum of Association and Rules & Regulations, gather KYC and address documents of all members, and file an application with the Registrar of Societies of the concerned state along with the prescribed fees.",
  },
  {
    question: "Who can register a society in India?",
    answer:
      "Generally, a group of individuals—often at least seven members—can form and register a society for literary, scientific, charitable, or similar purposes. In some cases, firms, companies and other bodies may also be members as per state rules.",
  },
  {
    question: "What are the documents required for Society Registration?",
    answer:
      "Typical documents include: the Memorandum of Association, Rules & Regulations, ID and address proofs of all founding members, passport-size photos, registered office address proof (ownership documents or rent agreement with NOC), and any affidavits or declarations specified by the state Registrar.",
  },
  {
    question: "What is the cost of registering a society in India?",
    answer:
      "The cost mainly consists of government registration fees, stamp duty (if applicable), and any professional drafting or consultant charges. The exact amount varies from state to state but is usually in the range of a few thousand rupees.",
  },
  {
    question: "How to get a Society Registration certificate online?",
    answer:
      "Where online services are available, you can create an account on the state registration portal, fill in the society registration form, upload documents, pay the fees online, and track the status. Once approved, the certificate may be downloaded from the portal or collected from the Registrar’s office.",
  },
  {
    question: "How to check Society Registration online?",
    answer:
      "Most state Registrar websites provide a public search facility. You can enter the society’s registration number or name to view its basic registration details and status online.",
  },
  {
    question: "How to verify Society Registration?",
    answer:
      "Verification is usually done by cross-checking details on the state Registrar’s website and/or obtaining a certified copy of the registration certificate from the Registrar of Societies.",
  },
  {
    question: "How to download the Society Registration certificate?",
    answer:
      "If the state offers e-certificates, log in to the registration portal with your credentials and download the certificate from the society’s application dashboard. Otherwise, you may need to request a physical or certified copy from the Registrar.",
  },
  {
    question: "How to renew Society Registration online?",
    answer:
      "In states that support online renewal, you can submit a renewal application on the Registrar’s portal, upload updated documents such as annual reports and governing body details, pay renewal fees, and track the application status online.",
  },
  {
    question: "How many members are required for Society Registration?",
    answer:
      "Typically, at least seven founding members are required to form and register a society in India, though the exact requirement can vary slightly depending on state-specific rules.",
  },
  {
    question: "Is society NOC required for registration?",
    answer:
      "Yes. If the registered office premises are rented or owned by someone other than the society, a No Objection Certificate (NOC) from the property owner is generally required along with address proof.",
  },
  {
    question: "What is the benefit of Society Registration?",
    answer:
      "Registration provides a separate legal identity, allows the society to own property and open bank accounts in its name, improves credibility with donors and authorities, and is often required for government grants, tax exemptions, and formal contracts.",
  },
  {
    question: "How to register a society under the Societies Registration Act?",
    answer:
      "Draft the Memorandum of Association and Rules & Regulations, collect KYC and address documents of all members, complete the prescribed application form, and file everything with the Registrar of Societies along with the applicable fees in the state where the society will operate.",
  },
  {
    question: "How to cancel Society Registration?",
    answer:
      "Cancellation can take place through voluntary dissolution by members or by an order of the Registrar in cases of serious non-compliance, fraud, or illegal activities. The precise procedure and forms depend on state law and the society’s own rules.",
  },
  {
    question: "Can family members form a society?",
    answer:
      "Family members can be part of a society, but to maintain a genuine public character it is advisable to include unrelated members and ensure that control and benefits are not limited only to one family.",
  },
  {
    question: "Can a society register for GST?",
    answer:
      "Yes. If a society’s taxable turnover crosses the GST threshold, or it undertakes specific taxable supplies, it must obtain GST registration and comply with invoicing, return filing, and tax payment requirements.",
  },
  {
    question: "Is Society Registration mandatory in India?",
    answer:
      "Registration is not always compulsory, but it is strongly recommended. An unregistered group does not enjoy the same legal status, cannot sue or be sued in its own name, and may not be eligible for many government benefits, tax exemptions, or formal funding opportunities.",
  },
];

const SocietyFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first question open by default

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="societyfaqsection">
      <div className="societyfaqcontainer">
        {/* Left side – static text */}
        <div className="societyfaqleft">
          <h2 className="societyfaqtitle">Frequently Asked Questions (FAQs)</h2>

          <p className="societyfaqintro">
            Society Registration helps a group gain a clear legal identity so it
            can operate transparently, hold property, and work with
            government bodies and donors with confidence.
          </p>

          <p className="societyfaqintro">
            Below are answers to common questions on society registration in
            India—covering eligibility, documents, costs, renewal, online
            verification, and more. Browse through the FAQs on the right to
            understand each point before you proceed with registration.
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
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
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`societyfaqicon ${isActive ? "open" : ""}`}>
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
