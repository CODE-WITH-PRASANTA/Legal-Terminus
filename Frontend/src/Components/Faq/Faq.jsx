// FILE: Faq.jsx
import React, { useState, useMemo } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineSearch } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import "./Faq.css";
import img from '../../assets/Blog-3.webp'

/**
 * Component must remain `Faq`.
 * - Added a small presentational wrapper `.faq-right-scroll` so the right column becomes
 *   an independently scrollable region while the left card remains sticky.
 * - All original classNames preserved; only a wrapper was added and no logic changed.
 * - Mobile-first; sticky/scroll behavior is disabled on narrow screens in CSS.
 */

const QA = [
  {
    q: "What Is Private Limited Company Registration in India?",
    a:
      "A Private Limited Company (Pvt Ltd) is a privately held entity with up to 200 shareholders. It offers limited liability, separate legal status, perpetual succession, and business credibility, governed by the Companies Act, 2013 under the Ministry of Corporate Affairs."
  },
  {
    q: "How to Register a Private Limited Company Step-By-Step?",
    a:
      "To register a Private Limited Company, obtain DSC for all directors, apply for DIN, reserve the company name via SPICe+ Part A, file SPICe+ Part B for incorporation and statutory registrations, then receive the Certificate of Incorporation along with PAN and TAN."
  },
  {
    q: "How Much Does It Cost to Register a Private Limited Company in India?",
    a:
      "Government filing fees range from about ₹1,000 to ₹2,000 based on capital, while DSCs cost ₹500–₹1,500 per director. Including professional charges, the total cost of registering a Private Limited Company usually falls between ₹6,000 and ₹15,000."
  },
  {
    q: "Can I Register a Private Limited Company Online Without Visiting Any Office?",
    a:
      "Yes, the complete registration process—covering DSC, DIN, name reservation, SPICe+ filing, and PAN/TAN issuance—can be done entirely online via the MCA portal, without any physical visits, if all digital documents are correctly prepared and uploaded."
  },
  {
    q: "What Is the Spice+ Form and Why Is It Important?",
    a:
      "SPICe+ (“Simplified Proforma for Incorporating Company Electronically Plus”) is an online form introduced in February 2020, combining 10–11 services like name approval, incorporation, DIN, PAN, TAN, EPFO, and ESIC into a single process, reducing time, cost, and paperwork."
  },
  {
    q: "Is a Digital Signature Certificate (DSC) Mandatory for Private Limited Company Registration?",
    a:
      "Yes, Class III DSCs are mandatory. All proposed directors must digitally sign incorporation forms using their DSCs when filing through the MCA portal. Without them, SPICe+ and other required e-forms cannot be authenticated or submitted for registration.\n\nFor Directors and Shareholders: PAN card, Aadhaar/Passport, and address proof (utility bill or bank statement).\nFor the Company: Digital Signature Certificate (DSC), MoA, AoA, and registered office proof.\nFor Corporate Shareholders: Board resolution and incorporation certificate."
  },
  {
    q: "Who Is Eligible to Register a Private Limited Company in India?",
    a:
      "Any individual or entity aged 18 or above can register, requiring at least two directors (one Indian resident), two shareholders, a registered office in India, unique name approval, and DSCs and DINs for all proposed directors."
  },
  {
    q: "What Are the Minimum Requirements for Private Limited Company Registration?",
    a:
      "A Private Limited Company requires at least two directors (one Indian resident), two shareholders, a registered office in India, DSCs and DINs, a unique name, and MoA/AoA documents, with no minimum capital requirement after the 2015 reforms."
  },
  {
    q: "Can a Salaried Person Become a Director of a Private Limited Company?",
    a:
      "Yes, a salaried person can become a director of a Private Limited Company unless restricted by their employment contract. Indian law imposes no general prohibition on salaried individuals holding directorships."
  },
  {
    q: "Can a Private Limited Company Operate Multiple Businesses?",
    a:
      "Yes, a Private Limited Company can operate multiple businesses if its Memorandum of Association (MoA) lists all intended activities. As long as these fall within the approved scope and comply with regulations, running diverse ventures is permitted."
  },
  {
    q: "What Documents Are Required for Private Limited Company Registration?",
    a:
      "Documents required include PAN, Aadhaar (or passport for foreign nationals), address proof, passport-sized photo, DSC, DIN details, MoA and AoA, proof of registered office (utility bill/rent agreement with NOC), plus declarations like INC-9 and DIR-2."
  },
  {
    q: "How to Choose and Reserve a Name for a Private Limited Company in India?",
    a:
      "Select a unique, compliant name by avoiding identical or trademarked terms, then check its availability via MCA’s SPICe+ Part A. Reserve it by submitting proposed names through SPICe+, following naming rules, including the required “Private Limited” suffix."
  },
  {
    q: "How to Avoid Name Rejection and Delays in Private Limited Company Registration?",
    a:
      "Ensure the company name is clear by avoiding generic terms, existing trademarks, or restricted words. Follow MCA naming rules, propose two options in SPICe+, verify availability beforehand."
  },
  {
    q: "What Should I Do After My Private Limited Company Is Registered?",
    a:
      "After registration, obtain the Certificate of Incorporation, PAN, and TAN, open a business bank account, issue share certificates, appoint the first statutory auditor within 30 days, and apply for GST registration if applicable."
  },
  {
    q: "What Are the Annual Compliance Requirements for a Private Limited Company?",
    a:
      "A Private Limited Company must maintain statutory registers, hold board meetings, conduct an AGM, file Annual Return (MGT-7) and Financial Statements (AOC-4), appoint auditors (ADT-1), complete Director KYC (DIR-3 KYC), and submit forms like DPT-3 and MSME-1 as applicable."
  },
  {
    q: "What Are the Penalties for Not Meeting Annual Compliance in a Private Limited Company?",
    a:
      "Non-compliance can lead to severe penalties: delayed ROC filings incur ₹100 per day without limit, prolonged default may cause director disqualification or company strike-off, and inaccurate statutory registers can also attract fines."
  },
  {
    q: "Is GST Registration Mandatory for a Private Limited Company?",
    a:
      "GST registration is not universally mandatory—it becomes compulsory only when annual turnover exceeds ₹20 lakh (₹10 lakh in special category states)."
  },
  {
    q: "What Are the Key Advantages of Registering as a Private Limited Company?",
    a:
      "Private Limited Companies offer limited liability, separate legal entity status, perpetual succession, enhanced credibility, ease of raising private equity or venture capital, tax benefits, protected company name, and flexibility with share transfers and ESOPs."
  },
  {
    q: "What Are the Disadvantages of Registering as a Private Limited Company?",
    a:
      "It is a complex and costly setup, stringent compliance obligations, limited access to public funding, restrictions on share transfer, maximum of 200 members, mandatory disclosure of financials, and a complicated winding-up process."
  },
  {
    q: "How Does Limited Liability Work In a Private Limited Company?",
    a:
      "Limited liability means shareholders are liable only up to their share capital; personal assets remain safe if the company faces liabilities. Exceptions exist only in cases of fraud or misrepresentation."
  },
  {
    q: "What Is the Difference Between a Director and a Shareholder?",
    a:
      "Shareholders are owners holding equity; they invest capital and have ownership rights. Directors manage day-to-day operations and governance. A person can be both, but the two roles carry distinct responsibilities."
  },
  {
    q: "Can a Private Limited Company Raise Funds From the Public?",
    a:
      "No. Private Limited Companies are not permitted to offer shares to the public or issue a public prospectus. They must raise funds through private investors or institutions only."
  },
  {
    q: "Can a Private Limited Company Be Converted Into Another Business Structure?",
    a:
      "Yes, a Private Limited Company can be converted into an LLP if all shareholders become partners, assets are free from security interests, and conditions are met. It can also convert into a Public Limited Company via meetings, special resolution, and filing Form INC-27 with ROC."
  },
  {
    q: "Can I Change My Company’s Registered Office After Registration?",
    a:
      "Yes, to change a registered office, hold a Board meeting, pass a Special Resolution, file Form MGT-14, and submit Form INC-22 (plus INC-23 if moving out-of-state). Notify creditors, obtain required approvals, and update the ROC accordingly."
  },
  {
    q: "Can Foreign Nationals or Nris Be Directors in a Private Limited Company?",
    a:
      "Yes, NRIs and foreign nationals can be directors if they obtain a DIN and DSC. However, the company must have at least one resident director who has stayed in India for 182 days or more in the previous calendar year."
  },
  {
    q: "What is the Corporate Identification Number (CIN)?",
    a:
      "CIN is a unique 21-character alphanumeric code assigned during registration. It identifies the company’s type, location, and year of incorporation."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState("");

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return QA;
    const q = query.trim().toLowerCase();
    return QA.filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="faq-container faq-advanced" aria-labelledby="faq-main-title">
      <div className="faq-inner">
        {/* LEFT: descriptive content card (will be sticky on wide screens via CSS) */}
        <div className="faq-left">
          <div className="faq-left-card">
            <h1 id="faq-main-title" className="faq-title">Company Registration FAQ's</h1>

            <p className="faq-lead">
              Starting a Private Limited Company is a big milestone for any entrepreneur. With the right guidance, the process can be smooth and straightforward. Whether you're curious about the SPICe+ forms, the documents you'll need, or what comes after registration, we've got you covered.
            </p>

            <p className="faq-paragraph">
              To make things easier, we've answered some of the most common questions about Private Limited Company registration. These FAQs will help you understand each step clearly and give you the confidence to move forward. Explore the answers below and take the first step toward building your business.
            </p>

            <div className="faq-stats" aria-hidden="true">
              <div className="stat">
                <div className="stat-num">7k+</div>
                <div className="stat-label">Queries answered</div>
              </div>
              <div className="stat">
                <div className="stat-num">50%</div>
                <div className="stat-label">Avg. cost savings</div>
              </div>
              <div className="stat">
                <div className="stat-num">1-2w</div>
                <div className="stat-label">Typical registration time</div>
              </div>
            </div>

            <div className="faq-visual">
              <img
                src={img}
                alt="Company registration illustration"
                className="faq-hero-image"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: search + accordion list */}
        <aside className="faq-right" aria-label="Frequently Asked Questions">
          {/* NEW wrapper: this makes the right column independently scrollable */}
          <div className="faq-right-scroll">
            <div className="faq-right-inner">
              <div className="faq-controls">
                <label htmlFor="faq-search" className="visually-hidden">Search FAQs</label>
                <div className="faq-search" role="search">
                  <AiOutlineSearch className="faq-search-icon" aria-hidden="true" />
                  <input
                    id="faq-search"
                    className="faq-search-input"
                    placeholder="Search questions (e.g., DSC, SPICe+)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search frequently asked questions"
                  />
                </div>

                <div className="faq-controls-actions">
                  <button
                    type="button"
                    className="faq-control-btn"
                    onClick={() => { setOpenIndex(-1); setQuery(""); }}
                    aria-label="Reset search and collapse all"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    className="faq-control-btn primary"
                    onClick={() => setOpenIndex((prev) => (prev === 0 ? -1 : 0))}
                    aria-label="Toggle first FAQ"
                  >
                    Toggle first
                  </button>
                </div>
              </div>

              <div className="faq-list" role="list">
                {filtered.length === 0 && (
                  <div className="faq-empty">No results found for “{query}”.</div>
                )}

                {filtered.map((item, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div key={idx} className={`faq-card faq-card-enhanced ${isOpen ? "open" : ""}`} role="listitem">
                      <button
                        className="faq-question"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${idx}`}
                        id={`faq-btn-${idx}`}
                        onClick={() => toggle(idx)}
                      >
                        <span className="faq-qtext">{item.q}</span>
                        <span className="faq-icon" aria-hidden="true">
                          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={`panel-${idx}`}
                            id={`faq-panel-${idx}`}
                            role="region"
                            aria-labelledby={`faq-btn-${idx}`}
                            className="faq-answer-wrap"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                          >
                            <div className="faq-answer">
                              {item.a.split("\n\n").map((para, i) => (
                                <p key={i}>{para}</p>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Faq;
