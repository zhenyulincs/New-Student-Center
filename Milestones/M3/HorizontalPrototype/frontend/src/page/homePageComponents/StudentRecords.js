// File Description: This file response to render the StudentRecords components for HomePage.

import React from 'react'
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function StudentRecords() {
    const navigate = useNavigate();
    // redirect to student record page
    const navigateRecords = () => {
        navigate('./studentrecords');
    };
    return (
        <><div className="col-9">
            <div className="card mb-4" id="card-border">
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
                                        <tr>
                                            <td>CSC 256</td>
                                            <td>A</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>CSC 648</td>
                                            <td>A</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>CSC 675</td>
                                            <td>A</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>MATH 400</td>
                                            <td>A</td>
                                            <td>3</td>
                                        </tr>
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
                                        <tr>
                                            <td>MATH 226</td>
                                            <td>COMPLETE</td>
                                        </tr>
                                        <tr>
                                            <td>MATH 227</td>
                                            <td>COMPLETE</td>
                                        </tr>
                                        <tr>
                                            <td>MATH 324</td>
                                            <td>COMPLETE</td>
                                        </tr>
                                        <tr>
                                            <td>PHYS 220</td>
                                            <td>COMPLETE</td>
                                        </tr>
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
                                        <tr>
                                            <td>AREA A1</td>
                                            <td>NOT COMPLETE</td>
                                        </tr>
                                        <tr>
                                            <td>AREA A2</td>
                                            <td>NOT COMPLETE</td>
                                        </tr>
                                        <tr>
                                            <td>AREA A3</td>
                                            <td>NOT COMPLETE</td>
                                        </tr>
                                        <tr>
                                            <td>AREA B1</td>
                                            <td>NOT COMPLETE</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Tab>
                            <Tab eventKey="transcripts" title="Transcripts">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Courses</th>
                                            <th scope="col">Grade</th>
                                            <th scope="col">Units Earned</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>CSC 210</td>
                                            <td>A</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>CSC 220</td>
                                            <td>A</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>CSC 230</td>
                                            <td>A</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>CSC 340</td>
                                            <td>A</td>
                                            <td>3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Tab>
                        </Tabs>
                    </p>
                    <div className="d-flex justify-content-center  mx-4">
                        <a type="submit" className="w-20 btn mb-3" id="button-color" onClick={navigateRecords}> See the full list of student record </a>
                    </div>
                </div>
            </div>
        </div><div className="col-3">
                <div className="card mb-4" id="card-border">
                    <div className="card-header" id="header-color"><b>Student Info</b></div>
                    <div className="card-body p-3 overflow-auto">
                        <p className="card-text">
                            <p className="card-title bg-transparent card-header student-info"><b>Major:</b> Computer Science</p>
                            <p className="card-title bg-transparent card-header student-info"><b>Student ID:</b> 123456789</p>
                            <p className="card-title bg-transparent card-header student-info"><b>Email:</b> Student@mail.sfsu.edu</p>
                            <p className="card-title bg-transparent card-header student-info"><b>Standing:</b> Senior</p>
                            <p className="card-title bg-transparent card-header student-info"><b>Address:</b> 1600 Holloway Ave, San Francisco, CA 94132</p>
                            <p className="bg-transparent student-info">&nbsp;</p>
                            <p className="bg-transparent student-info">&nbsp;</p>
                        </p>
                    </div>
                </div>
            </div></>

    )
}
export default StudentRecords;
