import React from "react";
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import "./PublicltdOverview.css";

const LLPOverview = () => {
  return (
    <div className="llp-wrapper">
      {/* SECTION 1 – CLEAN DESIGN (NO SIDEBAR) */}
      <section className="llp-section llp-card llp-card-clean">
        <h1 className="llp-title">
          What is Limited Liability Partnership (LLP) Registration
        </h1>

        <p className="llp-paragraph">
          Limited Liability Partnership (LLP) registration is a popular choice
          for startups and small businesses, blending the features of a
          partnership and a private company.
        </p>

        {/* HIGHLIGHT INFO STRIP */}
        <div className="llp-highlight-box">
          <CheckCircle2 />
          <span>
            LLPs offer flexibility, limited liability protection, and minimal
            compliance for growing businesses.
          </span>
        </div>

        {/* BULLET POINTS */}
        <ul className="llp-icon-list">
          <li>
            <CheckCircle2 />
            No minimum capital requirement, making it accessible to new
            entrepreneurs.
          </li>
          <li>
            <CheckCircle2 />
            Business name availability is checked using the RUN-LLP service on
            the Ministry of Corporate Affairs (MCA) portal.
          </li>
        </ul>

        <p className="llp-paragraph">
          To formally register, applicants have to submit a form on the MCA. The
          form provides the proposed name of LLP, the address of its registered
          office, and details of partners.
        </p>

        <ul className="llp-icon-list">
          <li>
            <FileText />
            Every partner must have a DIN or DPIN and a Digital Signature
            Certificate (DSC).
          </li>
          <li>
            <FileText />
            Required documents include identity proof, address proof, and
            registered office proof.
          </li>
        </ul>

        <p className="llp-paragraph">
          Once the business name is approved, the LLP agreement is prepared to
          establish roles, duties, and profit-sharing percentages between
          partners.
        </p>

        <ul className="llp-icon-list">
          <li>
            <ShieldCheck />
            LLP agreement acts as the internal governance document.
          </li>
          <li>
            <ShieldCheck />
            MCA issues the Certificate of Incorporation after verification.
          </li>
        </ul>

        <p className="llp-paragraph">
          After incorporation, the LLP must open a bank account, obtain PAN and
          TAN, and may optionally register as an MSME to access government
          incentives.
        </p>
      </section>

      {/* SECTION 2 – SIDEBAR STYLE */}
      <section className="llp-section llp-card llp-act">
        <h2 className="llp-title">
          Limited Liability Partnership Act, 2008
        </h2>

        <p className="llp-paragraph">
          This Act make provisions for the formation and regulation of limited
          liability partnerships and for matters connected therewith or
          incidental thereto.
        </p>

        <p className="llp-subheading">
          Limited Liability Partnership in Company Law
        </p>

        <ul className="llp-icon-list">
          <li>
            <CheckCircle2 />
            LLPs provide limited liability protection to partners.
          </li>
          <li>
            <CheckCircle2 />
            LLPs have a separate legal identity distinct from partners.
          </li>
          <li>
            <CheckCircle2 />
            LLP Act, 2008 enables streamlined registration and compliance.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LLPOverview;
