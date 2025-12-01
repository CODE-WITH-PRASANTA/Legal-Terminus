import React from 'react'
import Breadcrum from '../../Components/Breadcrum/Breadcrum'
import PvtltdPlanandPricing from '../../Components/PvtltdPlanandPricing/PvtltdPlanandPricing'
import PvtltdZolvitPremium from '../../Components/PvtltdZolvitPremium/PvtltdZolvitPremium'
import PvtltdTabs from '../../Components/PvtltdTabs/PvtltdTabs'
import PvtltdCompanyTab from '../../Components/PvtltdCompanyTab/PvtltdCompanyTab'
import PvtltdPvtTypes from '../../Components/PvtltdPvtTypes/PvtltdPvtTypes'
import PvtltdRequirementsTab from '../../Components/PvtltdRequirementsTab/PvtltdRequirementsTab'
import PvtltdProcess from '../../Components/PvtltdProcess/PvtltdProcess'

const PrivateLimited = () => {
  return (
    <div>
        <Breadcrum/>
        <PvtltdPlanandPricing />
        <PvtltdZolvitPremium />
        <PvtltdTabs />
        <PvtltdCompanyTab />   
        <PvtltdPvtTypes />
        <PvtltdRequirementsTab />
        <PvtltdProcess />
    </div>
  )
}

export default PrivateLimited