import React from "react";
import {
  AiOutlineFile,
  AiOutlineProfile,
  AiOutlineCalendar,
  AiOutlineKey,
  AiOutlineFileAdd,
  AiOutlineUpload,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import "./Steps.css";

const iconSet = [
  AiOutlineFile,
  AiOutlineProfile,
  AiOutlineCalendar,
  AiOutlineKey,
  AiOutlineFileAdd,
  AiOutlineUpload,
  AiOutlineCheckCircle,
];

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Documents",
      bullets: [
        "Provision of requisite documents/information to us",
        "(As per the checklist to be provided by us)",
      ],
      color: "#b94fb6",
    },
    {
      id: 2,
      title: "Company Name & Objects Finalization",
      bullets: [
        "Finalisation of Objects along with Name of the proposed Company",
        "(Name finalised on basis of a search report by our team)",
      ],
      color: "#3f9be0",
    },
    {
      id: 3,
      title: "Name Reservation Application",
      bullets: [
        "Filing of Application for Name Reservation in requisite e-form",
        "Along with applicable government fees",
      ],
      color: "#f89c32",
    },
    {
      id: 4,
      title: "Digital Signature Certificates",
      bullets: [
        "Preparation of DSCs for proposed Promoters & Directors",
        "Registration of DSCs on MCA portal",
      ],
      color: "#26b090",
    },
    {
      id: 5,
      title: "Incorporation Document Preparation",
      bullets: ["Preparation of incorporation documents after name approval"],
      color: "#8E2C50",
    },
    {
      id: 6,
      title: "Final Form Upload and Fee Payment",
      bullets: [
        "Uploading final incorporation forms to MCA portal",
        "Payment of applicable government fees",
      ],
      color: "#2BB7DA",
    },
    {
      id: 7,
      title: "Registration Certificate Issuance",
      bullets: ["Processing by the department", "Issuance of registration certificate"],
      color: "#ff6f90",
    },
  ];

  return (
    <section className="Steps-outer">
      <h2 className="Steps-title">Before you Apply for Incorporation</h2>

      {/* TOP GRID (1–4) */}
      <div className="Steps-row Steps-row--top">
        {steps.slice(0, 4).map((s, idx) => {
          const Icon = iconSet[s.id - 1];
          const lastTop = idx === 3;
          return (
            <div key={s.id} className="Steps-itemWrap">
              <article className="Steps-card" style={{ borderColor: s.color }}>
                <div className="Steps-header">
                  <div
                    className="Steps-iconCircle"
                    style={{ borderColor: s.color, color: s.color }}
                  >
                    <Icon className="Steps-icon" />
                    <span className="Steps-number" style={{ color: s.color }}>
                      {String(s.id).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="Steps-cardTitle" style={{ color: s.color }}>
                    {s.title}
                  </h3>
                </div>

                <ul className="Steps-list">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>

              {!lastTop && (
                <div className="Steps-arrowRight" style={{ color: s.color }}>
                  <svg width="70" height="24" viewBox="0 0 70 24">
                    <path d="M2 12 H58" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M52 6 L60 12 L52 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}

              {lastTop && (
                <div className="Steps-arrowDown" style={{ color: s.color }}>
                  <svg width="28" height="60" viewBox="0 0 28 60">
                    <path d="M14 2 V50" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M7 44 L14 52 L21 44"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* BOTTOM GRID (5–7) */}
      <div className="Steps-row Steps-row--bottom">
        {steps.slice(4).map((s, idx) => {
          const Icon = iconSet[s.id - 1];
          const isLast = idx === steps.slice(4).length - 1;
          return (
            <div key={s.id} className="Steps-itemWrap Steps-itemWrap--bottom">
              <article className="Steps-card Steps-card--small" style={{ borderColor: s.color }}>
                <div className="Steps-header">
                  <div
                    className="Steps-iconCircle"
                    style={{ borderColor: s.color, color: s.color }}
                  >
                    <Icon className="Steps-icon" />
                    <span className="Steps-number" style={{ color: s.color }}>
                      {String(s.id).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="Steps-cardTitle" style={{ color: s.color }}>
                    {s.title}
                  </h3>
                </div>

                <ul className="Steps-list">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>

              {!isLast && (
                <div className="Steps-arrowRight" style={{ color: s.color }}>
                  <svg width="70" height="24" viewBox="0 0 70 24">
                    <path d="M2 12 H58" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M52 6 L60 12 L52 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Steps;
