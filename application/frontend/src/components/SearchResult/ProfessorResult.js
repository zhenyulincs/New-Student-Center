import React, { useState, useEffect } from "react";

function ProfessorResult({ results, error, navigateCourseDescription }) {
    console.log(results);
    let user_index = 0
    return (
        results == null ? error + "\n " :
            results.map(result => (
                <div key={result.id} id="Result-Container">

                    <div className="col-12">
                        <div className="card mb-4" id="card-border">
                            <div id="Result-Title" style={{ "margin": "0" }}>
                                <div className="card-header" id="header-color"><b>Professor: {result.name}</b></div>
                            </div>
                            <div className="card-body">
                                <div className="card-body">
                                    <div className="card-group d-flex flex-column">
                                        <div id="Result-Description">
                                            <b>Rating: </b>{result.rating==null?"N/A":Math.round(+result.rating)}

                                            <div>
                                                <b>Difficulty: </b>{result.rating==null?"N/A":Math.round(+result.difficulty)}
                                            </div>
                                            <div>
                                                <b>Reviews:</b>
                                                {result.reviews.length == 0 ? "N/A" :""}
                                                {result.reviews.map(r => (
                                                    <>
                                                        <br></br>
                                                        User{++user_index}
                                                        <br></br>
                                                        {r.content}
                                                        <hr></hr>

                                                    </>
                                                ))
                                                }
                                            </div>
                                            <div className="d-flex justify-content-center  mx-4">
                                                <a type="submit" className="w-20 btn mb-3" id="button-color" onClick={() => { navigateCourseDescription(result.id) }}> See More Details </a>
                                            </div>
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
export default ProfessorResult