import React from "react";
import ChangetoCompanyBreadcrum from "../../Components/ChangetoComapnyBreadcrum/ChangetoComapnyBreadcrum";
import ChangetoCompanyPlanandPrice from "../../Components/ChangetoCompanyPlanandPrice/ChangetoCompanyPlanandPrice";
import ChangetoCompanyTermandCondn from "../../Components/ChangetoCompanyTermandCondn/ChangetoCompanyTermandCondn";
import ChangetoCompanyZolvitPremium from "../../Components/ChangetoCompanyZolvitPremium/ChangetoCompanyZolvitPremium";
import ChangetoCompanyTab from "../../Components/ChangetoCompanyTab/ChangetoCompanyTab";
import ChangetoCompanyCompanyTab from "../../Components/ChangetoCompanyCompanyTab/ChangetoCompanyCompanyTab";
import ChangetoCompanyTypes from "../../Components/ChangetoCompanyTypes/ChangetoCompanyTypes";
import ChangetoCompanyRequirementsTab from "../../Components/ChangetoCompanyRequirementsTab/ChangetoCompanyRequirementsTab";
import ChangetoCompanyProcess from "../../Components/ChangetoCompanyProcess/ChangetoCompanyProcess";
import ChangetoCompanyDocInfographic from "../../Components/ChangetoCompanyDocInfographic/ChangetoCompanyDocInfographic";
import ChangetoCompanyFAQ from "../../Components/ChangetoCompanyFAQ/ChangetoCompanyFAQ";
import ChangetoCompanyTestimonial from "../../Components/ChangetoCompanyTestimonial/ChangetoCompanyTestimonial";
import ChangetoCompanyVideoTestimonial from "../../Components/ChangetoCompanyVideoTestimonial/ChangetoCompanyVideoTestimonial";
import ChangetoCompanyOurClients from "../../Components/ChangetoCompanyOurClients/ChangetoCompanyOurClients";

function LLP() {
  return (
    <div>
      {/* Breadcrumb */}
      <ChangetoCompanyBreadcrum />

      {/* Plans */}
      <div id="plans">
        <ChangetoCompanyPlanandPrice/>
      </div>

      {/* Terms & Conditions */}
      <ChangetoCompanyTermandCondn/>

      {/* Premium */}
      <div id="premium">
        <ChangetoCompanyZolvitPremium />
      </div>

      {/* Tabs */}
      <ChangetoCompanyTab />

      {/* Company */}
      <div id="company">
        <ChangetoCompanyCompanyTab/>
      </div>

      {/* Types */}
      <div id="types">
        <ChangetoCompanyTypes/>
      </div>

      {/* Requirements */}
      <div id="requirements">
        <ChangetoCompanyRequirementsTab />
      </div>

      {/* Process */}
      <div id="process">
        <ChangetoCompanyProcess />
      </div>

      {/* Documents */}
      <div id="documents">
        <ChangetoCompanyDocInfographic />
      </div>

      {/* FAQ */}
      <div id="faq">
        <ChangetoCompanyFAQ />
      </div>

      {/* Testimonials */}
      <ChangetoCompanyTestimonial />
      <ChangetoCompanyVideoTestimonial />

      {/* Our Clients */}
      <ChangetoCompanyOurClients/>
    </div>
  );
}

export default LLP;
