import React from 'react'
import GSTRegBreadcrum from '../../Components/GSTRegBreadcrum/GSTRegBreadcrum'
import GSTRegPlans from '../../Components/GSTRegPlans/GSTRegPlans'
import GSTRegTabs from '../../Components/GSTRegTabs/GSTRegTabs'
import GSTRegOverview from '../../Components/GSTRegOverview/GSTRegOverview'
import GSTRegAdvantages from '../../Components/GSTRegAdvantages/GSTRegAdvantages'
import GSTRegEligibility from '../../Components/GSTRegEligibility/GSTRegEligibility'
import GSTRegDocument from '../../Components/GSTRegDocument/GSTRegDocument'
import GSTRegProcess from '../../Components/GSTRegProcess/GSTRegProcess'
import GSTRegFeatures from '../../Components/GSTRegFeatures/GSTRegFeatures'
import GSTRegTypes from '../../Components/GSTRegTypes/GSTRegTypes'
import GSTRegFAQ from '../../Components/GSTRegFAQ/GSTRegFAQ'

const GSTRegistration = () => {
  return (
    <div>
      <GSTRegBreadcrum />
      <GSTRegPlans />
      <GSTRegTabs />
      <GSTRegOverview />
      <GSTRegAdvantages />
      <GSTRegEligibility />
      <GSTRegDocument />
      <GSTRegProcess />
      {/* <GSTRegFeatures /> */}
      {/* <GSTRegTypes /> */}
      <GSTRegFAQ />
    </div>
  )
}

export default GSTRegistration
