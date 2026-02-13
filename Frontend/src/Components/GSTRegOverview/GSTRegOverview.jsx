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
            What is GST Registration?
          </h2>

          <p>
            GST registration is the process of getting a unique GST number (GSTIN) for your business. This number is needed to collect and pay Goods and Services Tax (GST) in India.
          </p>

          <p>
            As per the GST law (2017), businesses must register for GST if their yearly sales exceed ₹40 lakh (or ₹20 lakh in some special states). GST is a tax that applies to most goods and services and has replaced older taxes like VAT and excise duty. Businesses that earlier paid service tax, VAT, or excise duty now need to register under GST. Also, all online sellers must register for GST, no matter their sales amount.
          </p>

          <p>
            You can apply for GST online through the government portal without visiting any office. The process is simple and hassle-free. Once you submit the application, you will get an ARN (Application Reference Number) to track your registration status.
          </p>

          {/* <button className="gst-overview-btn">
            Apply for GST Number
          </button> */}
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
