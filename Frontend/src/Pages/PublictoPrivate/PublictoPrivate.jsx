import React from 'react'
import PublictoPrivateBreadcrum from '../../Components/PublictoPrivateBreadcrum/PublictoPrivateBreadcrum'
 import PublictoPrivateRightPlan from '../../Components/PublictoPrivateRightPlan/PublictoPrivateRightPlan'
import PublictoPriTermsCondition from '../../Components/PublictoPriTermsCondition/PublictoPriTermsCondition'
import PublictoPriZolvitPremium from '../../Components/PublictoPriZolvitPremium/PublictoPriZolvitPremium'
import PublictoPriTab from '../../Components/PublictoPriTab/PublictoPriTab'
import PublictoPriOverview from '../../Components/PublictoPriOverview/PublictoPriOverview'
import PublictoPriFeatures from '../../Components/PublictoPriFeatures/PublictoPriFeatures'
import PublictoPriBenifits from '../../Components/PublictoPriBenifits/PublictoPriBenifits'
import PublictoPriDocument from '../../Components/PublictoPriDocument/PublictoPriDocument'
import PublictoPriProcess from '../../Components/PublictoPriProcess/PublictoPriProcess'
import PublictoPriWhy from '../../Components/PublictoPriWhy/PublictoPriWhy'
import PublictoPriFAQ from '../../Components/PublictoPriFAQ/PublictoPriFAQ'



const Publicltd = () => {
  return (
    <div>
      <PublictoPrivateBreadcrum/>
      <PublictoPrivateRightPlan />
      <PublictoPriTermsCondition />
      <PublictoPriZolvitPremium />
      <PublictoPriTab />

      <div id="company">
        < PublictoPriOverview/>
      </div>
      
      <div id="features">
        <PublictoPriFeatures/>
      </div>

      <div id="benefits">
        <PublictoPriBenifits/>
      </div>

      
      <div id="documents">
        <PublictoPriDocument/>
      </div>

      <div id="process">
        <PublictoPriProcess />
      </div>

      <PublictoPriWhy />

      <div id="faq">
        <PublictoPriFAQ />
      </div>
      


    </div>
  )
}

export default Publicltd
