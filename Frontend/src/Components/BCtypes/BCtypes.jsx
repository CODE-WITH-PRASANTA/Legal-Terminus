import React from "react";
import "./BCtypes.css";
import typesIllustration from "../../assets/pvtltd-types.png"


const PvtTypes = () => {
  return (
    <section className="pvt-types-section">
      <div className="pvt-types-container">
        {/* Left graphic */}
        <div className="pvt-types-illustration-wrap">
          <img
            src={typesIllustration}
            alt="Types of Private Limited Company"
            className="pvt-types-illustration"
          />
        </div>

        {/* Right content */}
        <div className="pvt-types-content">
          <h2 className="pvt-types-title">
            Types of Bar Code Registration in India
          </h2>

          <p className="pvt-types-intro">
            There are different types of barcodes used in India depending on the product and purpose:
          </p>

          {/* Type 1 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">EAN-13 Barcode</h3>
            <p className="pvt-types-text">
              This is a 13-digit barcode commonly used in India, Europe, and many other countries. It is mostly used for regular retail products.
            </p>
          </div>

          {/* Type 2 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">UPC-A Barcode</h3>
            <p className="pvt-types-text">
              This is a 12-digit barcode mainly used in countries like the USA, Canada, UK, Australia, and New Zealand.
            </p>
          </div>

          {/* Type 3 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">Databar Barcode</h3>
            <p className="pvt-types-text">
              This barcode is mostly used for fresh food items. It can store extra details like expiry date, product size, and item number.
            </p>
          </div>

          {/* Type 4 */}
          <div className="pvt-types-block">
            <h3 className="pvt-types-subtitle">One-Dimensional (1D) Barcodes (GS1-128 & ITF-14)</h3>
            <p className="pvt-types-text">
              These are used for tracking products during transport and supply chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTypes;
