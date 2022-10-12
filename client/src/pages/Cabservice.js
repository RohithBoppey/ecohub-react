import React from 'react'
import Cabprices from '../components/Cabprices'
import Cabrequest from '../components/Cabrequest'
import '../components/CabServiceCSS.css'
import Navbarloggedin from '../components/Navbar/Navbarloggedin'

const Cabservice = () => {
  return (
    <>
    <Navbarloggedin/>
      <Cabrequest/>
      <Cabprices/>
    </>
  )
}

export default Cabservice
