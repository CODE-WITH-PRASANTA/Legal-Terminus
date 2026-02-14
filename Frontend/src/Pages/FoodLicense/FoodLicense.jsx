import React from 'react'
import FoodLicenseBreadcrum from '../../Components/FoodLicenseBreadcrum/FoodLicenseBreadcrum'
import FoodLicensePlans from '../../Components/FoodLicensePlans/FoodLicensePlans'
import FoodLicenseTermCondition from '../../Components/FoodLicenseTermCondition/FoodLicenseTermCondition'
import FoodlicenseZolvitPremium from '../../Components/FoodlicenseZolvitPremium/FoodlicenseZolvitPremium'
import FoodLicenseTabs from '../../Components/FoodLicenseTabs/FoodLicenseTabs'
import FoodLicenseOverview from '../../Components/FoodLicenseOverview/FoodLicenseOverview'
import FoodLicenseFeatures from '../../Components/FoodLicenseFeatures/FoodLicenseFeatures'
import FoodLicenseBenefits from '../../Components/FoodLicenseBenefits/FoodLicenseBenefits'
import FoodLicenseElegibility from '../../Components/FoodLicenseElegibility/FoodLicenseElegibility'
import FoodLicenseDocuments from '../../Components/FoodLicenseDocuments/FoodLicenseDocuments'
import FoodLicenseFAQ from '../../Components/FoodLicenseFAQ/FoodLicenseFAQ'
import FoodLicenseProcess from '../../Components/FoodLicenseProcess/FoodLicenseProcess'
import FoodLicenseWhy from '../../Components/FoodLicenseWhy/FoodLicenseWhy'
import FoodLicenseOurClints from '../../Components/FoodLicenseOurClints/FoodLicenseOurClints'

const FoodLicense = () => {
  return (
    <div>
      <FoodLicenseBreadcrum />

      <div id="plans">
        <FoodLicensePlans />
      </div>

      <FoodLicenseTermCondition />

      <div id="premium">
        <FoodlicenseZolvitPremium />
      </div>

      <FoodLicenseTabs />

      <div id="company">
        <FoodLicenseOverview />
      </div>

      <div id="types">
        <FoodLicenseFeatures />
      </div>

      <div id="requirements">
        <FoodLicenseBenefits />
      </div>

      <div id="process">
        {/* <FoodLicenseElegibility /> */}
      </div>

      <div id="documents">
        {/* <FoodLicenseDocuments /> */}
      </div>

      <div id="faq">
        <FoodLicenseFAQ />
      </div>

      <FoodLicenseProcess />
      <FoodLicenseWhy />
      <FoodLicenseOurClints />
     
    </div>
  )
}

export default FoodLicense
