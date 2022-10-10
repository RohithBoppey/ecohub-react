import React from 'react'
import { Link } from 'react-router-dom';

const Navbarloggedin = () => {
  return (
    <>
        {/* {classes.navbar + classeses.navbar-expand + class} */}
          <nav className="navbar navbar-expand-lg navbar-dark defaultNavbar">
              <a className="navbar-brand" href="/home">ECOHUB</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                      <li className="nav-item active">
                          <a className="nav-link" href="/about">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/home#services">Our services</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/FAQ">FAQ's</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/FAQ#FAQ_contactUs">Contact us</a>
                      </li>
                      <li className="dropdown">
                          {/* <a href="#" data-toggle="dropdown" className="dropdown-toggle user-action"><img
                              src="<%= user.img_url %>"
                              className="avatar" alt="Avatar"> <%= user.username %>   <b className="caret"></b></a> */}
                          <ul className="dropdown-menu">
                              <li><a href="/user-profile"><i className="fa fa-user-o"></i> Profile</a></li>
                              <li><a href="/show-cart"><i className="fa fa-shopping-cart"></i> Your Cart</a></li>
                              <li><a href="/update-profile"><i className="fa fa-sliders"></i> Settings</a></li>
                              <li className="divider"></li>
                              <li><a href="/"><i className="fas fa-door-open"></i> Logout</a></li>
                          </ul>
                      </li>
                  </ul>

              </div>
          </nav> 
    </>
  )
}

export default Navbarloggedin
