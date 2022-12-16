import React, { useState } from "react";
function fetchData(response, setResponse, body) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const return_data = JSON.parse(this.responseText)

            if (return_data.status.message === "success") {

                response.result.push(return_data.status.result.degree)

            } else {
                setResponse({ ...response, message: return_data.message })
            }
            setResponse({ ...response, isFinishLoading: true })

        }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/home");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
}
function AcademicSummary({response}) {
    
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
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
                                                    <td> Last Registered Date: {new Date(data.user.last_term_registered).toDateString()}</td>
                                                </tr>
                                                <tr>
                                                    <td> Academic Standing: {data.user.academic_standing}</td>
                                                </tr>
                                                <tr>
                                                    <td>Overall GPA: 2.890</td>
                                                </tr>
                                                <tr>
                                                    <td>SF State GPA: 3.500</td>
                                                </tr>
                                            </>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AcademicSummary