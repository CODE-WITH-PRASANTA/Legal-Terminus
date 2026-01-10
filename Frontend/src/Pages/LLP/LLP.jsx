import React from 'react'
import LLPBreadcrum from '../../Components/LLPBreadcrum/LLPBreadcrum.jsx'
import LLPPlanandPrice from '../../Components/LLPPlanandPrice/LLPPlanandPrice'
import LLPTermandCondn from '../../Components/LLPTermandCondn/LLPTermandCondn'
import LLPZolvitPremium from '../../Components/LLPZolvitPremium/LLPZolvitPremium'
import LLPTabs from '../../Components/LLPTabs/LLPTabs'
import LLPCompanyTab from '../../Components/LLPCompanyTab/LLPCompanyTab'
import LLPTypes from '../../Components/LLPTypes/LLPTypes'
import LLPRequirementsTab from '../../Components/LLPRequirementsTab/LLPRequirementsTab'
import LLPProcess from '../../Components/LLPProcess/LLPProcess'
import LLPDocInfographic from '../../Components/LLPDocInfographic/LLPDocInfographic'
import LLPFAQ from '../../Components/LLPFAQ/LLPFAQ'
import LLPTestimonial from '../../Components/LLPTestimonial/LLPTestimonial'
import LLPVideoTestimonial from '../../Components/LLPVideoTestimonial/LLPVideoTestimonial'
import LLPOurClients from '../../Components/LLPOurClients/LLPOurClients'



function LLP() {
  return (
    <div>
      <LLPBreadcrum />
      <LLPPlanandPrice />
      <LLPTermandCondn />
      <LLPZolvitPremium />
      <LLPTabs />
      <LLPCompanyTab />
      <LLPTypes />
      <LLPRequirementsTab />
      <LLPProcess />
      <LLPDocInfographic/>
      <LLPFAQ />
      <LLPTestimonial />
      <LLPVideoTestimonial />
      <LLPOurClients />
    </div>
  )
}

export default LLP
