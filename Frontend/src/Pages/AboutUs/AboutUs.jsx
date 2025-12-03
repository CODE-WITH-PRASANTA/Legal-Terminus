import React from 'react'
import './AboutUs.css'
import AboutUsBanner from '../../Components/AboutUsBanner/AboutUsBanner'
import AboutOverview from '../../Components/AboutOverview/AboutOverview'
import ReachUsSection from '../../Components/ReachUsSection/ReachUsSection'
import LegalFeatures from '../../Components/LegalFeatures/LegalFeatures'
import JourneyTimeline from '../../Components/JourneyTimeline/JourneyTimeline'
import ProcessSection from '../../Components/ProcessSection/ProcessSection'
import WorkingProcess from '../../Components/WorkingProcess/WorkingProcess'
import Newsletter from '../../Components/Newsletter/Newsletter'

const AboutUs = () => {
  return (
    <>
    <AboutUsBanner/>
    <AboutOverview/>
    <ReachUsSection/>
    <LegalFeatures/>
    <JourneyTimeline/>
    <ProcessSection/>
    <WorkingProcess/>
    <Newsletter/>
    
    </>
  )
}

export default AboutUs