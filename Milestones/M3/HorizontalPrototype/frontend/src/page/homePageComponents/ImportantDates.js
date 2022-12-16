// File Description: This file response to render the ImportantDates components for HomePage.

import React from 'react'
import { useNavigate } from 'react-router-dom';
function ImportantDates() {
    const navigate = useNavigate();
    // redirect to important date page
    const navigateImportantDate = () => {
        navigate('./schoolcalendar');
    };
    return (
        <div className="col-4">
            <div className="card mb-4" id="card-border">
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
                            <tr>
                                <td>First day of instruction</td>
                                <td>08/22/2022</td>
                            </tr>
                            <tr>
                                <td>Thanksgiving break</td>
                                <td>11/24/2022-11/25/2022</td>
                            </tr>
                            <tr>
                                <td>Final exams</td>
                                <td>12/10/2022-12/16/2022</td>
                            </tr>
                            <tr>
                                <td>Last day of instruction</td>
                                <td>12/09/2022</td>
                            </tr>
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
