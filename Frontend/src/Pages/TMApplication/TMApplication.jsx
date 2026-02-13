import React from 'react'
import TMApplicaBreadcrum from '../../Components/TMApplicaBreadcrum/TMApplicaBreadcrum'
import TMApplicaPlanandPricing from '../../Components/TMApplicaPlanandPricing/TMApplicaPlanandPricing'
import TMApplicaTandC from '../../Components/TMApplicaTandC/TMApplicaTandC'
import TMApplicaZolvitPremium from '../../Components/TMApplicaZolvitPremium/TMApplicaZolvitPremium'
import TMApplicaTabs from '../../Components/TMApplicaTabs/TMApplicaTabs'
import TMApplicaCompanyTab from '../../Components/TMApplicaCompanyTab/TMApplicaCompanyTab'
import TMApplicaTypes from '../../Components/TMApplicaTypes/TMApplicaTypes'
import TMApplicaRequirementsTab from '../../Components/TMApplicaRequirementsTab/TMApplicaRequirementsTab'
import TMApplicaProcess from '../../Components/TMApplicaProcess/TMApplicaProcess'
import TMApplicaDocument from '../../Components/TMApplicaDocument/TMApplicaDocument'
import TMApplicaFAQ from '../../Components/TMApplicaFAQ/TMApplicaFAQ'
import TMApplicaTestimonial from '../../Components/TMApplicaTestimonial/TMApplicaTestimonial'
import TMApplicaVideoTestimonial from '../../Components/TMApplicaVideoTestimonial/TMApplicaVideoTestimonial'
import TMApplicaOurclints from '../../Components/TMApplicaOurclints/TMApplicaOurclints'

const TMApplication = () => {
  return (
    <div>

        <TMApplicaBreadcrum/>

        <div id="plans">
        <TMApplicaPlanandPricing/>
        </div>

        <TMApplicaTandC/>

        <div id="premium">
        <TMApplicaZolvitPremium/>
        </div>

        <TMApplicaTabs/>

        <div id="company">
        <TMApplicaCompanyTab/>
        </div>

        <div id="types">
        <TMApplicaTypes />
        </div>

        <div id="requirements">
        <TMApplicaRequirementsTab />
        </div>

        <div id="process">
            <TMApplicaProcess/>
        </div>

        <div id="documents">
          <TMApplicaDocument/>
        </div>

        <div id="faq">
            <TMApplicaFAQ/>
        </div>

        <TMApplicaTestimonial/>
        <TMApplicaVideoTestimonial/>
        <TMApplicaOurclints/>
      
    </div>
  )
}

export default TMApplication
