/* 
File Description: This page handles the search results and pulls the info from the database.

Search results page contains the following modules:
- Class
- Professor
- Class Number
- Location
- Units

The search results page contains a hyperlink to the following page(s):
- Course description

The search results page filters the searches by courses (currently only English, Math, and Chinese). 
Once the results have been filtered, users also have a choice to view a more detailed description by 
clicking on the "See More Details" button.
*/

import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchResults.css'
import Navbars from '../../components/Navbar/navbar'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/Footer';
import CourseResult from '../../components/SearchResult/CourseResult';
import ProfessorResult from '../../components/SearchResult/ProfessorResult';
import Spinner from 'react-bootstrap/Spinner';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function SearchResults() {
    const [error, setError] = useState(null);
    const [resultsFound, setResultsFound] = useState(false);
    const [results, setResults] = useState([]);
    const [sendRequest, setSendRequest] = useState(null);
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const resizeObserver = new ResizeObserver(entries => {
        if (entries[0].target.scrollHeight > entries[0].target.clientHeight) {
            document.getElementsByClassName("footer")[0].style.position = "relative"
        } else {
            document.getElementsByClassName("footer")[0].style.position = "absolute"
        }
    }
    )
    resizeObserver.observe(document.body)
    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }
    const body = {
        category: params.get("category").toLocaleLowerCase(),
        field: params.get("field"),
        token: user_token
    };

    useEffect(() => {
        if (sendRequest == null) {
            setError("Working on it! please be patient");
            var xhttp = new XMLHttpRequest();
            setSendRequest(false)
            xhttp.onload = () => {

                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    const return_data = JSON.parse(xhttp.responseText)
                    let temp_result = []
                    if (return_data.status.message === "success") {
                        if (Array.isArray(return_data.status.result)) {
                            console.log('is array')
                            return_data.status.result.forEach((data) => {
                                temp_result.push(data);
                            })
                            setResults(temp_result)
                        } else {
                            setError(return_data.status.result);
                        }


                        setResultsFound(true)


                    } else {
                        console.log('error')
                        setError(return_data.status.result);
                        setResultsFound(false)
                    }
                }
            }
            xhttp.open("POST", "http://52.146.22.198/backend/search");
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(new URLSearchParams(body).toString());
        }
    }, []);



    const navigate = useNavigate();
    // redirect to course description page
    const navigateDescription = (id) => {
        if (body.category === "course") {
            navigate('/coursedescription?section_id=' + id);
        } else {
            navigate(`/professordescription?professor_id=${id}`);
        }

    }

    return (
        <><Container fluid>
            <div><Navbars argFilter={capitalizeFirstLetter(params.get("category"))}></Navbars></div>
            <div className='container '>
                <div className='row'>
                    <div className='clearfix mt-4' id="search_result">
                        {resultsFound ?
                            <div className='row text-center'>
                                <div className='col-md-12'>
                                    <div className='v-heading-v2'>
                                        <h3 className='v-search-result-count'>{results.length != 0 ? results.length : "No"} Result(s)</h3>
                                    </div>
                                </div>
                            </div> :
                            <><Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner><p>"Working on it! please be patient"</p></>}
                        {
                            body.category == "course" ?
                                <CourseResult results={results} error={error} navigateCourseDescription={navigateDescription}></CourseResult>
                                :
                                <ProfessorResult results={results} error={error} navigateCourseDescription={navigateDescription}></ProfessorResult>
                        }


                    </div>

                </div>
            </div>
        </Container><Footer></Footer></>
    )
}

export default SearchResults