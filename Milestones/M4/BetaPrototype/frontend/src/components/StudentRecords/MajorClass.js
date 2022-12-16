import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function MajorClass({response}) {
    const navigate = useNavigate();

    
    const enrollment_status = ["fully enrolled", "waitlisted", "in shopping cart", "dropped", "completed"]
    const submitReview = (section_id) => {
        navigate('/ProfessorReview?section_id=' + section_id);
    }
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div
                class="accordion mb-4"
                style={{ paddingbottom: "50px" }}
                id="header-color"
            >
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button
                            class="accordion-button"
                            id="header-color"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            <b> Major Classes</b>
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div class="accordion-body">
                            <Tabs defaultActiveKey="major" className="mb-3">
                                <Tab
                                    classname="text-dark"
                                    id="tab-color"
                                    eventKey="major"
                                    title="Current Courses"
                                >
                                    <div clasName="card-group" style={{ width: "100%" }}>
                                        <div className="card-body  ">
                                            <p className="card-text">
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Major Courses</th>
                                                            <th scope="col">Date/Time</th>
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
                                                            response.current_class.map((data) => (
                                                                <>
                                                                    <tr>
                                                                        <td>{data.short_name}</td>
                                                                        <td>{data.meeting_days} {data.start_time}-{data.end_time}</td>
                                                                        <td>{data.units}</td>
                                                                    </tr>
                                                                </>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </p>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="allClasses" title="All Major Classes">
                                    <div
                                        clasName="Inpogress Courses"
                                        style={{ width: "100%" }}
                                    >
                                        <div className="card-body  ">
                                            <p className="card-text">
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
                                                            response.all_classes.map((data) => (
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
                                            </p>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="completed" title="Completed Classes">
                                    <div
                                        clasName="Inpogress Courses"
                                        style={{ width: "100%" }}
                                    >
                                        <div className="card-body  ">
                                            <p className="card-text">
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Major Courses</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Review</th>
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
                                                            response.completes_classes.map((data) => (
                                                                <>
                                                                    <tr>
                                                                        <td>{data.short_name}</td>
                                                                        <td>{enrollment_status[data.enrollments[0].enrollment_status]}</td>
                                                                        <td><a type="submit" className="btn" id="button-color" onClick={(e) => { submitReview(data.id) }}>
                                                                            Review
                                                                        </a></td>
                                                                    </tr>
                                                                </>
                                                            ))
                                                        }

                                                    </tbody>
                                                </table>
                                            </p>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MajorClass