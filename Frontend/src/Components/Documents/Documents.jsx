import React from "react";
import {
  FiUsers,
  FiUserCheck,
  FiHome,
  FiShield,
  FiCreditCard,
  FiKey,
  FiFileText
} from "react-icons/fi";
import "./Documents.css";

const Documents = () => {
  const ITEMS = [
    {
      id: "f1",
      title: "Minimum Two Directors",
      desc:
        "A private limited company must have at least two directors. At least one director must be a resident of India, meaning they have stayed in the country for a minimum of 182 days during the financial year.",
      icon: <FiUsers />,
      badge: "Requirement"
    },
    {
      id: "f2",
      title: "Minimum Two Shareholders",
      desc:
        "The company must have a minimum of two shareholders. Directors and shareholders can be the same individuals, and both individuals and corporate entities are eligible to be shareholders.",
      icon: <FiUserCheck />,
      badge: "Common"
    },
    {
      id: "f3",
      title: "Registered Office Address",
      desc:
        "A valid Indian address must be provided as the company’s registered office. Proof of address and a NOC (No Objection Certificate) from the property owner are required.",
      icon: <FiHome />,
      badge: "Address"
    },
    {
      id: "f4",
      title: "Digital Signature Certificate (DSC)",
      desc:
        "All proposed directors must have a valid Digital Signature Certificate to digitally sign incorporation documents.",
      icon: <FiShield />,
      badge: "Digital"
    },
    {
      id: "f5",
      title: "Director Identification Number (DIN)",
      desc:
        "Each director must obtain a DIN, which serves as a unique identification number issued by the Ministry of Corporate Affairs.",
      icon: <FiCreditCard />,
      badge: "ID"
    },
    {
      id: "f6",
      title: "Company Name",
      desc:
        "A unique name must be chosen for the company, which is not identical or similar to existing companies or trademarks.",
      icon: <FiKey />,
      badge: "Unique"
    },
    {
      id: "f7",
      title: "Filing SPICe+",
      desc:
        "Meeting these requirements is essential before filing the SPICe+ form for incorporation. Meeting these requirements is essential before filing the SPICe+ form to register private limited company.",
      icon: <FiFileText />,
      badge: "Next Step"
    }
  ];

  return (
    <main className="Documents-container" aria-labelledby="documents-title">
      <header className="Documents-hero" role="banner">
        <div className="Documents-hero-inner">
          <div className="Documents-hero-top">
            <h1 id="documents-title" className="Documents-title">
              Requirements for Private Limited Company Registration
            </h1>
            <div className="Documents-hero-chip" aria-hidden="true">
              Checklist
            </div>
          </div>

          <p className="Documents-lead">
            For private limited company registration in India, certain legal and procedural
            requirements must be fulfilled under the Companies Act, 2013. Meeting these minimum
            conditions ensures a valid incorporation and smooth operation post-registration.
          </p>
        </div>
      </header>

      <section className="Documents-content" role="region" aria-labelledby="requirements-heading">
        <h2 id="requirements-heading" className="Documents-subtitle">Key Requirements</h2>

        <ul className="Documents-list Documents-grid" role="list">
          {ITEMS.map((item) => (
            <li key={item.id} className="Documents-item" role="listitem">
              <article className="Documents-card" tabIndex={0} aria-labelledby={`${item.id}-title`}>
                <div className="Documents-accent" aria-hidden="true" />

                <div className="Documents-card-top">
                  <div className="Documents-icon Documents-icon-top" aria-hidden="true">
                    {item.icon}
                  </div>

                  <div className="Documents-body Documents-body-full">
                    <div className="Documents-head">
                      <h3 id={`${item.id}-title`} className="Documents-item-title">{item.title}</h3>
                      <span className="Documents-badge">{item.badge}</span>
                    </div>

                    <p className="Documents-item-desc">{item.desc}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="Documents-note" aria-hidden="false">
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
