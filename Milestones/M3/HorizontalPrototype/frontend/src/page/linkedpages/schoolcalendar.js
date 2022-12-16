import React from 'react'
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Navbar/Footer'
import './schoolcalendar.css'

function StudentCalendar() {
  return (
    <div>
      <Navbars></Navbars>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="calendar-container">
        <div className="container px-4">
          <div className="row">
            <div>
              <div className='col-md-9'>
                <div className='v-heading-v2'>
                  <h2 className='v-search-result-count' style={{ textAlign: "center" }}> School Calendar 2022-2023</h2>
                </div>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="accordion" id="header-color">
                <div class="accordion-item" id="accordion-border">
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
                      <h4>Fall 2022</h4>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      <div id="important-date-header">
                        Monday, April 11, 2022
                      </div>
                      <div id="important-date-description">
                        Fall 2022 Class Schedule Available
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Monday, August 22, 2022
                      </div>
                      <div id="important-date-description">
                        Fall 2022 First Day of Instruction
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Thursday November 24, 2022
                      </div>
                      <div id="important-date-description">
                        Thanksgiving (No Classes, Campus Closed)
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Monday, December 12, 2022 - Friday, December 16, 2022
                      </div>
                      <div id="important-date-description">
                        Fall 2022 Final Exams
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div class="accordion" id="header-color">
                <div class="accordion-item" id="accordion-border">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      id="header-color"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <h4>Winter 2023</h4>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div id="important-date-header">
                        Wednesday, November 2, 2022
                      </div>
                      <div id="important-date-description">
                        Registration starts
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Tuesday, January 3, 2023
                      </div>
                      <div id="important-date-description">
                        Winter 2023 First Day of Instruction
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Monday, January 16, 2023
                      </div>
                      <div id="important-date-description">
                        Dr. Martin Luther King Jr. holiday (No Classes, Campus Closed)
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Tuesday, January 24, 2023
                      </div>
                      <div id="important-date-description">
                        Winter 2023 Last Day of Instruction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div class="accordion" id="header-color">
                <div class="accordion-item" id="accordion-border">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      id="header-color"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      <h4>Spring 2023</h4>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div id="important-date-header">
                        Monday, November 7, 2022
                      </div>
                      <div id="important-date-description">
                        Spring 2023 Class Schedule Available
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Monday, January 30, 2023
                      </div>
                      <div id="important-date-description">
                        Spring 2023 First Day of Instruction
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Monday, March 20, 2023 - Friday March 24, 2023
                      </div>
                      <div id="important-date-description">
                        Spring Recess (No Classes)
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Monday, May 22, 2023 - Friday, May 26, 2023
                      </div>
                      <div id="important-date-description">
                        Spring 2023 Final Exams
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div class="accordion" id="header-color">
                <div class="accordion-item" id="accordion-border">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      id="header-color"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      <h4>Summer 2023</h4>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div id="important-date-header">
                        Monday, March 13, 2023
                      </div>
                      <div id="important-date-description">
                        Summer 2023 Class Schedule Available
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Tuesday, May 30, 2023
                      </div>
                      <div id="important-date-description">
                        Summer 2023 First Day of Instruction
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Tuesday, July 4, 2023
                      </div>
                      <div id="important-date-description">
                        Independence Day (No Classes)
                      </div>
                      <br></br>
                      <div id="important-date-header">
                        Friday August 4, 2023
                      </div>
                      <div id="important-date-description">
                        Summer 2023 Last Day of Instruction
                      </div>
                    </div>
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

export default StudentCalendar