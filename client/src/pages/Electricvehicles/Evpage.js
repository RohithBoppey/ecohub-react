import React from 'react'
import Cars from './Cars'
import UpcomingCars from './UpcomingCars'
import Navbarloggedin from '../../components/Navbar/Navbarloggedin'
import RegisterFooter from '../../components/Login_Signup/RegisterFooter'
import './ev-list.css'

const Evpage = () => {
  return (
    <>
      <Navbarloggedin/>
      <Cars/>
      <UpcomingCars/>
      <RegisterFooter/>
    </>
  )
}

export default Evpage
