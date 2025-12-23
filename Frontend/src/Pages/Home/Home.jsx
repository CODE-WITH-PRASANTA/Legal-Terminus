import React from 'react'
import './Home.css'
import Herosection from '../../Components/Herosection/Herosection'
import Premiumbusiness from '../../Components/Premiumbusiness/Premiumbusiness'
import Workingprocess from '../../Components/WorkingProcessPro/WorkingProcessPro'
import Whoweare from '../../Components/Whoweare/Whoweare'
import Featureslegalservice from '../../Components/Featureslegalservice/Featureslegalservice'
import Legalhelp from '../../Components/Legalhelp/Legalhelp'
import HomeCertisfiedClient from '../../Components/HomeCertisfiedClient/HomeCertisfiedClient'

const Home = () => {
  return (
    <>
        {/* <Herosection/> */}
        <Premiumbusiness/>
        <Workingprocess/>
        <Legalhelp/>
        <HomeCertisfiedClient />
        <Whoweare/>
        <Featureslegalservice/>
    </>
  )
}

export default Home