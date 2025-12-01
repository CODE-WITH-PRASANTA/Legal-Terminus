import React from "react";
import {
  AiOutlineUsergroupAdd,
  AiOutlineIdcard,
  AiOutlineHome,
  AiOutlineSafetyCertificate,
  AiOutlineKey,
  AiOutlineFileSearch
} from "react-icons/ai";
import { motion } from "framer-motion";
import "./Documents.css";

const Documents = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.06 * i, duration: 0.45, ease: "easeOut" }
    })
  };

  const ITEMS = [
    {
      id: "f1",
      title: "Minimum Two Directors",
      desc:
        "A private limited company must have at least two directors. At least one director must be a resident of India, meaning they have stayed in the country for a minimum of 182 days during the financial year.",
      icon: <AiOutlineUsergroupAdd />,
      badge: "Requirement"
    },
    {
      id: "f2",
      title: "Minimum Two Shareholders",
      desc:
        "The company must have a minimum of two shareholders. Directors and shareholders can be the same individuals, and both individuals and corporate entities are eligible to be shareholders.",
      icon: <AiOutlineUsergroupAdd />,
      badge: "Common"
    },
    {
      id: "f3",
      title: "Registered Office Address",
      desc:
        "A valid Indian address must be provided as the company’s registered office. Proof of address and a NOC (No Objection Certificate) from the property owner are required.",
      icon: <AiOutlineHome />,
      badge: "Address"
    },
    {
      id: "f4",
      title: "Digital Signature Certificate (DSC)",
      desc:
        "All proposed directors must have a valid Digital Signature Certificate to digitally sign incorporation documents.",
      icon: <AiOutlineSafetyCertificate />,
      badge: "Digital"
    },
    {
      id: "f5",
      title: "Director Identification Number (DIN)",
      desc:
        "Each director must obtain a DIN, which serves as a unique identification number issued by the Ministry of Corporate Affairs.",
      icon: <AiOutlineIdcard />,
      badge: "ID"
    },
    {
      id: "f6",
      title: "Company Name",
      desc:
        "A unique name must be chosen for the company, which is not identical or similar to existing companies or trademarks.",
      icon: <AiOutlineKey />,
      badge: "Unique"
    },
    {
      id: "f7",
      title: "Filing SPICe+",
      desc:
        "Meeting these requirements is essential before filing the SPICe+ form for incorporation. Meeting these requirements is essential before filing the SPICe+ form to register private limited company.",
      icon: <AiOutlineFileSearch />,
      badge: "Next Step"
    }
  ];

  return (
    <main className="documents-container" aria-labelledby="documents-title">
      <motion.header
        className="documents-hero documents-hero-card documents-hero-advanced"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="documents-hero-inner">
          <div className="documents-hero-top">
            <h1 id="documents-title" className="documents-title">
              Requirements for Private Limited Company Registration
            </h1>
            <div className="documents-hero-chip" aria-hidden="true">Checklist</div>
          </div>

          <p className="documents-lead">
            For private limited company registration in India, certain legal and procedural
            requirements must be fulfilled under the Companies Act, 2013. Meeting these minimum
            conditions ensures a valid incorporation and smooth operation post-registration.
          </p>
        </div>
      </motion.header>

      <section className="documents-content">
        <motion.h2
          className="documents-subtitle"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.36 }}
        >
          Key Requirements
        </motion.h2>

        <ul className="documents-list documents-cards-grid">
          {ITEMS.map((item, i) => (
            <motion.li
              key={item.id}
              className="documents-item"
              tabIndex={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              custom={i + 1}
              variants={cardVariant}
            >
              <article className="documents-card">
                <div className="documents-card-left">
                  <span className="documents-icon">{item.icon}</span>

                  <div className="documents-body">
                    <div className="documents-head">
                      <h3 className="documents-item-title">{item.title}</h3>
                      <span className="documents-badge">{item.badge}</span>
                    </div>
                    <p className="documents-item-desc">{item.desc}</p>
                  </div>
                </div>

                <div className="documents-card-meta">
                  <div className="documents-glow" />
                </div>
              </article>
            </motion.li>
          ))}
        </ul>

        <div className="documents-note">
          <p>
            These minimum conditions should be satisfied to ensure a smooth
            incorporation process and post-registration compliance.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Documents;
