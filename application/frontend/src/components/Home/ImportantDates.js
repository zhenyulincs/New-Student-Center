// File Description: This file response to render the ImportantDates components for HomePage.

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ImportantDates({response}) {
    
    const navigate = useNavigate();
    // redirect to important date page
    const navigateImportantDate = () => {
        navigate('./schoolcalendar');
    };
    return (
        <div className="col-md-4 col-sm-12 col-xs-12 ">
            <div className="card mb-4 login-height-100" id="card-border">
                <div className="card-header" id="header-color"><b>Important Dates</b></div>
                <div className="card-body p-3 overflow-auto">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Events</th>
                                <th scope="col">Date</th>
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
                                response.result.slice(0,4).map((data) => (
                                <>
                                
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.date}</td>
                                    </tr>

                                </>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center  mx-4 ">
                        <a type="submit" className="w-20 btn mt-3" id="button-color" onClick={navigateImportantDate}> See the full list of important date </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImportantDates;
