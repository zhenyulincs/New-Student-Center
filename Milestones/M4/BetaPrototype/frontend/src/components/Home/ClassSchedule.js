// File Description: This file response to render the ClassSchedule components for HomePage.
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function ClassSchedule({response}) {
  
  const navigate = useNavigate();
  // redirect to enroll page
  const navigateEnroll = () => {
    navigate('./enroll');
  };
  return (
    <div className="col-md-5 col-sm-12 col-xs-12">
      <div className="card mb-4 login-height-100" id="card-border">
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
                {!response.isFinishLoading ?

                  <tr>
                    <td>
                      <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </td>
                  </tr> :
                  response.result.map((data) => (
                      <>
                      <tr>
                        <td>{data.short_name}</td>
                        <td>{data.meeting_days} {data.start_time}-{data.end_time} {data.location}</td>
                      </tr>
                    </>
                  ))

                }
              </tbody>
            </table>

          </div>
          <div className="d-flex justify-content-center  mx-4 ">
            <a type="submit" className="w-20 btn mt-3" id="button-color" onClick={navigateEnroll}> Register Class </a>
          </div>
        </div>
      </div>
    </div >
  )

}

export default ClassSchedule;
