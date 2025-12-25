import React from 'react'
import UdyamRegBreadcrum from '../../Components/UdyamRegBreadcrum/UdyamRegBreadcrum'
import UdyamRegTabs from '../../Components/UdyamRegTabs/UdyamRegTabs'
import UdyamRegAbout from '../../Components/UdyamRegAbout/UdyamRegAbout'
import UdyamRegWho from '../../Components/UdyamRegWho/UdyamRegWho'
import UdyamRegBenefits from '../../Components/UdyamRegBenefits/UdyamRegBenefits'
import UdyamRegEligibility from '../../Components/UdyamRegEligibility/UdyamRegEligibility'
import UdyamRegDocuments from '../../Components/UdyamRegDocuments/UdyamRegDocuments'
import UdyamRegProcess from '../../Components/UdyamRegProcess/UdyamRegProcess'
import UdyamRegWhy from '../../Components/UdyamRegWhy/UdyamRegWhy'
import UdyamRegFAQ from '../../Components/UdyamRegFAQ/UdyamRegFAQ'

const UdyamReg = () => {
  return (
    <div>
      <UdyamRegBreadcrum />
      <UdyamRegTabs />
      <UdyamRegAbout />
      <UdyamRegWho />
      <UdyamRegBenefits />
      <UdyamRegEligibility />
      <UdyamRegDocuments />
      <UdyamRegProcess />
      <UdyamRegWhy />
      <UdyamRegFAQ />
    </div>
  )
}

export default UdyamReg
