import React from 'react'
import EPFRegBreadcrum from '../../Components/EPFRegBreadcrum/EPFRegBreadcrum'
import EPFRegTabs from '../../Components/EPFRegTabs/EPFRegTabs'
import EPFRegOverview from '../../Components/EPFRegOverview/EPFRegOverview'
import EPFRegBenefits from '../../Components/EPFRegBenefits/EPFRegBenefits'
import EPFRegApplicability from '../../Components/EPFRegApplicability/EPFRegApplicability'
import EPFRegDocuments from '../../Components/EPFRegDocuments/EPFRegDocuments'
import EPFRegProcess from '../../Components/EPFRegProcess/EPFRegProcess'
import EPFRegPenalties from '../../Components/EPFRegPenalties/EPFRegPenalties'
import EPFRegWhy from '../../Components/EPFRegWhy/EPFRegWhy'
import EPFRegFAQ from '../../Components/EPFRegFAQ/EPFRegFAQ'





const EPFReg = () => {
  return (
    <div>
      <EPFRegBreadcrum />
      <EPFRegTabs />
      <EPFRegOverview />
      <EPFRegBenefits />
      <EPFRegApplicability />
      <EPFRegDocuments />
      <EPFRegProcess />
      <EPFRegPenalties />
      <EPFRegWhy />
      <EPFRegFAQ />

    </div>
  )
}

export default EPFReg
