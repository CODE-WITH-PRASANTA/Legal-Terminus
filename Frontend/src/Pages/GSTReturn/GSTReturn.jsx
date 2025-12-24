import React from 'react'
import GSTRetBreadcrum from '../../Components/GSTRetBreadcrum/GSTRetBreadcrum'
import GSTRetTabs from '../../Components/GSTRetTabs/GSTRetTabs'
import GSTRetOverview from '../../Components/GSTRetOverview/GSTRetOverview'
import GSTRetAdvantages from '../../Components/GSTRetAdvantages/GSTRetAdvantages'
import GSTRetTypes from '../../Components/GSTRetTypes/GSTRetTypes'
import GSTRetEligibility from '../../Components/GSTRetEligibility/GSTRetEligibility'
import GSTRetDocuments from '../../Components/GSTRetDocuments/GSTRetDocuments'
import GSTRetProcess from '../../Components/GSTRetProcess/GSTRetProcess'
import GSTRetFAQ from '../../Components/GSTRetFAQ/GSTRetFAQ'

const GSTReturn = () => {
  return (
    <div>
      <GSTRetBreadcrum />
      <GSTRetTabs />
      <GSTRetOverview />
      <GSTRetAdvantages />
      <GSTRetTypes />
      <GSTRetEligibility />
      <GSTRetDocuments />
      <GSTRetProcess />
      <GSTRetFAQ />
    </div>
  )
}

export default GSTReturn
