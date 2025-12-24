import React from 'react'
import './Home.css'
import Herosection from '../../Components/Herosection/Herosection'
import Premiumbusiness from '../../Components/Premiumbusiness/Premiumbusiness'
import Compilance from '../../Components/Compilance/Compilance'
import Workingprocess from '../../Components/WorkingProcessPro/WorkingProcessPro'
import Whoweare from '../../Components/Whoweare/Whoweare'
import Featureslegalservice from '../../Components/Featureslegalservice/Featureslegalservice'
import Legalhelp from '../../Components/Legalhelp/Legalhelp'

const Home = () => {
  return (
    <>
        <Herosection/>
        <Compilance/>
        <Premiumbusiness/>
        <Workingprocess/>
        <Legalhelp/>
        <Whoweare/>
        <Featureslegalservice/>
    </>
  )
}

export default Home