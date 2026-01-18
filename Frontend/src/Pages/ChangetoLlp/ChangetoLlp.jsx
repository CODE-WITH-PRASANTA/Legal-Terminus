import React from "react";
import ChangetoLlpBreadcrum from "../../Components/ChangetoLlpBreadcrum/ChangetoLlpBreadcrum";
import ChangetoLlpPlanandPrice from "../../Components/ChangetoLlpPlanandPrice/ChangetoLlpPlanandPrice";
import ChangetoLlpTermandCondn from "../../Components/ChangetoLlpTermandCondn/ChangetoLlpTermandCondn";
import ChangetoLlpZolvitPremium from "../../Components/ChangetoLlpZolvitPremium/ChangetoLlpZolvitPremium";
import ChangetoLlPTabs from "../../Components/ChangetoLlpTabs/ChangetoLlpTabs";
import ChangetoLlpCompanyTab from "../../Components/ChangetoLlpCompanyTab/ChangetoLlpCompanyTab";
import ChangetoLlpTypes from "../../Components/ChangetoLlpTypes/ChangetoLlpTypes";
import ChangetoLlpRequirementsTab from "../../Components/ChangetoLlpRequirementsTab/ChangetoLlpRequirementsTab";
import ChangetoLlpProcess from "../../Components/ChangetoLlpProcess/ChangetoLlpProcess";
import ChangetoLlpDocInfographic from "../../Components/ChangetoLlpDocInfographic/ChangetoLlpDocInfographic";
import ChangetoLlpFAQ from "../../Components/ChangetoLlpFAQ/ChangetoLlpFAQ";
import ChangetoLlpTestimonial from "../../Components/ChangetoLlpTestimonial/ChangetoLlpTestimonial";
import ChangetoLlpVideoTestimonial from "../../Components/ChangetoLlpVideoTestimonial/ChangetoLlpVideoTestimonial";
import ChangetoLlpOurClients from "../../Components/ChangetoLlpOurClients/ChangetoLlpOurClients";

function LLP() {
  return (
    <div>
      {/* Breadcrumb */}
      <ChangetoLlpBreadcrum />

      {/* Plans */}
      <div id="plans">
        <ChangetoLlpPlanandPrice />
      </div>

      {/* Terms & Conditions */}
      <ChangetoLlpTermandCondn/>

      {/* Premium */}
      <div id="premium">
        <ChangetoLlpZolvitPremium />
      </div>

      {/* Tabs */}
      <ChangetoLlPTabs />

      {/* Company */}
      <div id="company">
        <ChangetoLlpCompanyTab/>
      </div>

      {/* Types */}
      <div id="types">
        <ChangetoLlpTypes />
      </div>

      {/* Requirements */}
      <div id="requirements">
        <ChangetoLlpRequirementsTab />
      </div>

      {/* Process */}
      <div id="process">
        <ChangetoLlpProcess />
      </div>

      {/* Documents */}
      <div id="documents">
        <ChangetoLlpDocInfographic />
      </div>

      {/* FAQ */}
      <div id="faq">
        <ChangetoLlpFAQ />
      </div>

      {/* Testimonials */}
      <ChangetoLlpTestimonial />
      <ChangetoLlpVideoTestimonial />

      {/* Our Clients */}
      <ChangetoLlpOurClients/>
    </div>
  );
}

export default LLP;
