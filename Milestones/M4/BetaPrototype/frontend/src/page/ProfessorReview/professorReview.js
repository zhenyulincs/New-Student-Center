import React, { useState } from 'react'
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const ProfessorReview = () => {
    const navigate = useNavigate();
    const navigateSubmittedProfessorReviews = () => {
        navigate('/SubmittedProfessorReviews');
    };

    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const [error, setError] = React.useState(null);
    const [professorReviewForm, setProfessorReviewForm] = useState({
        token: user_token,
        content: "",
        rating: "1",
        difficulty: "1",
        section_id: params.get("section_id"),
    });
    const [isFinishLoading, setFinishLoading] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        const body = {
            token: professorReviewForm.token,
            content: professorReviewForm.content,
            rating: professorReviewForm.rating,
            difficulty: professorReviewForm.difficulty,
            section_id: professorReviewForm.section_id,
        };
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                setFinishLoading(true)
                alert("Your professor review has been successfully saved.")
            }
        };
        xhttp.open("POST", "http://52.146.22.198/backend/review");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(new URLSearchParams(body).toString());
        setFinishLoading(false)
    }

    return (
        <><Navbar></Navbar><div>
            <div className="container px-4 mt-3">
                <h3>Professor Review</h3>
                <div>
                    <div className="card mb-4" id="card-border">
                        <div className="card-body p-3 overflow-auto">
                            <form onSubmit={handleSubmit}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="padding-between-inputs">
                                                <label><b>Quality:</b></label>
                                                <div key={`inline-radio`} className="mb-3">
                                                    <Form.Check
                                                        
                                                        value="1"
                                                        inline
                                                        label="1"
                                                        name="quality"
                                                        type="radio"
                                                        id="inline-radio-6"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, rating: e.target.value })}
                                                    />
                                                    <Form.Check
                                                        value="2"
                                                        inline
                                                        label="2"
                                                        name="quality"
                                                        type="radio"
                                                        id="inline-radio-7"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, rating: e.target.value })}
                                                    />
                                                    <Form.Check
                                                        value="3"
                                                        inline
                                                        label="3"
                                                        name="quality"
                                                        type="radio"
                                                        id="inline-radio-8"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, rating: e.target.value })}
                                                    />
                                                    <Form.Check
                                                        value="4"
                                                        inline
                                                        label="4"
                                                        name="quality"
                                                        type="radio"
                                                        id="inline-radio-9"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, rating: e.target.value })}
                                                    />
                                                    <Form.Check
                                                        value="5"
                                                        inline
                                                        label="5"
                                                        name="quality"
                                                        type="radio"
                                                        id="inline-radio-10"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, rating: e.target.value })}
                                                    />

                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="padding-between-inputs">
                                                <label><b>Difficulty:</b></label>
                                                <div key={`inline-radio`} className="mb-3">
                                                    <Form.Check
                                                        
                                                        value="1"
                                                        inline
                                                        label="1"
                                                        name="difficulty"
                                                        type="radio"
                                                        id="inline-radio-1"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, difficulty: e.target.value })}
                                                    />
                                                    <Form.Check
                                                        value="2"
                                                        inline
                                                        label="2"
                                                        name="difficulty"
                                                        type="radio"
                                                        id="inline-radio-2"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, difficulty: e.target.value })}
                                                    />
                                                    <Form.Check
                                                        value="3"
                                                        inline
                                                        label="3"
                                                        name="difficulty"
                                                        type="radio"
                                                        id="inline-radio-3"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, difficulty: e.target.value })}
                                                    />
                                                    <Form.Check
                                                        value="4"
                                                        inline
                                                        label="4"
                                                        name="difficulty"
                                                        type="radio"
                                                        id="inline-radio-4"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, difficulty: e.target.value })}
                                                    />
                                                    <Form.Check
                                                        value="5"
                                                        inline
                                                        label="5"
                                                        name="difficulty"
                                                        type="radio"
                                                        id="inline-radio-5"
                                                        onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, difficulty: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="padding-between-inputs">
                                                <label style={{ verticalAlign: "top" }}><b>Comments:</b></label>
                                                <textarea style={{ "height": "10vh" }} className="w-100" name="text" onChange={(e) => setProfessorReviewForm({ ...professorReviewForm, content: e.target.value })}></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            {isFinishLoading === false
                                                ?
                                                <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                :
                                                <div className="d-flex justify-content-center  mx-4 ">
                                                    <a type="submit" className="w-20 btn mt-3" id="button-color" onClick={handleSubmit}>Submit</a>
                                                </div>
                                            }

                                        </Col>
                                    </Row>
                                </Container>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div></>
    )
};

export default ProfessorReview;