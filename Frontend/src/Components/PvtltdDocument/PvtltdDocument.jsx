import React from "react";
import "./PvtLtdDocument.css";

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
    title: "Passport Size Photograph",
    description:
      "Passport size photograph of all proposed directors and shareholders.",
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
      "Duly notarised rent agreement for the registered office address (if on rent).",
  },
  {
    id: 5,
    iconLabel: "NOC",
    title: "No Objection Certificate",
    description:
      "No Objection Certificate (NOC) from the owner allowing use of the premises as the registered office.",
  },
  {
    id: 6,
    iconLabel: "DOC",
    title: "Other Documents",
    description:
      "Other documents shall be prepared and provided by our team as required.",
  },
];

const PvtLtdDocuments = () => {
  const [isKycExpanded, setIsKycExpanded] = React.useState(false);

  return (
    <section className="pvtreg-docs-section">
      <div className="pvtreg-docs-container">
        {/* Header */}
        <header className="pvtreg-docs-header">
          <h2 className="pvtreg-docs-title">
            Documents Required for Private Limited Company Registration
          </h2>
          <p className="pvtreg-docs-subtitle">
            The following essential documents and information are required for
            incorporation.
          </p>
        </header>

        {/* Cards */}
        <div className="pvtreg-docs-grid">
          {documents.map((doc) => (
            <article key={doc.id} className="pvtreg-docs-card">
              <div className="pvtreg-docs-icon">
                <span>{doc.iconLabel}</span>
              </div>

              <div className="pvtreg-docs-card-body">
                <h3 className="pvtreg-docs-card-title">{doc.title}</h3>

                <p
                  className={`pvtreg-docs-card-text ${
                    doc.id === 1
                      ? isKycExpanded
                        ? "pvtreg-expanded"
                        : "pvtreg-collapsed"
                      : ""
                  }`}
                >
                  {doc.description}
                </p>

                {doc.id === 1 && (
                  <button
                    type="button"
                    className="pvtreg-docs-readmore"
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
        <div className="pvtreg-docs-notes">
          <ul>
            <li>
              <strong>Note 1:</strong> A detailed checklist will be shared by our
              team as a ready reference.
            </li>
            <li>
              <strong>Note 2:</strong> All documents must be self-certified by
              the respective directors or shareholders.
            </li>
            <li>
              <strong>Note 3:</strong> Utility bills or bank statements should
              not be older than 2 months.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PvtLtdDocuments;
