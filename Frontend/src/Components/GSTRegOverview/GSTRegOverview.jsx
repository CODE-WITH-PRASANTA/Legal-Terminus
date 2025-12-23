import React from "react";
import "./GSTRegOverview.css";
import gstImage from "../../assets/img-5.webp"; 

const GSTOverview = () => {
  return (
    <section className="gst-overview">
      <div className="gst-overview-container">
        
        {/* LEFT CONTENT */}
        <div className="gst-overview-left">
          <h2 className="gst-overview-title">
            GST Registration- <span>An Overview</span>
          </h2>

          <p>
            If you are looking for GST registration to empower your business
            legally, you are at the right place.
          </p>

          <p>
            The Goods and Services Tax, popularly known as GST, was introduced on
            July 1, 2017, as a replacement for various central and state-level
            taxes, including Service Tax, Excise Duty, CST, Entertainment Tax,
            Luxury Tax, and VAT. GST introduction has since ensured the
            streamlining of the tax process in India. GST registration is
            mandatory for traders, service providers, manufacturers, and
            freelancers.
          </p>

          <p>
            GST has united various indirect taxes into a unified single tax
            system, streamlined compliance, eliminated cascading taxes, and
            boosted ease of doing business in India.
          </p>

          <p>
            Talk to consultants at Corpbiz and enjoy easy and timely GST
            registration in India.
          </p>

          <button className="gst-overview-btn">
            Apply for GST Number
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="gst-overview-right">
          <img src={gstImage} alt="GST Registration Overview" />
        </div>

      </div>
    </section>
  );
};

export default GSTOverview;
