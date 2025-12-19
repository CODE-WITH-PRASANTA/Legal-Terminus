import React from 'react'
import LLPBreadcrum from '../../Components/LLPBreadcrum/LLPBreadcrum'
import LLPPlans from '../../Components/LLPPlans/LLPPlans'
import LLPTabs from '../../Components/LLPTTabs/LLPTabs'
import LLPOverview from '../../Components/LLPOverview/LLPOverview'
import LLPFeatures from '../../Components/LLPFeatures/LLPFeatures'
import LLPBenefits from '../../Components/LLPBenefits/LLPBenefits'
import LLPChecklist from '../../Components/LLPChecklist/LLPChecklist'
import LLPDocuments from '../../Components/LLPDocuments/LLPDocuments'
import LLPProcess from '../../Components/LLPProcess/LLPProcess'
import LLPWhy from '../../Components/LLPWhy/LLPWhy'
import LLPFAQ from '../../Components/LLPFAQ/LLPFAQ'


const LLP = () => {
  return (
    <div>
      <LLPBreadcrum />
      <LLPPlans />
      <LLPTabs />
      <LLPOverview />
      <LLPFeatures />
      <LLPBenefits />
      <LLPChecklist />
      <LLPDocuments />
      <LLPProcess />
      <LLPWhy />
      <LLPFAQ />
    </div>
  )
}

export default LLP
