import React from 'react'
import './Home.css'
import Herosection from '../../Components/Herosection/Herosection'
import Premiumbusiness from '../../Components/Premiumbusiness/Premiumbusiness'
import Compilance from '../../Components/Compilance/Compilance'
import Workingprocess from '../../Components/Workingprocess/Workingprocess'

const Home = () => {
  return (
    <>
        <Herosection/>
        <Compilance/>
        <Premiumbusiness/>
        <Workingprocess/>
    </>
  )
}

export default Home