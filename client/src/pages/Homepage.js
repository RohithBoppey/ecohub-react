import React from 'react'
import Navbar from '../components/Navbar/Navbarloggedin'
import Header from '../components/Header'
import Atyourservice from '../components/Atyourservice'
import Ourservice from '../components/Ourservice'
import Footer from '../components/Footer'
import '../components/HomepageCSS.css'

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
