
/* 
File Description: This file response to render the search results page.

CourseDescription contains page contains the following module:
- Class 
-Unit
- Prerequisites
- Name
- Professor
- Location
- Time
- Waitlist
- Seats
- Class Description
This file gives the descriptions for the course elementery Chinese 1.


*/


import React, { useState } from 'react'
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

function fetchData(response, setResponse, course_id) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const return_data = JSON.parse(this.responseText)

            if (return_data.status.message === "success") {
                response.result.push(return_data.status.result)

            } else {
                setResponse({ ...response, message: return_data.message })
            }
            setResponse({ ...response, isFinishLoading: true })

        }
    };
    xhttp.open("GET", "http://52.146.22.198/backend/course/" + course_id);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}


function CourseDescription() {
    // const resizeObserver = new ResizeObserver(entries => {
    //     if (entries[0].target.scrollHeight > entries[0].target.clientHeight) {
    //         document.getElementsByClassName("footer")[0].style.position = "relative"
    //     } else {
    //         // document.getElementsByClassName("footer")[0].style.position = "absolute"
    //     }
    // }
    // )
    // resizeObserver.observe(document.body)
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const section_id = params.get("section_id")
    let userIndex = 0
    const [response, setResponse] = useState({
        result: [],
        isFinishLoading: false,
        message: ""
    })
    const [isFirstTime, setIsFirstTime] = useState(true)
    if (isFirstTime) {
        setIsFirstTime(false)
        fetchData(response, setResponse, section_id)
    }
    return (
        <Container fluid>
            <div><Navbars></Navbars></div>
            <br></br>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <div className='v-heading-v2'>
                                <h3 className='v-search-result-count'>Course Description</h3>
                            </div>
                        </div>
                    </div>
                    {!response.isFinishLoading ?
                        <><Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner></>
                        :
                        response.result.map((data) => (
                            <div className='clearfix mt-40'>
                                <div id="Result-Container">
                                    <div id="Result-Title"><b>Class Name: {data.course.name}</b>
                                        <div id="Result-Description">
                                            <b>Prerequisites: </b>{data.course.prerequired.length==0?"None":data.course.prerequired.map((data) => (data.short_name + ","))}
                                            <br></br>
                                            <b>Units: </b>{data.units}
                                            <br></br>
                                            <b>Course Attributes: </b>{data.course_attributes}
                                            <br></br>
                                            <b>Professor: </b> {data.professor_name}
                                            <br></br>
                                            <b>Location: </b>{data.location}
                                            <br></br>
                                            <b>Time: </b>{data.start_time} - {data.end_time}
                                            <br></br>
                                            <b>Seats: </b>{+data.seat_capacity - (+data.num_enrolled)}
                                            <br></br>
                                            <b>Waitlist: </b> {data.num_waitlisted}
                                            <br></br>
                                            <b>Class Description:</b>
                                            <br></br>
                                            {data.course.description}
                                            <br></br>
                                            <b>Review:</b>{data.enrollments.length == 0 ? "No Review Yet" : data.enrollments.map((enrollment_data)=>(
                                                <>
                                                {enrollment_data.review == null ? "" : <><p>User: {++userIndex}</p><p>{enrollment_data.review.content}<hr></hr></p></>}
                                                
                                                </>
                                            ))}
                                            <br></br>
                                            <b>Ranking: {data.rating == null ? "N/A" : data.rating}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))

                    }

                </div>
            </div>
            <Footer></Footer>
        </Container>
    )
}

export default CourseDescription