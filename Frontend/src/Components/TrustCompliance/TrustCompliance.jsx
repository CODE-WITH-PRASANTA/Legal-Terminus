import React from "react";
import "./trustCompliance.css";

const ComplianceRequirementsSection = () => {
  return (
    <section className="comp-section">
      <h2 className="comp-title">
        Compliance Requirements for Registered Trusts
      </h2>
      <p className="comp-intro">
        Following these essential requirements keeps your trust legally valid
        and operational.
      </p>

      <div className="comp-grid">
        {/* Card 1 */}
        <article className="comp-card">
          <h3 className="comp-heading">First Steps After Registration</h3>
          <ul className="comp-list">
            <li>Use funds only for deed-stated objectives.</li>
            <li>
              Open and operate dedicated bank accounts in the trust&apos;s name.
            </li>
            <li>
              Set up double-entry accounting to record all receipts and
              payments.
            </li>
          </ul>

          <p className="comp-protip">
            <strong>Pro Tip:</strong> If your annual receipts exceed ₹10 lakh,
            schedule an audit under the Income-Tax Act Section 44AB.
          </p>
        </article>

        {/* Card 2 */}
        <article className="comp-card">
          <h3 className="comp-heading">Ongoing Compliance Responsibilities</h3>
          <ul className="comp-list">
            <li>
              File ITR-5 each year before the deadline (usually 30 November).
            </li>
            <li>
              Submit Form 10B along with audited accounts if you hold 12A/80G
              approvals.
            </li>
            <li>
              Hold trustee meetings regularly and record clear minutes to
              document decisions.
            </li>
            <li>
              Update trustee appointments or resignations by executing a
              supplementary deed and re-registering it.
            </li>
            <li>
              Review every expense to ensure it aligns with your trust&apos;s
              stated objectives.
            </li>
          </ul>
        </article>

        {/* Card 3 */}
        <article className="comp-card">
          <h3 className="comp-heading">Essential Record-Keeping Practices</h3>
          <ul className="comp-list">
            <li>Keep property deeds, agreements, and lease papers.</li>
            <li>
              Log each beneficiary distribution with date and amount.
            </li>
            <li>
              Store vouchers, invoices, bank statements, and grant documents for
              eight years.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ComplianceRequirementsSection;
