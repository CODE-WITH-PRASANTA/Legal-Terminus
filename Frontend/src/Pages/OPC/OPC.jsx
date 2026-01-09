import React from 'react'
import OPCBreadcrum from '../../Components/OPCBreadcrum/OPCBreadcrum'
import OPCPlans from '../../Components/OPCPlans/OPCPlans'
import OPCTermCondition from '../../Components/OPCTermCondition/OPCTermCondition'
import OpcZolvitPremium from '../../Components/OpcZolvitPremium/OpcZolvitPremium'
import OPCTabs from '../../Components/OPCTabs/OPCTabs'
import OPCOverview from '../../Components/OPCOverview/OPCOverview'
import OPCFeatures from '../../Components/OPCFeatures/OPCFeatures'
import OPCBenefits from '../../Components/OPCBenefits/OPCBenefits'
import OPCElegibility from '../../Components/OPCElegibility/OPCElegibility'
import OPCDocuments from '../../Components/OPCDocuments/OPCDocuments'
import OPCFAQ from '../../Components/OPCFAQ/OPCFAQ'
import OPCProcess from '../../Components/OPCProcess/OPCProcess'
import OPCWhy from '../../Components/OPCWhy/OPCWhy'
import OPCOurclints from '../../Components/OPCOurclints/OPCOurclints'


const OPC = () => {
  return (
    <div>
      <OPCBreadcrum />
       <div id="plans">
        <OPCPlans />
      </div>
      <OPCTermCondition />
      <div id="premium">
        <OpcZolvitPremium />
      </div>
      <OPCTabs />
      <div id="company">
        <OPCOverview />
      </div>
     <div id="types">
        <OPCFeatures />
      </div>
      <div id="requirements">
        <OPCBenefits />
      </div>
      <div id="process">
        <OPCElegibility />
      </div>
     <div id="documents">
        <OPCDocuments />
      </div>
     <div id="faq">
        <OPCFAQ />
      </div>

      <OPCProcess />
      <OPCWhy />
      <OPCOurclints />
  
    </div>
  )
}

export default OPC
