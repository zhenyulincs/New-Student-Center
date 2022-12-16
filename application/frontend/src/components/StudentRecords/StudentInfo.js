import React, { useState } from "react";

function StudentInfo({response}) {
    
    const graduation_status = ["Not yet apply","Apply for graduation"]
    
    return (
        <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="card mb-4" id="card-border">
                <div className="card-header" id="header-color">
                    <b>Student Information</b>
                </div>
                <div
                    className="card-body p-3"
                    style={{ height: "250px" }}
                >
                    <div className="card-body">
                        <div className="card-group">
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
                                                            <td>Career: { data.career}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Program: { data.program}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Expected Grad Date: {new Date(data.user.expected_grad_date).toDateString()}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Graduation Status: {graduation_status[data.user.graduation_status]}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Major: {data.name}</td>
                                                            </tr></>
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
        </div>
    )
}
export default StudentInfo