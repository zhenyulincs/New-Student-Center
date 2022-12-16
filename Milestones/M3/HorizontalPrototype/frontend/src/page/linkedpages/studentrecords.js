import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbar/navbar";
import Footer from "../../components/Navbar/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";
import sfsu_transcript from "../../assets/sfsu_transcript.pdf";
import './studentrecords.css'


function Studentrecords() {
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
              <div className="card-header" id="header-color">
                <b>Student Information</b>
              </div>
              <div
                className="card-body p-3 overflow-auto"
                style={{ height: "250px" }}
              >
                <div className="card-body">
                  <div className="card-group">
                    <div className="card-body ">
                      <p className="card-text">
                        <table class="table table-striped">
                          <tbody>
                            <tr>
                              <td>Career: Undergraduate Fall 2020</td>
                            </tr>
                            <tr>
                              <td>Program: Undergrad Degree-FA Fall 2020</td>
                            </tr>
                            <tr>
                              <td>Plan: Computer Science-BS Fall 2020</td>
                            </tr>
                            <tr>
                              <td>Expected Grad Term: Spring 2023</td>
                            </tr>
                            <tr>
                              <td>Graduation Status: Applied for Graduation</td>
                            </tr>
                          </tbody>
                        </table>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card mb-4" id="card-border">
              <div className="card-header" id="header-color">
                <b>Academic Summary</b>
              </div>
              <div className="card-body p-3 overflow-auto">
                <div className="card-group" style={{ width: "100%" }}>
                  <div className="card-body ">
                    <p className="card-text">
                      <table class="table table-striped">
                        <tbody>
                          <tr>
                            <td> Last Term Registered: Fall 2022</td>
                          </tr>
                          <tr>
                            <td> Academic Standing: Good Standing</td>
                          </tr>
                          <tr>
                            <td>Overall GPA: 2.890</td>
                          </tr>
                          <tr>
                            <td>SF State GPA: 3.500</td>
                          </tr>
                        </tbody>
                      </table>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card mb-4" id="card-border">
              <div className="card-header" id="header-color">
                <b>Transcript</b>
              </div>
              <div className="card-body p-3 overflow-auto col text-center">
                <a
                  href={sfsu_transcript}
                  target="_blank"
                  className="w-20 btn mb-3"
                  id="button-color"
                >
                  View Transcript
                </a>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div
              class="accordion"
              style={{ paddingbottom: "50px" }}
              id="header-color"
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button"
                    id="header-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <b> Major Classes</b>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <Tabs defaultActiveKey="major" className="mb-3">
                      <Tab
                        classname="text-dark"
                        id="tab-color"
                        eventKey="major"
                        title="Current Courses"
                      >
                        <div clasName="card-group" style={{ width: "100%" }}>
                          <div className="card-body  ">
                            <p className="card-text">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Major Courses</th>

                                    <th scope="col">Date/Time</th>

                                    <th scope="col">Units Earned</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>CSC 256</td>
                                    <td>MW 12:30pm-1:45pm</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>CSC 648</td>
                                    <td>T 7:00pm-9:45pm</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>CSC 415</td>
                                    <td>MW 9:30am-10:45am</td>
                                    <td>3</td>
                                  </tr>
                                </tbody>
                              </table>
                            </p>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="completed" title="Completed Courses">
                        <div
                          clasName="Inpogress Courses"
                          style={{ width: "100%" }}
                        >
                          <div className="card-body  ">
                            <p className="card-text">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Major Courses</th>
                                    <th scope="col">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>MATH 226</td>
                                    <td>COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>MATH 227</td>
                                    <td>COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>CSC 324</td>
                                    <td>COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>PHYS 220</td>
                                    <td>COMPLETE</td>
                                  </tr>
                                </tbody>
                              </table>
                            </p>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="recommended" title="Recommended Courses">
                        <div
                          clasName="Inpogress Courses"
                          style={{ width: "100%" }}
                        >
                          <div className="card-body  ">
                            <p className="card-text">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Major Courses</th>
                                    <th scope="col">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>CSC 620</td>
                                    <td>NOT COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>CSC 645</td>
                                    <td>NOT COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>CSC 662</td>
                                    <td>NOT COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>CSC 651 </td>
                                    <td>NOT COMPLETE</td>
                                  </tr>
                                </tbody>
                              </table>
                            </p>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-9">
            <div class="accordion" id="header-color">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    id="header-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <b>GED Classes</b>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <Tabs defaultActiveKey="major" className="mb-3">
                      <Tab eventKey="major" title="Current Courses">
                        <div
                          clasName="Inpogress Courses"
                          style={{ width: "100%" }}
                        >
                          <div className="card-body  ">
                            <p className="card-text">
                              <table class="table table-striped">
                                <thead>
                                  <tr>

                                    <th scope="col">GED Courses</th>
                                    <th scope="col">Date/Time</th>

                                    <th scope="col">Units Earned</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>CSC 675</td>
                                    <td>T 7:00pm-9:45pm</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>MATH 400</td>
                                    <td>TTH 11:90am-12:15pm</td>
                                    <td>3</td>
                                  </tr>
                                </tbody>
                              </table>
                            </p>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="completed" title="Completed Courses">
                        <div
                          clasName="Inpogress Courses"
                          style={{ width: "100%" }}
                        >
                          <div className="card-body  ">
                            <p className="card-text">
                              <table class="table table-striped">
                                <thead>
                                  <tr>

                                    <th scope="col">GED Courses</th>

                                    <th scope="col">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>AAS 510</td>
                                    <td>COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>AAS 360</td>
                                    <td>COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>AAS 212</td>
                                    <td>COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>KIN 355</td>
                                    <td>COMPLETE</td>
                                  </tr>
                                </tbody>
                              </table>
                            </p>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="recommended" title="Recommended Courses">
                        <div
                          clasName="Inpogress Courses"
                          style={{ width: "100%" }}
                        >
                          <div className="card-body  ">
                            <p className="card-text">
                              <table class="table table-striped">
                                <thead>
                                  <tr>

                                    <th scope="col">GED Courses</th>

                                    <th scope="col">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>AAS 316</td>
                                    <td>NOT COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>AAS 108</td>
                                    <td>NOT COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>KIN 324</td>
                                    <td>NOT COMPLETE</td>
                                  </tr>
                                  <tr>
                                    <td>AAS 210</td>
                                    <td>NOT COMPLETE</td>
                                  </tr>
                                </tbody>
                              </table>
                            </p>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default Studentrecords;
