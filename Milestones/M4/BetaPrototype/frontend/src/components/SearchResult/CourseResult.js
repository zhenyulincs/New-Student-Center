import React from 'react';
function CourseResult({ results,error,navigateCourseDescription }) {
    return (
        results == null ? error + "\n " :
            results.map(result => (
                <div id="Result-Container">

                    <div className="col-12">
                        <div className="card mb-4" id="card-border">
                            <div id="Result-Title">
                                <div className="card-header" id="header-color"><b>Class: {result.name}</b></div>
                            </div>
                            <div className="card-body">
                                <div className="card-body">
                                    <div className="card-group d-flex flex-column">
                                        <div id="Result-Description">
                                            <b>Professor: </b>{result.professor_name}
                                            <br></br>
                                            <b>Class Number: </b>{result.class_number}
                                            <br></br>
                                            <b>Location: </b>{result.location}
                                            <br></br>
                                            <b>Units: </b>{result.units}
                                        </div>
                                        <div className="d-flex justify-content-center  mx-4">
                                            <a type="submit" className="w-20 btn mb-3" id="button-color" onClick={()=>{navigateCourseDescription(result.id)}}> See More Details </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ))
    )
}
export default CourseResult