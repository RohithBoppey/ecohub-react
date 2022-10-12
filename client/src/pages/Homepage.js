import React from 'react'
import Navbar from '../components/Navbar/Navbarloggedin'
import Header from '../components/Header'
import Atyourservice from '../components/Homepage/Atyourservice'
import Ourservice from '../components/Homepage/Ourservice'
import Footer from '../components/Footer'
import '../components/Homepage/HomepageCSS.css'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Atyourservice />
            <Ourservice />
            <Footer />
        </div>
    )
}

export default Homepage
