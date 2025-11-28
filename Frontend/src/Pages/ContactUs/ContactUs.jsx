import React from 'react'
import './ContactUs.css'
import ContactUsBanner from '../../Components/ContactUsBanner/ContactUsBanner'
import ContactUsShowcase from '../../Components/ContactUsShowcase/ContactUsShowcase'
import PracticeAreasSection from '../../Components/PracticeAreasSection/PracticeAreasSection'
import HowWeWorkSection from '../../Components/HowWeWorkSection/HowWeWorkSection'
import ClientFeedback from '../../Components/ClientFeedback/ClientFeedback'
import ExpertSection from '../../Components/ExpertSection/ExpertSection'
import ContactUsBlogSection from '../../Components/ContactUsBlogSection/ContactUsBlogSection'

const ContactUs = () => {
  return (
    <>
    <ContactUsBanner/>
    <ContactUsShowcase/>
    <PracticeAreasSection/>
    <HowWeWorkSection/>
    <ClientFeedback/>
    <ExpertSection/>
    <ContactUsBlogSection/>
   
    
    
    </>
  )
}

export default ContactUs