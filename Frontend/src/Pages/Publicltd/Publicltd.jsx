import React from 'react'
import PublicBreadcrum from '../../Components/PublicBreadcrum/PublicBreadcrum'
 import PublicltdRightPlan from '../../Components/PublicltdRightPlan/PublicltdRightPlan'
import PublicltdTermsCondition from '../../Components/PublicltdTermsCondition/PublicltdTermsCondition'
import PublicltdZolvitPremium from '../../Components/PublicltdZolvitPremium/PublicltdZolvitPremium'
import PublicltdTab from '../../Components/PublicltdTab/PublicltdTab'
import PublicltdOverview from '../../Components/PublicltdOverview/PublicltdOverview'
import PublicltdFeatures from '../../Components/PublicltdFeatures/PublicltdFeatures'
import PublicltdBenifits from '../../Components/PublicltdBenifits/PublicltdBenifits'
import PublicltdDocument from '../../Components/PublicltdDocument/PublicltdDocument'
import PublicltdProcess from '../../Components/PublicltdProcess/PublicltdProcess'
import PublicltdWhy from '../../Components/PublicltdWhy/PublicltdWhy'
import PublicltdFAQ from '../../Components/PublicltdFAQ/PublicltdFAQ'



const Publicltd = () => {
  return (
    <div>
      <PublicBreadcrum />
      <PublicltdRightPlan />
      <PublicltdTermsCondition />
      <PublicltdZolvitPremium />
      <PublicltdTab />

      <div id="company">
        < PublicltdOverview/>
      </div>
      
      <div id="features">
        <PublicltdFeatures/>
      </div>

      <div id="benefits">
        <PublicltdBenifits/>
      </div>

      
      <div id="documents">
        <PublicltdDocument/>
      </div>

      <div id="process">
        <PublicltdProcess />
      </div>

      <PublicltdWhy />

      <div id="faq">
        <PublicltdFAQ />
      </div>
      


    </div>
  )
}

export default Publicltd
