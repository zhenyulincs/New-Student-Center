import React from 'react'
import Navbars from '../components/Navbar/navbar'
import Footer from '../components/Navbar/Footer'
import './home.css'
import { Navigate } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {useNavigate } from 'react-router-dom';

const Home = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  if (user === null || user === '') {
    return <Navigate to="/login" />
  }

  const navigateError = () => {
    navigate('./ErrorPage');
  };
  return (
    <div>
      <Navbars></Navbars>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container px-4">
        <div className="row">
          <div className="col-5">
            <div className="card mb-4" id="card-border">
              <div className="card-header" id="header-color"><b>Class Schedule</b></div>
              <div className="card-body p-3 overflow-auto" style={{ height: '250px' }}>
                <div className="card-body">
                  <div className="card-group">
                    <div className="card-body ">
                      <pre className="card-title border-dark bg-transparent card-header"><b> Classes                    Time and Location</b></pre>
                      <pre className="card-title bg-transparent card-header"> CSC 256-02      MoWe 12:30PM-1:45PM Th Hall</pre>
                      <pre className="card-title bg-transparent card-header"> CSC 648-05      Th 7:00PM - 9:45PM Th Hall</pre>
                      <pre className="card-title bg-transparent card-header"> CSC 675-03      Tu 7:00PM - 9:45PM Th Hall</pre>
                      <pre className="card-title bg-transparent card-header">MATH 400-01     TuTh 11:00AM - 12:15PM Th Hall</pre>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center  mx-4 mb-3 mb-lg-4">
                  <a type="submit" className="w-20 btn" id="button-color" onClick={navigateError}> Add/Drop </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card mb-4" id="card-border">
              <div className="card-header" id="header-color"><b>Important Dates</b></div>
              <div className="card-body p-3 overflow-auto" style={{ height: '250px' }}>
                <div className="card-group" style={{ width: "100%", height: "500px" }}>
                  <div className="card-body ">
                    <pre className="card-title border-dark bg-transparent card-header"><b>Events                        Date</b></pre>
                    <pre className="card-title bg-transparent card-header">First Day of Instruction    08/22/22</pre>
                    <pre className="card-title bg-transparent card-header">Thanksgiving Break 11/24/22-11/25/22</pre>
                    <pre className="card-title bg-transparent card-header">Final Exams        12/10/22-12/16/22</pre>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card mb-4" id="card-border">
              <div className="card-header" id="header-color"><b>To-Do List</b></div>
              <div className="card-body p-3 overflow-auto" style={{ height: '250px' }}>
                <p className="card-text">
                  <div className="form-check d-flex">
                    <input required className="form-check-input me-2" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      <pre>Register for classes</pre>
                    </label>
                  </div>
                  <div className="form-check d-flex">
                    <input required className="form-check-input me-2" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      <pre>Pay for classes</pre>
                    </label>
                  </div>
                  <div className="form-check d-flex">
                    <input required className="form-check-input me-2" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      <pre>Check housing status</pre>
                    </label>
                  </div>
                  <div className="form-check d-flex">
                    <input required className="form-check-input me-2" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      <pre>Apply for graduation</pre>
                    </label>
                  </div>
                  <div className="form-check d-flex">
                    <input required className="form-check-input me-2" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      <pre>Complete professor evaluation</pre>
                    </label>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-9">
            <div className="card mb-4" id="card-border">
              <div className="card-header" id="header-color"><b>Student Records</b></div>
              <div className="card-body p-3 overflow-auto" style={{ height: '250px' }}>
                <p className="card-text">
                  <Tabs defaultActiveKey="major" className="mb-3">
                    <Tab eventKey="major" title="Grades">
                      <div clasName="card-group" style={{ width: "100%", height: "300px" }}>
                        <div className="card-body  ">
                          <p className="card-text">
                            <pre className="card-title border-dark  bg-transparent card-header">    <b>Courses</b>                                     <b>Grade</b>                            <b>Units Earned</b></pre>
                            <pre className="card-title bg-transparent card-header">    CSC 256                                       A                                    3</pre>
                            <pre className="card-title bg-transparent card-header">    CSC 648                                       A                                    3</pre>
                            <pre className="card-title bg-transparent card-header">    CSC 675                                       A                                    3</pre>
                            <pre className="card-title bg-transparent card-header">    MATH 400                                      A                                    3</pre>
                          </p>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="courses" title="Major Courses">
                      <div className="card-body ">
                        <p className="card-text">
                          <pre className="card-title border-dark bg-transparent card-header">          <b>Major Courses</b>                                             <b>Status</b></pre>
                          <pre className="card-title bg-transparent card-header">      MATH 226 - Calculus I                                        COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">      MATH 227 - Calculus II                                       COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">      MATH 324 - Statistics                                        COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">PHYS 220 - General Physics with Calculus I                         COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">PHYS 230 - General Physics with Calculus II                      NOT COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header"> CSC 210 - Intro to Computer Programming                           COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">      CSC 220 - Data Structures                                    COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">   CSC 340 - Programming Methodology                               COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header"> CSC 415 - Operating System Principles                           NOT COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">  CSC 510 - Analysis of Algorithms I                             NOT COMPLETE</pre>
                        </p>
                      </div>
                    </Tab>
                    <Tab eventKey="ge" title="GE Courses">
                      <div className="card-body ">
                        <p className="card-text">
                          <pre className="card-title border-dark bg-transparent card-header">          <b>GE Courses</b>                                                <b>Status</b></pre>
                          <pre className="card-title bg-transparent card-header">           AREA A1                                                  COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA A2                                                  COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA A3                                                NOT COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA B1                                                NOT COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA B2                                                  COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA B3                                                  COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA B4                                                  COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA C1                                                NOT COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA C2                                                  COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">        AREA C1 or C2                                             NOT COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA D1                                                  COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA D2                                                  COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA E                                                 NOT COMPLETE</pre>
                          <pre className="card-title bg-transparent card-header">           AREA F                                                   COMPLETE</pre>
                        </p>
                      </div>
                    </Tab>
                    <Tab eventKey="transcripts" title="Transcripts">
                      <div className="card-body ">
                        <pre className="card-title border-dark bg-transparent card-header">    <b>Courses</b>                                     <b>Grade</b>                            <b>Units Earned</b></pre>
                        <pre className="card-title bg-transparent card-header">   CSC 256                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   MATH 226                                       A                                    4</pre>
                        <pre className="card-title bg-transparent card-header">   MATH 227                                       A                                    4</pre>
                        <pre className="card-title bg-transparent card-header">   MATH 324                                       A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   PHYS 220                                       A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   CSC 210                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   CSC 220                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   CSC 340                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   AREA A1                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   AREA A2                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   AREA B2                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   AREA B3                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   AREA B4                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   AREA C2                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   AREA D1                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   AREA D2                                        A                                    3</pre>
                        <pre className="card-title bg-transparent card-header">   AREA F                                         A                                    3</pre>
                      </div>
                    </Tab>
                  </Tabs>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card mb-4" id="card-border">
              <div className="card-header" id="header-color"><b>Student Info</b></div>
              <div className="card-body p-3 overflow-auto" style={{ height: '250px' }}>
                <p className="card-text">
                  <pre className="card-title bg-transparent card-header">Major: Computer Science</pre>
                  <pre className="card-title bg-transparent card-header">Student ID: 123456789</pre>
                  <pre className="card-title bg-transparent card-header">Email: Student@mail.sfsu.edu</pre>
                  <pre className="card-title bg-transparent card-header">Standing: Senior</pre>
                  <pre className="card-title bg-transparent card-header">Address: 1600 Holloway Ave, San Francisco, CA 94132</pre>
                </p>
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-9">
            <div className="card mb-4" id="card-border">
              <div className="card-header" id="header-color"><b>Finances</b></div>
              <div className="card-body p-3 overflow-auto" style={{ height: '250px' }}>
                <p className="card-text">
                  <Tabs defaultActiveKey="home" className="mb-3">
                    <Tab eventKey="home" title="My Account">
                      <div className="card-group" style={{ width: "100%", height: "300px" }}>
                        <div className="card-body  ">
                          <pre className="card-title border-dark bg-transparent card-header"><b>Links</b></pre>
                          <br></br>
                          <a href='./ErrorPage'>Account Inquiry</a>
                          <br></br>
                          <a href='./ErrorPage'>Enroll In Direct</a>
                          <br></br>
                          <a href='./ErrorPage'>Deposit</a>
                        </div>
                        <div className="card-body">
                          <pre className="card-title border-dark bg-transparent card-header"><b>Payments Due</b></pre>
                          <pre className="card-text"> You owe: $4000</pre>
                          <pre className="card-text"> *Due Now: $4000</pre>
                          <pre className="card-text"> *Future Due: 0.00</pre>
                          <pre className="card-text"> **You have a past due of $40000**</pre>
                          <div className="d-flex justify-content-center  mx-4 mb-3 mb-lg-4">
                            <a onClick={navigateError} className="btn" id="button-color">Pay</a>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="profile" title="Financial Aid">
                      <div className="card-body ">
                        <pre className="card-title border-dark bg-transparent card-header"><b>links</b></pre>
                        <a href='./ErrorPage' > View Financial Aid</a>
                        <br></br>
                        <a href='./ErrorPage'>Accept/Decline Awards</a>
                        <br></br>
                        <a href='./ErrorPage'>Report Other Financial Aid</a>
                      </div>
                    </Tab>
                  </Tabs>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card mb-4" id="card-border">
              <div className="card-header" id="header-color"><b>Resources</b></div>
              <div className="card-body p-3 overflow-auto" style={{ height: '250px' }}>
                <p className="card-text">
                  <p className="card-text">
                    <a href='./ErrorPage' > Parking Permit Info</a>
                    <br></br>
                    <a href='./ErrorPage'>Club Info</a>
                    <br></br>
                    <a href='./ErrorPage'>Mashouf Wellness Center</a>
                    <br></br>
                    <a href='./ErrorPage'>Counslor Appointment</a>
                    <br></br>
                    <a href='./ErrorPage'>Medical Appointment</a>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Footer></Footer></div>
    </div>
  )
}

export default Home;