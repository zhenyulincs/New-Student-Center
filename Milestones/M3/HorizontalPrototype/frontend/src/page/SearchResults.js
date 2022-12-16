import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchResults.css'
import Navbars from '../components/Navbar/navbar'
import { useNavigate } from 'react-router-dom';

function SearchResults() {
    const [error, setError] = useState(null);
    const [resultsFound, setResultsFound] = useState(null);
    const [results, setResults] = useState(null);
    const [sendRequest, setSendRequest] = useState(null);
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const body = {
        category: params.get("category"),
        field: params.get("field"),
    };
    
    if (sendRequest == null) {
        setError("Working on it! please be patient");
        var xhttp = new XMLHttpRequest();
        setSendRequest(false)
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                const return_data = JSON.parse(this.responseText)

                if (return_data.search_status.status == true) {
                    setResults(return_data.search_status.result)

                    setResultsFound(true)

                    // localStorage.setItem("user",return_data.login_status)
                    //   window.location.href = "/SearchResults";
                } else {
                    console.log("NOT FOUND");
                    setError(return_data.search_status.result+"\nI'm sorry, The current version only support these three search keyword: English, Math, Chinese");
                    setResultsFound(false)
                }
            }
        }
        xhttp.open("POST", "http://52.146.22.198/backend/search");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(new URLSearchParams(body).toString());
    }

    const navigate = useNavigate();
    // redirect to course description page
    const navigateCourseDescription = () => {
        navigate('/coursedescription');
    }

    return (
        <section className="container">
            <div><Navbars></Navbars></div>
            <div className='container' style={{ position: "absolute", top: "15%" }}>
                <div className='row'>
                    <div className='clearfix mt-40' id="search_result">
                        {results == null ? error + "\n " :
                            results.map(result => (
                                <div id="Result-Container">
                                    <div className='row text-center'>
                                        <div className='col-md-12'>
                                            <div className='v-heading-v2'>
                                                <h3 className='v-search-result-count'>{results != null ? results.length : "No"} Result(s)</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card mb-4" id="card-border">
                                            <div id="Result-Title">
                                                <div className="card-header" id="header-color"><b>Class: {result.name}</b></div>
                                            </div>
                                            <div className="card-body" style={{ height: '75px' }}>
                                                <div className="card-body">
                                                    <div className="card-group d-flex flex-column">
                                                        <div id="Result-Description">
                                                            <b>Professor: </b>{result.professor}
                                                            <br></br>
                                                            <b>Class Number: </b>{result.class_number}
                                                            <br></br>
                                                            <b>Location: </b>{result.location}
                                                            <br></br>
                                                            <b>Units: </b>{result.units}
                                                        </div>
                                                        <div className="d-flex justify-content-center  mx-4">
                                                            <a type="submit" className="w-20 btn mb-3" id="button-color" onClick={navigateCourseDescription}> See More Details </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SearchResults