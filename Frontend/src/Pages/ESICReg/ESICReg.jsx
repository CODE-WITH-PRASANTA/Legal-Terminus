import React from 'react'
import EsicRegBreadcrum from '../../Components/EsicRegBreadcrum/EsicRegBreadcrum'
import ESICRegTabs from '../../Components/ESICRegTabs/ESICRegTabs'
import ESICRegOverview from '../../Components/ESICRegOverview/ESICRegOverview'
import ESICRegBenefits from '../../Components/ESICRegBenefits/ESICRegBenefits'
import ESICRegListicles from '../../Components/ESICRegListicles/ESICRegListicles'
import ESICRegProcess from '../../Components/EPFRegProcess/EPFRegProcess'
import ESICRegPenalties from '../../Components/ESICRegPenalties/ESICRegPenalties'
import ESICRegWhy from '../../Components/ESICRegWhy/ESICRegWhy'
import ESICRegFAQ from '../../Components/ESICRegFAQ/ESICRegFAQ'

const ESICReg = () => {
  return (
    <div>
      <EsicRegBreadcrum />
      <ESICRegTabs />
      <ESICRegOverview />
      <ESICRegBenefits />
      <ESICRegListicles />
      <ESICRegProcess />
      <ESICRegPenalties />
      <ESICRegWhy />
      <ESICRegFAQ />
    </div>
  )
}

export default ESICReg
