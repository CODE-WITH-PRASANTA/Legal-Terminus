import React from "react";
import "./Section8Comparison.css";

const rows = [
  {
    feature: "Governing Law",
    trust: "Indian Trusts Act, 1882 (for private trusts) or State Trust Acts",
    society: "Societies Registration Act, 1860 (or state-specific acts)",
    section8: "Companies Act, 2013",
  },
  {
    feature: "Registration Authority",
    trust: "Sub-Registrar of the respective area",
    society: "Registrar of Societies of the respective state",
    section8: "Registrar of Companies (ROC), Ministry of Corporate Affairs",
  },
  {
    feature: "Minimum Members",
    trust: "Minimum 2 Trustees",
    society: "Minimum 7 Members",
    section8: "Minimum 2 Members/Directors (for Private Ltd.)",
  },
  {
    feature: "Governing Document",
    trust: "Trust Deed",
    society: "Memorandum of Association & Rules",
    section8: "Memorandum of Association (MoA) & Articles of Association (AoA)",
  },
  {
    feature: "Credibility & Recognition",
    trust: "Moderate",
    society: "Moderate to High (varies by state)",
    section8: "Very High (nationally and internationally)",
  },
  {
    feature: "Annual Compliance",
    trust: "Minimal (filing ITR)",
    society: "Moderate (annual reports with Registrar of Societies)",
    section8: "High (ROC filings, board meetings, statutory registers)",
  },
  {
    feature: "Ease of Formation",
    trust: "Relatively Easy",
    society: "Moderately Easy",
    section8: "Complex — professional assistance usually required",
  },
  {
    feature: "Best Suited For",
    trust: "Small-scale charitable activities; managing property for a cause",
    society: "Membership-based organisations, educational institutions, welfare groups",
    section8: "NPOs aiming for large-scale operations, CSR funding, national reach",
  },
];

export default function ComparisonTable() {
  return (
    <section className="cmp-section" aria-labelledby="cmp-heading">
      <div className="cmp-inner">
        <h2 id="cmp-heading" className="cmp-title">
          Comparison between Trust, Societies &amp; Section 8 Company
        </h2>

        <p className="cmp-intro">
          Choosing the right legal structure is a critical first step for any nonprofit initiative.
          Here is a comparison of the three primary forms of NPOs in India.
        </p>

        <div className="cmp-table-wrap" role="region" aria-label="comparison table">
          <table className="cmp-table">
            <thead>
              <tr>
                <th className="cell-feature">Feature</th>
                <th>Trust</th>
                <th>Society</th>
                <th>Section 8 Company</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, idx) => (
                <tr key={r.feature} className={idx % 2 === 0 ? "row-even" : "row-odd"}>
                  <td className="cell-feature">{r.feature}</td>
                  <td>{r.trust}</td>
                  <td>{r.society}</td>
                  <td>{r.section8}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cmp-cta">
          <p className="cmp-cta-text">
            For businesses looking for a different structure, <span className="link">company registration online</span> makes it simple
            to register.
          </p>
          <div className="cmp-cta-box">
            <p>
              Connect with RegisterKaro and let our experts handle the legal hassle while you grow your business.
            </p>
            <button className="cmp-cta-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
