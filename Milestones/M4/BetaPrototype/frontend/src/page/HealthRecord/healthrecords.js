
/* 
File Description: This file response to render the Health Records page.

Health Records page contains page contains the following module:
- Name
- Gender
- Age
- Height 
- Weight
- Address
- City
- State
- Country
- Zip Code
- Email
- Phone number
- Allergies
- Mental Health

The Health Records page contains the hyperlink to the following website:
- this is a link that allows a user to submit there information

This file is made to take in the student health records information and display it on the student records page.


*/

import React, { useState } from 'react'
import Navbars from "../../components/Navbar/navbar"
import Footer from "../../components/Footer/Footer"
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import "./healthrecords.css"

const Healthrecords = () => {
  const navigate = useNavigate();
  // redirects to the submittedHealthRecords page
  const navigateSubmittedHealthRecords = () => {
    navigate('/SubmittedHealthRecords');
  };

  let user_token = ""
  if (localStorage.getItem("user") != null) {
    user_token = localStorage.getItem("user")
  } else {
    user_token = sessionStorage.getItem("user")
  }
  user_token = "0b73650a-c456-429e-af8e-2758d2b9de2f"

  const [error, setError] = React.useState(null);
  const [healthRecordsForm, setHealthRecordsForm] = useState({
    token: user_token,
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    height: "",
    weight: "",
    street_address: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    email: "",
    phone_num: "",
    allergies: "",
    ethnicity: "",
    mental_illness: "",
  });
  const [isFinishLoading, setFinishLoading] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault();
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        setFinishLoading(true)
        alert("Your Health Record save success")
      }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/createHealthRecord");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(healthRecordsForm).toString());
    setFinishLoading(false)
  };

  return (
    <div>
      <Navbars></Navbars>
      <div className="container px-4">
        <h3>Health Records</h3>
        <div className="col-12">
          <div className="card mb-4" id="card-border">
            <div className="card-body p-3 overflow-auto" style={{ height: "responsive" }}>
              <b>Patient Information:</b>
              <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="padding-between-inputs">
                  <label><b>First name:</b></label>
                  <input type="text" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, first_name: e.target.value })} />

                  <label className="label-padding"><b>Last name:</b></label>
                  <input type="text" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, last_name: e.target.value })} />

                  <label className="label-padding"><b>Gender:</b></label>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="0" className="form-check-input" type="radio" name="group1" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, gender: e.target.value })} />
                    Male
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="1" className="form-check-input" type="radio" name="group1" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, gender: e.target.value })} />
                    Female
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="2" className="form-check-input" type="radio" name="group1" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, gender: e.target.value })} />
                    Other
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="3" className="form-check-input" type="radio" name="group1" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, gender: e.target.value })} />
                    Prefer not to answer
                  </label>
                </div>

                <div className="padding-between-inputs">
                  <label><b>Birthday:</b></label>
                  <input type="date" id="birthday-input-box" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, date_of_birth: e.target.value })} />

                  {/* <label className="label-padding"><b>Age:</b></label>
                  <input type="text" id="age-input-box" /> */}

                  <label className="label-padding"><b>Height:</b></label>
                  <input type="text" id="height-input-box" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, height: e.target.value })} />

                  <label className="label-padding"><b>Weight:</b></label>
                  <input type="text" id="weight-input-box" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, weight: e.target.value })} />
                  <label style={{ paddingLeft: "5px" }}>lbs</label>
                </div>

                <div className="padding-between-inputs">
                  <label><b>Address:</b></label>
                  <input type="text" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, street_address: e.target.value })} />

                  {/* <label className="label-padding"><b>Apt, suite, etc.:</b></label>
                  <input type="text" id="apt-input-box" /> */}

                  <label className="label-padding"><b>City:</b></label>
                  <input type="text" id="city-input-box" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, city: e.target.value })} />

                  <label className="label-padding"><b>State:</b></label>
                  <input type="text" id="state-input-box" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, state: e.target.value })} />

                  <label className="label-padding"><b>Country:</b></label>
                  <input type="text" id="country-input-box" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, country: e.target.value })} />
                </div>

                <div className="padding-between-inputs">

                  <label><b>Zip code:</b></label>
                  <input type="text" id="zipcode-input-box" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, zip_code: e.target.value })} />

                  <label className="label-padding"><b>Email:</b></label>
                  <input type="email" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, email: e.target.value })} />

                  <label className="label-padding"><b>Phone number:</b></label>
                  <input type="text" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, phone_num: e.target.value })} />
                </div>

                <div className="padding-between-inputs">
                  <label><b>Allergies:</b></label>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="Yes" className="form-check-input" type="radio" name="group2" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, allergies: e.target.value })} />
                    Yes
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="No" className="form-check-input" type="radio" name="group2" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, allergies: e.target.value })} />
                    No
                  </label>
                </div>

                <div className="padding-between-inputs">
                  <label style={{ verticalAlign: "top" }}><b>If yes, please state them here:</b></label>
                  <textarea rows="5" cols="30" name="text" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, allergies: e.target.value })}></textarea>
                </div>

                <div className="padding-between-inputs">
                  <div>
                    <label style={{ paddingBottom: "10px" }}><b>Ethnicity:</b></label>
                    <div id="ethnicity-options">
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input value="Asian" className="form-check-input" type="radio" name="group3" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, ethnicity: e.target.value })} />
                        Asian
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input value="Black" className="form-check-input" type="radio" name="group3" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, ethnicity: e.target.value })} />
                        Black
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input value="Hispanic" className="form-check-input" type="radio" name="group3" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, ethnicity: e.target.value })} />
                        Hispanic
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input value="White" className="form-check-input" type="radio" name="group3" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, ethnicity: e.target.value })} />
                        White
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input value="Other" className="form-check-input" type="radio" name="group3" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, ethnicity: e.target.value })} />
                        Other
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input value="Prefer not to answer" className="form-check-input" type="radio" name="group3" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, ethnicity: e.target.value })} />
                        Prefer not to answer
                      </label>
                    </div>
                  </div>
                </div>

                <div className="padding-between-inputs">
                  <label><b>Mental Illness:</b></label>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="Yes" className="form-check-input" type="radio" name="group4" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, mental_illness: e.target.value })} />
                    Yes
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="No" className="form-check-input" type="radio" name="group4" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, mental_illness: e.target.value })} />
                    No
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="Not sure" className="form-check-input" type="radio" name="group4" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, mental_illness: e.target.value })} />
                    Not sure
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input value="Prefer not to answer" className="form-check-input" type="radio" name="group4" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, mental_illness: e.target.value })} />
                    Prefer not to answer
                  </label>
                </div>

                <div className="padding-between-inputs">
                  <label style={{ verticalAlign: "top" }}><b>If yes, please state them here:</b></label>
                  <textarea rows="5" cols="30" name="text" onChange={(e) => setHealthRecordsForm({ ...healthRecordsForm, mental_illness: e.target.value })}></textarea>
                </div>
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

              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Healthrecords;
