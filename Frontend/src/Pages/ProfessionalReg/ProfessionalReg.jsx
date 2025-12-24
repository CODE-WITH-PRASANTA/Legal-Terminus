import React from 'react'
import ProfessionalRegBreadcrum from '../../Components/ProfessionalRegBreadcrum/ProfessionalRegBreadcrum'
import ProffesionalRegProcess from '../../Components/ProffesionalRegProcess/ProffesionalRegProcess'
import ProfessionalRegDocuments from '../../Components/ProfessionalRegDocuments/ProfessionalRegDocuments'
import ProfessionalRegFAQ from '../../Components/ProfessionalRegFAQ/ProfessionalRegFAQ'
import ProfessionalRegTerms from '../../Components/ProfessionalRegTerms/ProfessionalRegTerms'

const ProfessionalReg = () => {
  return (
    <div>
      <ProfessionalRegBreadcrum />
      <ProffesionalRegProcess />
      <ProfessionalRegDocuments />
      <ProfessionalRegFAQ />
      <ProfessionalRegTerms />
    </div>
  )
}

export default ProfessionalReg
