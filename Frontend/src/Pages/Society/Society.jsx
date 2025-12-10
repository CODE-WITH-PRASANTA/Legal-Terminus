import React from 'react'
import SocietyBreadcrum from '../../Components/SocietyBreadcrum/SocietyBreadcrum'
import SocietyTabs from '../../Components/SocietyTabs/SocietyTabs'
import SocietyOverview from '../../Components/SocietyOverview/SocietyOverview'
import SocietyCharacteristics from '../../Components/SocietyCharacteristics/SocietyCharacteristics'
import SocietyAdvantages from '../../Components/SocietyAdvantages/SocietyAdvantages'
import SocietyEligibility from '../../Components/SocietyEligibility/SocietyEligibility'
import SocietyDocumentsRequired from '../../Components/SocietyDocumentsRequired/SocietyDocumentsRequired'
import SocietyRegistrationSteps from '../../Components/SocietyRegistrationSteps/SocietyRegistrationSteps'
import SocietyConsequences from '../../Components/SocietyConsequences/SocietyConsequences'
import SocietyFees from '../../Components/SocietyFees/SocietyFees'
import SocietyDissolution from '../../Components/SocietyDissolution/SocietyDissolution'
import SocietyRenewal from '../../Components/SocietyRenewal/SocietyRenewal'
import SocietyCertificate from '../../Components/SocietyCertificate/SocietyCertificate'
import SocietyFAQ from '../../Components/SocietyFAQ/SocietyFAQ'

const Society = () => {
  return (
    <div>
      <SocietyBreadcrum />
      <SocietyTabs />
      <SocietyOverview />
      <SocietyCharacteristics />
      <SocietyAdvantages />
      <SocietyEligibility />
      <SocietyDocumentsRequired />
      <SocietyRegistrationSteps />
      <SocietyConsequences />
      <SocietyFees />
      <SocietyDissolution />
      <SocietyRenewal />
      <SocietyCertificate />
      <SocietyFAQ />
    </div>
  )
}

export default Society
