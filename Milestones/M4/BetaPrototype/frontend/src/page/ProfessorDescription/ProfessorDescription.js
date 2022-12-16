import React, { useState } from 'react'
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

function fetchData(response, setResponse, professor_id) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const return_data = JSON.parse(this.responseText)

            if (return_data.status.message === "success") {

                return_data.status.result.courses.forEach((data) => {
                    response.result.push(data)
                })
                response.professor.push(return_data.status.result.professor.name)

            } else {
                setResponse({ ...response, message: return_data.message })
            }
            setResponse({ ...response, isFinishLoading: true })

        }
    };
    xhttp.open("GET", "http://52.146.22.198/backend/professor/" + professor_id);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}


function ProfessorDescription() {
    const resizeObserver = new ResizeObserver(entries => {
        if (entries[0].target.scrollHeight > entries[0].target.clientHeight) {
            document.getElementsByClassName("footer")[0].style.position = "relative"
        } else {
            document.getElementsByClassName("footer")[0].style.position = "absolute"
        }
    })
    resizeObserver.observe(document.body)
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const professor_id = params.get("professor_id")

    const [response, setResponse] = useState({
        result: [],
        professor: [],
        isFinishLoading: false,
        message: ""
    })
    let userIndex = 0
    const [isFirstTime, setIsFirstTime] = useState(true)
    if (isFirstTime) {
        setIsFirstTime(false)
        fetchData(response, setResponse, professor_id)
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
                                <h3 className='v-search-result-count'>Professor Description</h3>
                            </div>
                        </div>
                    </div>
                    <div className='clearfix mt-40'>
                        <div id="Result-Container">
                            {
                                !response.isFinishLoading ?
                                    <><Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner></>
                                    : ""}


                            <div id="Result-Title">
                                <b>Professor Name: {response.professor[0]}</b>
                                <br></br>
                                {
                                    !response.isFinishLoading ? "" :
                                        response.result.map((data) => (
                                            <>
                                                <b>Class She/He Teach: {data.course.name}</b>
                                                <div id="Result-Description">
                                                    <b>Term: </b>{data.term}
                                                    <br></br>
                                                    <b>Prerequisites: </b>{data.course.prerequired.map((data) => (data.short_name + ","))}
                                                    <br></br>
                                                    <b>Units: </b>{data.units}
                                                    <br></br>
                                                    <b>Course Attributes: </b>{data.course_attributes}
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
                                                    <b>Review: </b>{data.enrollments.length == 0 ? "No Review Yet" : data.enrollments.map((enrollment_data) => (
                                                        <>
                                                            {enrollment_data.review == null ? "" : <><p>User: {++userIndex}</p><p>{enrollment_data.review.content}<hr></hr></p></>}

                                                        </>
                                                    ))}
                                                    <br></br>
                                                    <b>Ranking: </b>{data.rating == null ? "N/A" : data.rating}
                                                </div>
                                            </>
                                        ))}
                            </div>






                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Container>
    )
}
export default ProfessorDescription