import React from "react";
import "./Steps.css";

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
      bullets: [
        "Preparation of incorporation documents after name approval",
      ],
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
      bullets: [
        "Processing by the department",
        "Issuance of registration certificate",
      ],
      color: "#ff6f90",
    },
  ];

  return (
    <section className="inc-timeline-outer" aria-label="7 step incorporation timeline">
      <div className="inc-panel">
        <h2 className="inc-title">Before you Apply for Incorporation</h2>

        {/* Desktop connector line + chevrons (kept as-is) */}
        <div className="inc-line" aria-hidden="true" />

        <div className="inc-chevrons" role="list">
          {steps.map((step, idx) => {
            const nextColor = steps[idx + 1] ? steps[idx + 1].color : "#ffffff";
            const filterId = `shadow-${step.id}`;

            return (
              <div
                className="chev-wrap"
                key={step.id}
                role="listitem"
                aria-label={`Step ${step.id} - ${step.title}`}
              >
                <svg
                  className="chev-svg"
                  viewBox="0 0 220 80"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#203849" floodOpacity="0.06" />
                    </filter>
                  </defs>

                  <g filter={`url(#${filterId})`}>
                    <path
                      d="M18 4 h150 a12 12 0 0 1 12 12 v48 a12 12 0 0 1 -12 12 h-150 l-28 -36 28 -36 z"
                      fill={step.color}
                      stroke="none"
                    />
                  </g>

                  <rect x="64" y="22" rx="8" ry="8" width="48" height="36" fill="rgba(255,255,255,0.08)" />

                  <text
                    x="88"
                    y="47"
                    textAnchor="middle"
                    fontWeight="800"
                    fontSize="18"
                    fill="#fff"
                    fontFamily="Segoe UI, Roboto, Arial, sans-serif"
                  >
                    {String(step.id).padStart(2, "0")}
                  </text>

                  {idx < steps.length - 1 && (
                    <circle cx="206" cy="40" r="6" fill={nextColor} stroke="rgba(255,255,255,0.95)" strokeWidth="1" />
                  )}

                  <path d="M166 6 L182 6 L208 40 L182 74 L166 74 Z" fill={step.color} opacity="0.10" />
                </svg>
              </div>
            );
          })}
        </div>

        {/* Desktop columns (kept as-is) */}
        <div className="inc-cols" role="list">
          {steps.map((s) => (
            <div className="inc-col" key={s.id} role="listitem" aria-label={s.title}>
              <div className="col-head" style={{ color: s.color }}>
                {s.title}
              </div>

              <ul className="col-list">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="col-dot" style={{ background: s.color }} aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* NEW: Card layout for tablet & mobile.
            Visible only at <=1024px via CSS. Each card shows the chevron svg + its content.
            Class names preserved; .step-cards and .step-card are new helpers. */}
        <div className="step-cards" aria-hidden="false">
          {steps.map((s, idx) => {
            const nextColor = steps[idx + 1] ? steps[idx + 1].color : "#ffffff";
            const filterId = `shadow-card-${s.id}`;
            return (
              <article className="step-card" key={`card-${s.id}`} aria-label={`Step card ${s.id}`}>
                <div className="card-chev">
                  <svg
                    className="chev-svg"
                    viewBox="0 0 220 80"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#203849" floodOpacity="0.06" />
                      </filter>
                    </defs>

                    <g filter={`url(#${filterId})`}>
                      <path
                        d="M18 4 h150 a12 12 0 0 1 12 12 v48 a12 12 0 0 1 -12 12 h-150 l-28 -36 28 -36 z"
                        fill={s.color}
                        stroke="none"
                      />
                    </g>

                    <rect x="64" y="22" rx="8" ry="8" width="48" height="36" fill="rgba(255,255,255,0.08)" />

                    <text
                      x="88"
                      y="47"
                      textAnchor="middle"
                      fontWeight="800"
                      fontSize="18"
                      fill="#fff"
                      fontFamily="Segoe UI, Roboto, Arial, sans-serif"
                    >
                      {String(s.id).padStart(2, "0")}
                    </text>

                    {idx < steps.length - 1 && (
                      <circle cx="206" cy="40" r="6" fill={nextColor} stroke="rgba(255,255,255,0.95)" strokeWidth="1" />
                    )}

                    <path d="M166 6 L182 6 L208 40 L182 74 L166 74 Z" fill={s.color} opacity="0.10" />
                  </svg>
                </div>

                <div className="card-content">
                  <div className="col-head" style={{ color: s.color }}>{s.title}</div>
                  <ul className="col-list">
                    {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
