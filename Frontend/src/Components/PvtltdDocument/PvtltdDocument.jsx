import React from "react";
import "./PvtltdDocument.css";

const documents = [
  {
    id: 1,
    iconLabel: "KYC",
    title: "KYC Documents",
    description: (
      <>
        KYC documents – All the proposed directors and shareholders such as:
        <br />
        › ID Proof – PAN and Aadhaar
        <br />
        › Address Proof – Telephone Bill / Mobile Bill / Savings Bank Statement
      </>
    ),
  },
  {
    id: 2,
    iconLabel: "ID",
    title: "Passport size Photograph",
    description:
      "Passport size photograph – all the proposed directors and shareholders.",
  },
  {
    id: 3,
    iconLabel: "EB",
    title: "Electricity Bill",
    description:
      "Electricity bill corresponding to the registered office address of the company.",
  },
  {
    id: 4,
    iconLabel: "RA",
    title: "Rent Agreement",
    description:
      "Rent agreement duly notarised with respect to the registered office address of the company (if on rent).",
  },
  {
    id: 5,
    iconLabel: "NOC",
    title: "No Objection Certificate",
    description:
      "A No Objection Certificate (NOC) from the owner for use of his/her premises as the registered office of the proposed company.",
  },
  {
    id: 6,
    iconLabel: "DOC",
    title: "Other Documents",
    description:
      "Other documents shall be prepared and provided by our team as required.",
  },
];

const DocumentsPvt = () => {
  const [isKycExpanded, setIsKycExpanded] = React.useState(false);

  return (
    <section className="docs-section">
      <div className="docs-container">
        {/* Heading + intro */}
        <header className="docs-header">
          <h2 className="docs-title">
            DOCUMENTS REQUIRED FOR PRIVATE LIMITED COMPANY REGISTRATION IN INDIA
          </h2>
          <p className="docs-subtitle">
            The following essential documents / information are required for
            registration
          </p>
        </header>

        {/* Cards */}
        <div className="docs-grid">
          {documents.map((doc) => (
            <article key={doc.id} className="docs-card">
              <div className="docs-icon-circle">
                <span className="docs-icon-label">{doc.iconLabel}</span>
              </div>
              <div className="docs-card-body">
                <h3 className="docs-card-title">{doc.title}</h3>

                {/* Description with Read More for KYC only */}
                <p
                  className={`docs-card-text ${
                    doc.id === 1
                      ? isKycExpanded
                        ? "is-expanded"
                        : "is-collapsed"
                      : ""
                  }`}
                >
                  {doc.description}
                </p>

                {doc.id === 1 && (
                  <button
                    type="button"
                    className="docs-readmore-btn"
                    onClick={() => setIsKycExpanded((prev) => !prev)}
                  >
                    {isKycExpanded ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Notes */}
        <div className="docs-notes-wrapper">
          <div className="docs-notes-inner">
            <ul className="docs-notes-list">
              <li>
                <strong>Note 1</strong> A detailed checklist will be provided by
                our team in this respect as a ready reckoner.
              </li>
              <li>
                <strong>Note 2</strong> All the documents mentioned above shall
                be self-certified by the respective proposed directors /
                members / shareholders.
              </li>
              <li>
                <strong>Note 3</strong> All the utility bills or bank
                statements shall not be less than 2 months old.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsPvt;
