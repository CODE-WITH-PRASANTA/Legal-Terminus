import React from 'react'
import './Home.css'
import Herosection from '../../Components/Herosection/Herosection'
import Premiumbusiness from '../../Components/Premiumbusiness/Premiumbusiness'
import Workingprocess from '../../Components/WorkingProcessPro/WorkingProcessPro'
import Whoweare from '../../Components/Whoweare/Whoweare'
import Featureslegalservice from '../../Components/Featureslegalservice/Featureslegalservice'
import Legalhelp from '../../Components/Legalhelp/Legalhelp'
import HomeCertisfiedClient from '../../Components/HomeCertisfiedClient/HomeCertisfiedClient'
import HomeAboutExperiance from '../../Components/HomeAboutExperiance/HomeAboutExperiance'
import Subscribe from '../../Components/Subscribe/Subscribe'
import Testimonials from '../../Components/Testimonials/Testimonials'
import ContactUs from '../../Components/Contactus/Contactus'
import HomeLatestBlog from '../../Components/HomeLatestBlog/HomeLatestBlog'

const Home = () => {
  return (
    <>
        <Herosection/>
        <Premiumbusiness/>
        <Workingprocess/>
        <Legalhelp/>
        <HomeCertisfiedClient />
        <HomeAboutExperiance />
        <Whoweare/>
        <Featureslegalservice/>
        <Subscribe />
        <Testimonials />
        <ContactUs />
        <HomeLatestBlog />
    </>
  )
}

export default Home