import React from 'react'
import Breadcrum from '../../Components/Breadcrum/Breadcrum'
import PvtltdPlanandPricing from '../../Components/PvtltdPlanandPricing/PvtltdPlanandPricing'
import PvtltdZolvitPremium from '../../Components/PvtltdZolvitPremium/PvtltdZolvitPremium'
import PvtltdTabs from '../../Components/PvtltdTabs/PvtltdTabs'
import PvtltdCompany from '../../Components/PvtltdCompany/PvtltdCompany'

const PrivateLimited = () => {
  return (
    <div>
        <Breadcrum/>
        <PvtltdPlanandPricing />
        <PvtltdZolvitPremium />
        <PvtltdTabs />
        <PvtltdCompany />
    </div>
  )
}

export default PrivateLimited