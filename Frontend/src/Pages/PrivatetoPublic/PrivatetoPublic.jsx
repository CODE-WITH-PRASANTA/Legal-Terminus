import React from 'react'
import PritoPublicBreadcrum from '../../Components/PritoPublicBreadcrum/PritoPublicBreadcrum'
import PritoPublicPlanandPricing from '../../Components/PritoPublicPlanandPricing/PritoPublicPlanandPricing'
import PritoPublicZolvitPremium from '../../Components/PritoPublicZolvitPremium/PritoPublicZolvitPremium'
import PritoPublicTabs from '../../Components/PritoPublicTabs/PritoPublicTabs'
import PritoPublicCompanyTab from '../../Components/PritoPublicCompanyTab/PritoPublicCompanyTab'
import PritoPublicPvtTypes from '../../Components/PritoPublicPvtTypes/PritoPublicPvtTypes'
import PritoPublicRequirementsTab from '../../Components/PritoPublicRequirementsTab/PritoPublicRequirementsTab'
import PritoPublicProcess from '../../Components/PritoPublicProcess/PritoPublicProcess'
import PritoPublicDocument from '../../Components/PritoPublicDocument/PritoPublicDocument'
import PritoPublicFAQ from '../../Components/PritoPublicFAQ/PritoPublicFAQ'
import PritoPublicTermsCondition from '../../Components/PritoPublicTermsCondition/PritoPublicTermsCondition'
import PritoPublicTestimonial from '../../Components/PritoPublicTestimonial/PritoPublicTestimonial'
import PritoPublicVideoTestimonial from '../../Components/PritoPublicVideoTestimonial/PritoPublicVideoTestimonial'
import PritoPublicOurclints from '../../Components/PritoPublicOurclints/PritoPublicOurcilnts'

const PrivateLimited = () => {
  return (
    <div>
      <PritoPublicBreadcrum />

      <div id="plans">
        <PritoPublicPlanandPricing/>
      </div>

      <PritoPublicTermsCondition />


      <div id="premium">
        <PritoPublicZolvitPremium/>
      </div>

      <PritoPublicTabs/>

      <div id="company">
        <PritoPublicCompanyTab/>
      </div>

      <div id="types">
        <PritoPublicPvtTypes />
      </div>

      <div id="requirements">
        <PritoPublicRequirementsTab/>
      </div>

      <div id="process">
        <PritoPublicProcess/>
      </div>

      <div id="documents">
        <PritoPublicDocument />
      </div>

      <div id="faq">
        <PritoPublicFAQ />
      </div>

      <PritoPublicTestimonial />
      <PritoPublicVideoTestimonial/>
      <PritoPublicOurclints />
    </div>
  );
};

export default PrivateLimited