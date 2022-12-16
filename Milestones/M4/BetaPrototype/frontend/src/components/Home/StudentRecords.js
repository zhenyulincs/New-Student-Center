// File Description: This file response to render the StudentRecords components for HomePage.

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function fetchTranscript(body, setFilePath,setIsFinishLoad) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            const return_data = JSON.parse(this.responseText)

            if (return_data.status.message == "success" && return_data.status.result!=null) {
                setFilePath(return_data.status.result.path)
                setIsFinishLoad(true)
            }
        }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/getTranscript");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
}

function StudentRecords({response}) {
    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }
    const [filePath, setFilePath] = useState(null)
    const [isFinishingLoad, setIsFinishLoad] = useState(false)

    const [isFirstTime, setIsFirstTime] = useState(true)
    let body = {
        "token": user_token
    }
    const enrollment_status = ["fully enrolled", "waitlisted", "in shopping cart", "dropped", "completed"]

    if (isFirstTime) {
        fetchTranscript(body, setFilePath,setIsFinishLoad)
        setIsFirstTime(false)
    }
    const navigate = useNavigate();
    // redirect to student record page
    const navigateRecords = () => {
        navigate('./studentrecords');
    };
    return (
        <><div className="col-md-9 col-sm-12 col-xs-12">
            <div className="card mb-4 login-height-100" id="card-border">
                <div className="card-header" id="header-color"><b>Student Records</b></div>
                <div className="card-body p-3 overflow-auto">
                    <p className="card-text">

                        <Tabs defaultActiveKey="major" className="mb-3">
                            <Tab eventKey="major" title="Grades">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Courses</th>
                                            <th scope="col">Grade</th>
                                            <th scope="col">Units Earned</th>
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
                                            response.completed_classes.map((data) => (
                                                <>
                                                    <tr>
                                                        <td>{data.short_name}</td>
                                                        <td>{data.enrollments[0].grade}</td>
                                                        <td>{data.units}</td>
                                                    </tr>
                                                </>
                                            ))

                                        }

                                    </tbody>
                                </table>
                            </Tab>
                            <Tab eventKey="courses" title="Major Courses">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Major Courses</th>
                                            <th scope="col">Status</th>
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
                                            response.major_classes.map((data) => (
                                                <>
                                                    <tr>
                                                        <td>{data.short_name}</td>
                                                        <td>{enrollment_status[data.enrollments[0].enrollment_status]}</td>
                                                    </tr>
                                                </>
                                            ))

                                        }
                                    </tbody>
                                </table>
                            </Tab>
                            <Tab eventKey="ge" title="GE Courses">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">GE Courses</th>
                                            <th scope="col">Status</th>
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
                                            response.GE_classes.map((data) => (
                                                <>
                                                    <tr>
                                                        <td>{data.short_name}</td>
                                                        <td>{enrollment_status[data.enrollments[0].enrollment_status]}</td>
                                                    </tr>
                                                </>
                                            ))

                                        }
                                    </tbody>
                                </table>
                            </Tab>
                            <Tab eventKey="transcripts" title="Transcripts">
                                {!isFinishingLoad ?
                                    <tr>
                                        <td>
                                            <div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </td>
                                    </tr> :
                                    <div className="card-body p-3 overflow-auto col text-center">
                                        <a
                                            href={"http://52.146.22.198/backend/"+filePath}
                                            target="_blank"
                                            className="w-20 btn mb-3"
                                            id="button-color"
                                        >
                                            View Transcript
                                        </a >
                                    </div>
                                }
                            </Tab>
                        </Tabs>
                    </p>
                    <div className="d-flex justify-content-center  mx-4">
                        <a type="submit" className="w-20 btn mb-3" id="button-color" onClick={navigateRecords}> See the full list of student record </a>
                    </div>
                </div>
            </div>
        </div></>

    )
}
export default StudentRecords;
