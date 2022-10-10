import React from 'react'

const RegisterForm = () => {
  return (
    <>
          <div className="container signup_body">
              <div className="row">
                  <div className="col-lg-10 col-xl-9 mx-auto">
                      <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                          <div className="card-img-left d-none d-md-flex">
                          </div>
                          <div className="card-body p-4 p-sm-5">
                              <h5 className="card-title text-center mb-5 fw-light fs-9">Register</h5>


                              <form onsubmit="documentValidation()" method="post" action="/register" autocomplete="off">

                                  <div className="form-floating mb-3">
                                      <input type="text" className="form-control" id="floatingInputUsername"
                                          placeholder="myusername" required autofocus name="username"/>
                                          <label htmlFor="floatingInputUsername">Username <span>*</span> (Will be shown
                                              publicly)</label>
                                  </div>

                                  <div className="form-floating mb-3">
                                      <input type="text" className="form-control" id="floatingInputFullName"
                                          placeholder="myinputname" required autofocus name="fullname"/>
                                          <label htmlFor="floatingInputFullName">Fullname <span>*</span></label>
                                  </div>

                                  <div className="form-floating mb-3">
                                      <input type="email" className="form-control" id="email" placeholder="name@example.com"
                                          name="email" required/>
                                          <label htmlFor="floatingInputEmail">Email address <span>*</span></label>
                                  </div>

                                  <hr/>

                                      <div className="form-floating mb-3">
                                          <input type="password" className="form-control" id="pass" placeholder="Password"
                                              name="password" required pattern=".{8,}" title="Minimum 8 required"/>
                                              <label htmlFor="pass">Password <span>*</span></label>
                                      </div>

                                      <div className="form-floating mb-3">
                                          <input type="text" className="form-control" id="phonenumber" placeholder="Phone Number"
                                              name="phonenumber" required pattern="[0-9]{10}" title="10 numbers hsa to be there"/>
                                              <label htmlFor="phonenumber">Phone Number <span>*</span></label>
                                      </div>

                                      <div className="form-floating mb-3">
                                          <input type="text" className="form-control" id="city" placeholder="City" name="city"
                                              required/>
                                              <label htmlFor="city">City <span>*</span></label>
                                      </div>

                                      <div className="form-floating mb-3">
                                          <input type="text" className="form-control" id="address" placeholder="Address"
                                              name="address" required/>
                                              <label htmlFor="address">Address <span>*</span></label>
                                      </div>

                                      <label className="label">Gender<span>*</span> &nbsp;&nbsp;</label>
                                      <div className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="gender" id="Radios" value="Male"
                                              required checked/>
                                              <label className="form-check-label" htmlFor="inlineRadio1">Male </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="gender" id="Radios" value="Female"
                                              required/>
                                              <label className="form-check-label" htmlFor="inlineRadio1">Female </label>
                                      </div>
                                      <hr />
                                      
                                   <br/><br/>

                                     

                                      <div className="form-floating mb-3">
                                          <input type="text" className="form-control" id="floatingimglink" placeholder="myimgurl"
                                              autofocus name="img_url"/>
                                              <label htmlFor="floatingimglink">URL for profile image</label>
                                      </div>

                                      <div className="d-grid mb-2">
                                          <button type="submit"
                                              className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase">Register</button>
                                      </div>
                                  </form>
                                      <a className="d-block text-center mt-2 small" href="/signin">Have an account? Sign In</a>

                                      <hr className="my-4"/>

                                          <div className="d-grid mb-2">
                                              <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                                                  <i className="fab fa-google me-2"></i> Sign up with Google
                                              </button>
                                          </div>

                                          <div className="d-grid">
                                              <button className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                                                  <i className="fab fa-facebook-f me-2"></i> Sign up with Facebook
                                              </button>
                                          </div>
                                          <hr/>







                                      </div>
                                  </div>
                          </div>
                      </div>
                  </div>
                  <br/><br/><br/><br/><br/><br/> 
    </>
  )
}

export default RegisterForm;
