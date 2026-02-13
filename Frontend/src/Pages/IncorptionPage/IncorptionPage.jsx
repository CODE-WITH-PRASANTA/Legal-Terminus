import React from "react";
import IncorptionBreadcrum from "../../Components/IncorptionBreadcrum/IncorptionBreadcrum";
import IncorporationPlanAndPricing from "../../Components/IncorptionPlanedPriceing/IncorptionPlanedPriceing";
import IncorporationTermsCondition from "../../Components/IncorptionTermsCondition/IncorptionTermsCondition";
import IncorporationPremium from "../../Components/IncorporationPremium/IncorporationPremium";
import IncorporationTabs from "../../Components/IncorporationTabs/IncorporationTabs";
import IncorporationCompanyTabs from "../../Components/IncorporationCompanyTabs/IncorporationCompanyTabs";
import IncorporationPvtTypes from "../../Components/IncorporationPvtTypes/IncorporationPvtTypes";
import IncorporationRequirementsTab from "../../Components/IncorporationRequirementsTab/IncorporationRequirementsTab";
import IncorporationProcess from "../../Components/IncorporationProcess/IncorporationProcess";
import IncorporationDocuments from "../../Components/IncorporationDocuments/IncorporationDocuments";
import IncorporationFAQ from "../../Components/IncorporationFAQ/IncorporationFAQ";
import IncorporationTestimonial from "../../Components/IncorporationTestimonial/IncorporationTestimonial";
import IncorporationVideoTestimonial from "../../Components/IncorporationVideoTestimonial/IncorporationVideoTestimonial";
import IncorporationOurClients from "../../Components/IncorporationOurClints/IncorporationOurClints";

const IncorptionPage = () => {
  return (
    <>
      <IncorptionBreadcrum />

      <div id="plans">
        {/* <IncorporationPlanAndPricing /> */}
      </div>
      {/* <IncorporationTermsCondition /> */}

      <div id="premium">
        {/* <IncorporationPremium /> */}
      </div>

      <IncorporationTabs />

      <div id="company">
        <IncorporationCompanyTabs />
      </div>

      <div id="types">
        {/* <IncorporationPvtTypes /> */}
      </div>

      <div id="requirements">
        <IncorporationRequirementsTab />
      </div>

      <div id="process">
        <IncorporationProcess />
      </div>

      <div id="documents">
        <IncorporationDocuments />
      </div>
      
      <div id="faq">
        <IncorporationFAQ />
      </div>

      <IncorporationTestimonial />
      <IncorporationVideoTestimonial />
      <IncorporationOurClients />
    </>
  );
};

export default IncorptionPage;
