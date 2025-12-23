import React from "react";
import "./GstRetOverview.css";
import overviewImg from "../../assets/img-5.webp"; // <-- update path if needed

const GstReturnOverview = () => {
  return (
    <section className="ret-overview-section">
      <div className="ret-overview-container">
        {/* Left Content */}
        <div className="ret-overview-content">
          <h2 className="ret-overview-title">
            An Overview of GST Return Filing
          </h2>

          <p>
            GST return filing is a process used for reporting sales, purchases,
            tax collected, and tax paid to the government under the Goods and
            Services Tax system. The GST system in India requires businesses to
            file their returns either monthly, quarterly, or annually,
            depending on their specific needs.
          </p>

          <p>
            GST returns, filed electronically, capture all financial
            transactions, including outward and inward supplies, tax collected
            on sales, tax paid on purchases, and resulting tax liability. The
            GST tax return, a statement that summarizes the complete details of
            the taxpayers’ revenue and expenditures, is further used to
            calculate the business's net tax liability.
          </p>

          <p>
            Are you seeking expert support for GST return filing to avoid
            mistakes? If yes, rely on Corpbiz expert consultants for the same
            and leave no scope for errors.
          </p>

          <button className="ret-overview-btn">
            Get started with CorpBiz
          </button>
        </div>

        {/* Right Image */}
        <div className="ret-overview-image">
          <img src={overviewImg} alt="GST Return Filing Overview" />
        </div>
      </div>
    </section>
  );
};

export default GstReturnOverview;
