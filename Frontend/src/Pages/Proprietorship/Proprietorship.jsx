import React from 'react'
import ProprietorshipBreadcrumb from '../../Components/ProprietorshipBreadcrumb/ProprietorshipBreadcrumb'
import ProZolvitPremium from '../../Components/ProZolvitPremium/ProZolvitPremium'
import Protabs from '../../Components/Protabs/Protabs'
import ProCompanyTab from '../../Components/PvtltdCompanyTab/PvtltdCompanyTab'
import ProPvtTypes from '../../Components/PvtltdPvtTypes/PvtltdPvtTypes'
import ProRequirementsTab from '../../Components/ProRequirementsTab/ProRequirementsTab'
import ProProcess from '../../Components/ProProcess/ProProcess'
import ProDocument from '../../Components/ProDocument/ProDocument'
import ProFAQ from '../../Components/ProFAQ/ProFAQ'
import ProTermsCondition from '../../Components/ProTermsCondition/ProTermsCondition'
import ProTestimonial from '../../Components/ProTestimonial/ProTestimonial'
import ProVideoTestimonial from '../../Components/ProVideoTestimonial/ProVideoTestimonial'
import ProOurclints from '../../Components/ProOurclints/ProOurclints'
import ProPlanandPricing from '../../Components/ProPlanandPricing/ProPlanandPricing'

const PrivateLimited = () => {
  return (
    <div>
      <ProprietorshipBreadcrumb />

      <div id="plans">
        <ProPlanandPricing />
      </div>

      <ProTermsCondition/>


      <div id="premium">
        <ProZolvitPremium />
      </div>

      <Protabs />

      <div id="company">
        <ProCompanyTab />
      </div>

      <div id="types">
        <ProPvtTypes/>
      </div>

      <div id="requirements">
        <ProRequirementsTab />
      </div>

      <div id="process">
        <ProProcess/>
      </div>

      <div id="documents">
        <ProDocument />
      </div>

      <div id="faq">
        <ProFAQ/>
      </div>

      <ProTestimonial />
      <ProVideoTestimonial />
      <ProOurclints />
    </div>
  );
};

export default PrivateLimited