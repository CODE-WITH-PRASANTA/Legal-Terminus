import React from 'react'
import OPCBreadcrum from '../../Components/OPCBreadcrum/OPCBreadcrum'
import OPCPlans from '../../Components/OPCPlans/OPCPlans'
import OPCTabs from '../../Components/OPCTabs/OPCTabs'
import OPCOverview from '../../Components/OPCOverview/OPCOverview'
import OPCFeatures from '../../Components/OPCFeatures/OPCFeatures'
import OPCBenefits from '../../Components/OPCBenefits/OPCBenefits'
import OPCElegibility from '../../Components/OPCElegibility/OPCElegibility'
import OPCDocuments from '../../Components/OPCDocuments/OPCDocuments'
import OPCProcess from '../../Components/OPCProcess/OPCProcess'
import OPCWhy from '../../Components/OPCWhy/OPCWhy'
import OPCFAQ from '../../Components/OPCFAQ/OPCFAQ'

const OPC = () => {
  return (
    <div>
      <OPCBreadcrum />
      <OPCPlans />
      <OPCTabs />
      <OPCOverview />
      <OPCFeatures />
      <OPCBenefits />
      <OPCElegibility />
      <OPCDocuments />
      <OPCProcess />
      <OPCWhy />
      <OPCFAQ />
    </div>
  )
}

export default OPC
