import React from 'react'
import './IncorptionPage.css'
import IncorptionBreadcrum from '../../Components/IncorptionBreadcrum/IncorptionBreadcrum'
import Tabs from '../../Components/Tabs/Tabs'
import VideoTestimonial from '../../Components/VideoTestimonial/VideoTestimonial'

const IncorptionPage = () => {
  return (
    <div>
        <IncorptionBreadcrum />
        <Tabs/>
        <VideoTestimonial/>
    </div>
  )
}

export default IncorptionPage