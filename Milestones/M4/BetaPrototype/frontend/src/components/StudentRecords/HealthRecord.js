import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function getHealthRecord(response, setResponse, setIsFirstTime, body) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://52.146.22.198/backend/getHealthRecord");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onload = () => {
        if (xhttp.status === 200) {
            console.log(xhttp.response)
            // setTest('test4')
            const return_data = JSON.parse(xhttp.response)
            console.log(return_data);
            if (return_data.status.message == 'success') {
                response.results.push(return_data.status.result)
                setResponse({ ...response, isFinishLoading: true })
                setIsFirstTime(false);
                // setTest('test2')
                console.log(return_data);
            } else {
                setResponse({ ...response, message: return_data.message })
                console.log('error');
            }
        }
    }
    xhttp.send(new URLSearchParams(body).toString());
}

function HealthRecords() {
    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }

    const [isFirstTime, setIsFirstTime] = useState(true)
    const gender_list = ["Male", "Female", "Other", "Prefer not to answer"]
    const [response, setResponse] = useState({
        results: [],
        message: "",
        isFinishLoading: false
    })
    const body = {
        token: user_token
    };

    React.useEffect(() => {
        if (isFirstTime) {
            getHealthRecord(response, setResponse, setIsFirstTime, body)
            console.log('use effect');
            console.log(response);
        }
    }, []);

    return (
        <div className="col-md-12 col-sm-12 col-xs-12 mt-4">
            <div class="accordion" id="header-color">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button
                            class="accordion-button"
                            id="header-color"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            <b>Health Records</b>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            <Container>
                                {!response.isFinishLoading ?

                                    <tr>
                                        <td>
                                            <div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </td>
                                    </tr> : <>
                                        <Row className="mb-2">
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label><b>First name: </b>{result.first_name}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label className="label-padding"><b>Last name: </b>{result.last_name}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label className="label-padding"><b>Gender: </b>{gender_list[result.gender]}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row className="mb-2">
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label><b>Birthday: </b>{result.date_of_birth}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label className="label-padding"><b>Height: </b>{result.height}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label className="label-padding"><b>Weight: </b>{result.weight} lbs</label>
                                                ))}
                                            </Col>
                                        </Row>
                                        <Row className="mb-2">
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label><b>Address: </b>{result.street_address}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label className="label-padding"><b>City: </b>{result.city}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label className="label-padding"><b>State: </b>{result.state}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label className="label-padding"><b>Country: </b>{result.country}</label>
                                                ))}
                                            </Col>
                                        </Row>
                                        <Row className="mb-2">
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label><b>Zip code: </b>{result.zip_code}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label className="label-padding"><b>Email: </b>{result.email}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label className="label-padding"><b>Phone number: </b>{result.phone_num}</label>
                                                ))}
                                            </Col>
                                            <Col>

                                            </Col>

                                        </Row>
                                        <Row className="mb-2">
                                            <Col>
                                                {response.results.map((result) => (
                                                    <label><b>Allergies: </b>{result.allergies}</label>
                                                ))}
                                            </Col>
                                            <Col>
                                            </Col>
                                            <Col>
                                            </Col>
                                            <Col>
                                            </Col>
                                        </Row></>
                                }

                                <Row className="mb-2">
                                    <Col>
                                        {response.results.map((result) => (
                                            <label><b>Ethnicity: </b>{result.ethnicity}</label>
                                        ))}
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>
                                        {response.results.map((result) => (
                                            <label><b>Mental Illness: </b>{result.mental_illness}</label>
                                        ))}
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HealthRecords