import React from "react";
import "./GSTRetTypes.css";

const gstReturns = [
  {
    title: "GSTR 1: Description of Outward Supplies",
    desc:
      "GSTR 1 is a return filed monthly by businesses, providing details of all outward supplies of services and goods. Every individual/entity registered under GST should file GSTR 1, except input service distributors and composition taxpayers. The return shall be filed even if there is no business activity.",
  },
  {
    title: "GSTR 2A: GST for Inward Supplies",
    desc:
      "GSTR 2A is a form related to all inward supplies of goods/services, i.e., purchases made by registered suppliers. This return is auto-filled where the data is fetched from the GSTR-1 filed by the supplier.",
  },
  {
    title: "GSTR 2B: Static Month Wise Statement",
    desc:
      "GSTR 2B is a static month-wise statement auto-drafted for all regular taxpayers. It has become an essential document containing invoice-wise ITC details filed by suppliers in their GSTR-1.",
  },
  {
    title: "GSTR 3B: Monthly Self-Declaration",
    desc:
      "GSTR 3B is a monthly self-declaration summary return providing details of outward supplies, ITC claimed, tax liability, and taxes paid. It is mandatory for all normal taxpayers.",
  },
  {
    title: "GSTR 4: Quarterly Return for Composition Vendors",
    desc:
      "GSTR 4 is a quarterly return filed by taxpayers under the Composition Scheme. It includes details of inward supplies and turnover for the specified period.",
  },
  {
    title: "GSTR 5: Return for Non-Resident Foreign Taxpayers",
    desc:
      "GSTR 5 is filed by non-resident foreign taxpayers conducting business in India. It contains details of outward supplies, inward supplies, tax liability, and taxes paid.",
  },
  {
    title: "GSTR 6: Input Service Distributor",
    desc:
      "GSTR 6 is a monthly return filed by an Input Service Distributor (ISD). It includes details of ITC received and distributed among units.",
  },
  {
    title: "GSTR 7: Return for Government Authorities",
    desc:
      "GSTR 7 is filed by government authorities deducting tax at source (TDS). It contains details of TDS deducted, payable, and refunds claimed.",
  },
  {
    title: "GSTR 8: Monthly Return by E-Commerce Operators",
    desc:
      "GSTR 8 is filed by e-commerce operators registered under GST. It includes details of supplies made through the platform and TCS collected.",
  },
  {
    title: "GSTR 9: Annual Consolidated Return",
    desc:
      "GSTR 9 is an annual return consolidating monthly returns filed during the year. It summarizes income, expenditure, tax paid, and ITC claimed.",
  },
  {
    title: "GSTR 9C: Reconciliation Statement",
    desc:
      "GSTR 9C is a reconciliation statement filed by taxpayers with turnover exceeding ₹2 crore. It reconciles audited financials with GST returns.",
  },
  {
    title: "GSTR 10: Final GST Return",
    desc:
      "GSTR 10 is filed when a taxpayer cancels or surrenders GST registration. It contains details of supplies, liabilities, and taxes payable.",
  },
  {
    title: "GSTR 11: Variable Tax Return",
    desc:
      "GSTR 11 is filed by taxpayers with a Unique Identity Number (UIN) to claim GST refunds on purchases made by foreign embassies and diplomatic missions.",
  },
];

const GSTReturnTypes = () => {
  return (
    <section className="gst-returns-section">
      <div className="gst-returns-container">
        <h2 className="gst-returns-title">
          Types of Goods and Service Tax Returns
        </h2>
        <p className="gst-returns-subtitle">
          The types of goods and service tax returns in India are discussed below:
        </p>

        <div className="gst-returns-grid">
          {gstReturns.map((item, index) => (
            <div className="gst-return-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GSTReturnTypes;
