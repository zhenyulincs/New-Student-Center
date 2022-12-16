import React from 'react'
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Navbar/Footer'
import './submittedHealthRecords.css'

function SubmittedHealthRecords() {
    return (
        <section className="container">
            <div><Navbars></Navbars></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
            <h3 style={{ paddingLeft: "30px" }}>Health Records</h3>
            </div>
            <div className="container px-4">
                <div className="col-12">
                    <div className="card mb-4" id="card-border">
                        {/* <div className="card-header" id="header-color">
              <b>Student Records</b>
            </div> */}
                        <div className="card-body p-3 overflow-auto" style={{ height: "responsive" }}>
                            <b>Patient Information:</b>
                            <form>
                                <div className="padding-between-inputs">
                                    <label><b>First name: </b>Patty</label>

                                    <label className="label-padding"><b>Last name: </b>Smith</label>

                                    <label className="label-padding"><b>Gender: </b>Female</label>
                                </div>

                                <div className="padding-between-inputs">
                                    <label><b>Birthday: </b>03/25/2000</label>

                                    <label className="label-padding"><b>Age: </b>22</label>

                                    <label className="label-padding"><b>Height: </b>5'11</label>

                                    <label className="label-padding"><b>Weight: </b>150 lbs</label>
                                </div>

                                <div className="padding-between-inputs">
                                    <label><b>Address: </b>1600 Holloway Ave</label>

                                    {/* <label className="label-padding"><b>Apt, suite, etc.:</b></label> */}

                                    <label className="label-padding"><b>City: </b>San Francisco</label>

                                    <label className="label-padding"><b>State: </b>California</label>

                                    <label className="label-padding"><b>Country: </b>United States</label>
                                </div>

                                <div className="padding-between-inputs">

                                    <label><b>Zip code: </b>94132</label>

                                    <label className="label-padding"><b>Email: </b>psmith05@mail.sfsu.edu</label>

                                    <label className="label-padding"><b>Phone number: </b>(415) 111-1111</label>
                                </div>

                                <div className="padding-between-inputs">
                                    <label><b>Allergies: </b>Yes</label>
                                    
                                </div>

                                <div className="padding-between-inputs">
                                    <label style={{ verticalAlign: "top" }}><b>If yes, please state them here: </b>Peanuts</label>
                                </div>

                                <div className="padding-between-inputs">
                                    <div>
                                        <label style={{ paddingBottom: "10px" }}><b>Ethnicity: </b>White</label>
                                    </div>
                                </div>

                                <div className="padding-between-inputs">
                                    <label><b>Mental Illness: </b>Prefer not to answer</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>

            <Footer></Footer>
        </section>
    )
}

export default SubmittedHealthRecords