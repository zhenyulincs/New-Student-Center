import React, { useState } from "react";
function fetchTranscript(body, response,setIsFinishLoad) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            const return_data = JSON.parse(this.responseText)

            if (return_data.status.message == "success" ) {
                response.result.push(return_data.status.result)
                setIsFinishLoad(true)
            }
        }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/user");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
}
function StudentInfo({response_old}) {
    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }
    const [response, setResponse] = useState({
        message:"",
        result:[],
    })
    const [isFinishingLoad, setIsFinishLoad] = useState(false)

    const [isFirstTime, setIsFirstTime] = useState(true)
    let body = {
        "token": user_token
    }
    if (isFirstTime) {
        fetchTranscript(body, response,setIsFinishLoad)
        setIsFirstTime(false)
    }
    
    return (
        <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="card mb-4 login-height-100" id="card-border">
                <div className="card-header" id="header-color"><b>Student Info</b></div>
                <div className="card-body overflow-auto">
                    <p className="card-text">
                        {!isFinishingLoad ?

                            <tr>
                                <td>
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </td>
                            </tr> :
                            response.result.map((data) => (
                                <>
                                    <p className="card-title bg-transparent card-header student-info"><b>Name:</b> {data != null ? data.username : ""}</p>
                                    <p className="card-title bg-transparent card-header student-info"><b>Major:</b> {data.degree != null ? data.degree.name : "Undeclared"}</p>
                                    <p className="card-title bg-transparent card-header student-info"><b>Student ID:</b> {data != null ? data.student_id : ""}</p>
                                    <p className="card-title bg-transparent card-header student-info"><b>Email:</b> {data != null ? data.email : ""}</p>
                                    <p className="card-title bg-transparent card-header student-info"><b>Standing:</b> {data != null ? data.academic_standing : ""}</p>
                                </>
                            ))
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}
export default StudentInfo