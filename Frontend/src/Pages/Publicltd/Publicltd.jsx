import React from 'react'
import PublicBreadcrum from '../../Components/PublicBreadcrum/PublicBreadcrum'
<<<<<<< HEAD
import PublicltdRightPlan from '../../Components/PublicltdRightPlan/PublicltdRightPlan'
import PublicltdTermsCondition from '../../Components/PublicltdTermsCondition/PublicltdTermsCondition'
import PublicltdZolvitPremium from '../../Components/PublicltdZolvitPremium/PublicltdZolvitPremium'
=======
>>>>>>> 2f9700b91bdacc044fb86572086791ff965516ca
import PublicltdTab from '../../Components/PublicltdTab/PublicltdTab'
import PublicltdOverview from '../../Components/PublicltdOverview/PublicltdOverview'
import PublicltdFeatures from '../../Components/PublicltdFeatures/PublicltdFeatures'
import PublicltdBenifits from '../../Components/PublicltdBenifits/PublicltdBenifits'
import PublicltdChecklist from '../../Components/PublicltdChecklist/PublicltdChecklist'
import PublicltdDocument from '../../Components/PublicltdDocument/PublicltdDocument'
import PublicltdProcess from '../../Components/PublicltdProcess/PublicltdProcess'
import PublicltdWhy from '../../Components/PublicltdWhy/PublicltdWhy'
import PublicltdFAQ from '../../Components/PublicltdFAQ/PublicltdFAQ'



const Publicltd = () => {
  return (
    <div>
      <PublicBreadcrum />
<<<<<<< HEAD
      <PublicltdRightPlan />
      <PublicltdTermsCondition />
      <PublicltdZolvitPremium />
=======
>>>>>>> 2f9700b91bdacc044fb86572086791ff965516ca
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

      <div id="checklist">
        <PublicltdChecklist/>
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
