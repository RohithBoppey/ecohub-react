import React from 'react'
import './indexCSS.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>

          <nav className="navbar navbar-expand-lg navbar-dark defaultNavbar">
              <a className="navbar-brand" href="/">ECOHUB</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                      <li className="nav-item active">
                          <a className="nav-link" href="/register">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/#services">Our services</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/register">FAQ's</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/register">Contact us</a>
                      </li>
                  </ul>
                  <a href="/register" className="nav-link"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Join
                      us</button></a>
              </div>
          </nav>
    </>
  )
}

export default Navbar
