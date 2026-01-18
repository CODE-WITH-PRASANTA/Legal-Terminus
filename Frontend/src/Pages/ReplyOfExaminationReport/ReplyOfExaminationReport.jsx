import React from 'react'
import ReplyOfERBreadcrum from '../../Components/ReplyOfERBreadcrum/ReplyOfERBreadcrum'
import ReplyOfERPlanandPricing from '../../Components/ReplyOfERPlanandPricing/ReplyOfERPlanandPricing'
import ReplyOFERZolvitPremium from '../../Components/ReplyOFERZolvitPremium/ReplyOFERZolvitPremium'
import ReplyOfERTabs from '../../Components/ReplyOfERTabs/ReplyOfERTabs'
import ReplyOfERCompanyTab from '../../Components/ReplyOfERCompanyTab/ReplyOfERCompanyTab'
import ReplyOfERTypes from '../../Components/ReplyOfERTypes/ReplyOfERTypes'
import ReplyOfERTermsCondition from '../../Components/ReplyOfERTermsCondition/ReplyOfERTermsCondition'
import ReplyOfERRequirementsTab from '../../Components/ReplyOfERRequirementsTab/ReplyOfERRequirementsTab'
import ReplyOfERProcess from '../../Components/ReplyOfERProcess/ReplyOfERProcess'
import ReplyOfERDocuments from '../../Components/ReplyOfERDocuments/ReplyOfERDocuments'
import ReplyOfERFAQ from '../../Components/ReplyOfERFAQ/ReplyOfERFAQ'
import ReplyOfERTestimonial from '../../Components/ReplyOfERTestimonial/ReplyOfERTestimonial'
import ReplyOfERVideoTestimonial from '../../Components/ReplyOfERVideoTestimonial/ReplyOfERVideoTestimonial'
import ReplyOfEROurclints from '../../Components/ReplyOfEROurclints/ReplyOfEROurclints'

const ReplyOfExaminationReport = () => {
  return (
    <div>
      <ReplyOfERBreadcrum/>

      <div id="plans">
        <ReplyOfERPlanandPricing/>
      </div>

      <ReplyOfERTermsCondition/>

      <div id="premium">
        <ReplyOFERZolvitPremium/>
      </div>

      <ReplyOfERTabs/>

      <div id="company">
        <ReplyOfERCompanyTab/>
      </div>

      <div id="types">
        <ReplyOfERTypes/>
      </div>

      <div id="requirements">
        <ReplyOfERRequirementsTab/>
      </div>

      <div id="process">
        <ReplyOfERProcess/>
      </div>

       <div id="documents">
        <ReplyOfERDocuments/>
       </div>

      <div id="faq">
        <ReplyOfERFAQ/>
      </div>

      <ReplyOfERTestimonial/>
      <ReplyOfERVideoTestimonial/>
      <ReplyOfEROurclints/>
    </div>
  )
}

export default ReplyOfExaminationReport
