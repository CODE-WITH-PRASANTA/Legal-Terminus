import React from 'react'
import IncorptionBreadcrum from '../../Components/IncorptionBreadcrum/IncorptionBreadcrum'
import IncorporationPlanAndPricing from '../../Components/IncorptionPlanedPriceing/IncorptionPlanedPriceing'
import IncorporationTermsCondition from '../../Components/IncorptionTermsCondition/IncorptionTermsCondition'
import IncorporationPremium from '../../Components/IncorporationPremium/IncorporationPremium'
import IncorporationTabs from '../../Components/IncorporationTabs/IncorporationTabs'
import IncorporationCompanyTabs from '../../Components/IncorporationCompanyTabs/IncorporationCompanyTabs'
import IncorporationPvtTypes from '../../Components/IncorporationPvtTypes/IncorporationPvtTypes'
import IncorporationRequirementsTab from '../../Components/IncorporationRequirementsTab/IncorporationRequirementsTab'
import IncorporationProcess from '../../Components/IncorporationProcess/IncorporationProcess'
import IncorporationDocuments from '../../Components/IncorporationDocuments/IncorporationDocuments'
import IncorporationFAQ from '../../Components/IncorporationFAQ/IncorporationFAQ'
import IncorporationTestimonial from '../../Components/IncorporationTestimonial/IncorporationTestimonial'
import IncorporationVideoTestimonial from '../../Components/IncorporationVideoTestimonial/IncorporationVideoTestimonial'
import IncorporationOurClients from '../../Components/IncorporationOurClints/IncorporationOurClints'



const IncorptionPage = () => {
  return (
    <>
      <IncorptionBreadcrum/>
      <IncorporationPlanAndPricing/>
      <IncorporationTermsCondition/>
      <IncorporationPremium/>
      <IncorporationTabs/>
      <IncorporationCompanyTabs/>
      <IncorporationPvtTypes/>
      <IncorporationRequirementsTab/>
      <IncorporationProcess/>
      <IncorporationDocuments/>
      <IncorporationFAQ/>

      <IncorporationTestimonial/>
      <IncorporationVideoTestimonial/>
      <IncorporationOurClients/>


    </>
  )
}

export default IncorptionPage
