
/* 
File Description: This file response to render the Student Records page.

Student Records page contains page contains the following module:
- Student Info
- Academic Summary
- Transcript
- Major Classes
- GED Classes
_ Student Health Records

This file displays the students information, the student health records and the students transcript in the student records page.


*/

import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import StudentInfo from "../../components/StudentRecords/StudentInfo";
import AcademicSummary from "../../components/StudentRecords/AcademicSummary";
import Transcript from "../../components/StudentRecords/Transcript";
import MajorClass from "../../components/StudentRecords/MajorClass";
import GEDClass from "../../components/StudentRecords/GEDClass";
import HealthRecords from "../../components/StudentRecords/HealthRecord";
import React, { useState } from "react";
function fetchData(response, majorResponse, GEResponse, setGEResponse, setMajorResponse, setStudentInfoResponse, body) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const return_data = JSON.parse(this.responseText)

      if (return_data.status.message === "success") {

        response.result.push(return_data.status.result.degree)
        return_data.status.result.courses.forEach((data) => {
          if (data.major != null) {
            majorResponse.all_classes.push(data)
            if (data.enrollments[0].enrollment_status == 0) {
              majorResponse.current_class.push(data)
            } else if (data.enrollments[0].enrollment_status == 4) {
              majorResponse.completes_classes.push(data)
            }

          } else {
            GEResponse.all_classes.push(data)
            if (data.enrollments[0].enrollment_status == 0) {
              GEResponse.current_class.push(data)
            } else if (data.enrollments[0].enrollment_status == 4) {
              GEResponse.completed_classes.push(data)
            }
          }
        })

      } else {
        setStudentInfoResponse({ ...response, message: return_data.message })
        setMajorResponse({ ...majorResponse, message: return_data.message })
        setGEResponse({ ...GEResponse, message: return_data.message })
      }
      setStudentInfoResponse({ ...response, isFinishLoading: true })
      setGEResponse({ ...GEResponse, isFinishLoading: true })
      setMajorResponse({ ...majorResponse, isFinishLoading: true })

    }
  };
  xhttp.open("POST", "http://52.146.22.198/backend/home");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(new URLSearchParams(body).toString());
}
function Studentrecords() {
  const resizeObserver = new ResizeObserver(entries => {
    if (entries[0].target.scrollHeight > entries[0].target.clientHeight) {
      document.getElementsByClassName("footer")[0].style.position = "relative"
    } else {
      document.getElementsByClassName("footer")[0].style.position = "absolute"
    }
  }
  )
  resizeObserver.observe(document.body)
  let user_token = ""
  if (localStorage.getItem("user") != null) {
    user_token = localStorage.getItem("user")
  } else {
    user_token = sessionStorage.getItem("user")
  }
  const [studentInfoResponse, setStudentInfoResponse] = useState({
    message: "",
    isFinishLoading: false,
    result: []
  })
  const [majorResponse, setMajorResponse] = useState({
    message: "",
    isFinishLoading: false,
    current_class: [],
    all_classes: [],
    completes_classes: []
  })
  const [GEResponse, setGEResponse] = useState({
    message: "",
    isFinishLoading: false,
    current_class: [],
    all_classes: [],
    completed_classes: []
})
  const [isFirstTime, setIsFirstTime] = useState(true)
  let body = {
    "token": user_token
  }
  if (isFirstTime) {
    fetchData(studentInfoResponse, majorResponse, GEResponse,setGEResponse,setMajorResponse, setStudentInfoResponse, body)
    setIsFirstTime(false)
  }

  return (
    <div>
      <Navbars></Navbars>

      <div className="container px-4 mt-4 mb-4">
        <div className="row">
          {/* StudentInfo */}
          <StudentInfo response={studentInfoResponse}></StudentInfo>
          {/* Academic Summary */}
          <AcademicSummary response={studentInfoResponse}></AcademicSummary>
          {/* Transcript */}
          <Transcript></Transcript>
          {/* Major Class */}
          <MajorClass response={majorResponse}></MajorClass>
          {/* GED Class */}
          <GEDClass response={GEResponse}></GEDClass>
          {/* Health Record */}
          <HealthRecords></HealthRecords>
        </div>
      </div>
      <Footer></Footer>
      {/* <Footer pageName={"Login"}></Footer> */}
    </div>
  );
}
export default Studentrecords;
