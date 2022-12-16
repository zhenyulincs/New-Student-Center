// File Description: This file response to render the ClassSchedule components for HomePage.
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../home.css"
function ClassSchedule() {
  const navigate = useNavigate();
  // redirect to enroll page
  const navigateEnroll = () => {
    navigate('./enroll');
  };
  return (
    <div className="col-5">
      <div className="card mb-4" id="card-border">
        <div className="card-header" id="header-color">
          <b className="header-name-color">Class Schedule</b>
        </div>
        <div className="card-body p-3 overflow-auto">
          <div className="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Classes</th>
                  <th scope="col">Time and Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CSC 256-02</td>
                  <td>MoWe 12:30-1:45PM Thornton Hall</td>
                </tr>
                <tr>
                  <td>CSC 648-05</td>
                  <td>Th 7:00-9:45PM Thornton Hall</td>
                </tr>
                <tr>
                  <td>CSC 675-03</td>
                  <td>Tu 7:00-9:45PM Thornton Hall</td>
                </tr>
                <tr>
                  <td>MATH 400-01</td>
                  <td>TuTh 11:00-12:15PM Thornton Hall</td>
                </tr>
              </tbody>
            </table>

          </div>
          <div className="d-flex justify-content-center  mx-4 ">
            <a type="submit" className="w-20 btn mt-3" id="button-color" onClick={navigateEnroll}> Add/Drop </a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ClassSchedule;
