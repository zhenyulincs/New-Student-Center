import React from 'react'
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Navbar/Footer'
import "./notifications.css"

function Notifications() {
  return (
    <div>
      <Navbars></Navbars>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container px-4">
        <div className="col-12 mb-4">
          <div className="accordion" style={{ paddingbottom: "50px" }} id="header-color">
            <div className="accordion-item" id="accordion-border">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  id="header-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne">
                  <b>Holds and Alerts</b>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Department</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Pay tuition</th>
                        <td>$3000</td>
                        <td>January 5, 2023</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                        <th scope="row">Submit health records</th>
                        <td>N/A</td>
                        <td>January 5, 2023</td>
                        <td>Health</td>
                      </tr>
                      <tr>
                        <th scope="row">Complete assessment</th>
                        <td>N/A</td>
                        <td>January 25, 2023</td>
                        <td>N/A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mb-4">
          <div className="accordion" id="header-color">
            <div className="accordion-item" id="accordion-border">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  id="header-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseTwo">
                  <b>Notifications</b>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <table className="table table-striped table-hover">
                    <tbody>
                      <tr type="onClick" style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#notification-popup">
                        <td>You owe $10,000</td>
                      </tr>
                      <tr type="onClick" style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#notification-popup">
                        <td>Priority application for graduation end October 21, 2022</td>
                      </tr>
                      <tr type="onClick" style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#notification-popup">
                        <td>Drop deadline is November 2, 2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="notification-popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Notification</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Super random paragraphs to fill in space.
              Her hair was a tangled mess which she tried to make presentable by putting in a lump on the top of her head.
              It didn't really work although it was a valiant attempt. While most people simply noticed the tangled mess
              on top of her head, what most people failed to understand that within the tangles mess was an entirely new year.
              That was her secret. She kept worlds on top of her head.
              It had been a late night. To be more correct, it had been an early morning. It was now 3:00 AM and George was
              just getting home. He wasn't sure if it had been worth it. He was supposed to have been finished by 10:00 PM,
              but his boss had implored him to stay and help when it was clear they weren't going to meet the 10:00 PM target
              time. So, he had stayed an extra 5 hours and lost a good night's sleep for something he didn't really believe
              in, but he did anyway because he was afraid if he refused he might lose his job.
              There was no time. He ran out of the door without half the stuff he needed for work, but it didn't matter.
              He was late and if he didn't make this meeting on time, someone's life may be in danger.
              He was aware there were numerous wonders of this world including the unexplained creations of humankind that
              howed the wonder of our ingenuity. There are huge heads on Easter Island. There are the Egyptian pyramids.
              There’s Stonehenge. But he now stood in front of a newly discovered monument that simply didn't make any sense
              and he wondered how he was ever going to be able to explain it.
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Notifications