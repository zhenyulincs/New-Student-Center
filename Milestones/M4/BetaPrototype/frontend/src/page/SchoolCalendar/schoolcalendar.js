/* 
File Description: This page handles the information being displayed on the school calendar page.

School calendar page contains the following modules:
- baseCalendar (the semester and year)              

The school calendar page contains a hyperlink to the following page(s):
- N/A

The school calendar page displays the important dates by semester. 
*/

import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Navbars from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import './schoolcalendar.css';

function fetchData(response, setResponse, body) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const return_data = JSON.parse(this.responseText)

            if (return_data.status.message === "success") {
                return_data.status.result.forEach((data) => {
                    response.result.push(data)
                })

            } else {
                setResponse({ ...response, message: return_data.message })
            }
            setResponse({ ...response, isFinishLoading: true })

        }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/calendar");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
}




function baseCalendar(semester, content, collapse_id) {
    return (
        <div className="col-12 mb-4">
            <div className="accordion" id="header-color">
                <div class="accordion-item" className="important-date-accordion-border">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button
                            class="accordion-button"
                            id="header-color"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#" + collapse_id}
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            <h4>{semester}</h4>
                        </button>
                    </h2>
                    <div
                        id={collapse_id}
                        class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div class="accordion-body">
                            
                            {content.map((data)=>(
                                calendar_info(data.date,data.name)
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function calendar_info(date, event_name) {
    return (
        <>
        <div className="important-date-header">
            {date}
        </div><div className="important-date-description">
            {event_name}
        </div><br></br>
    </>

    )
}

function StudentCalendar() {
    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }


    const [isFirstTime, setIsFirstTime] = useState(true)
    const [response, setResponse] = useState({
        result: [],
        message: "",
        isFinishLoading: false

    })
    const body = ({

    });
    let temp_calendar_info = []
    if (isFirstTime) {

        fetchData(response, setResponse, body)
        setIsFirstTime(false)
    }


    return (
        <div>
            <Navbars></Navbars>
            <div id="calendar-container">
                <div className="container px-4">
                    <div className="row">
                        <div>
                            <div className='col-md-12'>
                                <div className='v-heading-v2'>
                                    <h2 className='v-search-result-count text-center'> School Calendar 2022-2023</h2>
                                </div>
                            </div>
                        </div>
                        <Row style={{ height: "100%" }} className="justify-content-center align-items-center">
                            {!response.isFinishLoading ?
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                :
                                baseCalendar("Fall 2022",response.result,"Block1")
                                
                            }

                        </Row>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default StudentCalendar