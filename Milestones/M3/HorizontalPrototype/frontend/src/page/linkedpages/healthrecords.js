import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbar/navbar"
import Footer from "../../components/Navbar/Footer"
import { useNavigate } from 'react-router-dom';
import "./healthrecords.css"

const Healthrecords = () => {
  const navigate = useNavigate();
  // redirects to the submittedHealthRecords page
  const navigateSubmittedHealthRecords = () => {
    navigate('/SubmittedHealthRecords');
  };
  return (
    <div>
      <Navbars></Navbars>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <p>This version currently does not allow users to input their own information. This feature will be implemented in the next prototype.</p>
      </div>
      <div>
        <h3 style={{ paddingLeft: "90px" }}>Health Records</h3>
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
                  <label><b>First name:</b></label>
                  <input type="text" value="Patty"/>

                  <label className="label-padding"><b>Last name:</b></label>
                  <input type="text" value="Smith"/>

                  <label className="label-padding"><b>Gender:</b></label>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    Male
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="checked"/>
                    Female
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    Other
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    Prefer not to answer
                  </label>
                </div>

                <div className="padding-between-inputs">
                  <label><b>Birthday:</b></label>
                  <input type="text" placeholder="MM/DD/YYYY" id="birthday-input-box" value="03/25/2000"/>

                  <label className="label-padding"><b>Age:</b></label>
                  <input type="text" id="age-input-box" value="22"/>

                  <label className="label-padding"><b>Height:</b></label>
                  <input type="text" id="height-input-box" value="5'11"/>

                  <label className="label-padding"><b>Weight:</b></label>
                  <input type="text" id="weight-input-box" value="150"/>
                  <label style={{ paddingLeft: "5px" }}>lbs</label>
                </div>

                <div className="padding-between-inputs">
                  <label><b>Address:</b></label>
                  <input type="text" value="1600 Holloway Ave"/>
                  <label className="label-padding"><b>Apt, suite, etc.:</b></label>
                  <input type="text" id="apt-input-box" />

                  <label className="label-padding"><b>City:</b></label>
                  <input type="text" id="city-input-box" value="San Francisco"/>

                  <label className="label-padding"><b>State:</b></label>
                  <input type="text" id="state-input-box" value="California"/>
                  <label className="label-padding"><b>Country:</b></label>
                  {/* <select class="selectpicker countrypicker" data-default="DE"></select> */}
                  <input type="text" id="country-input-box" value="United States"/>
                </div>

                <div className="padding-between-inputs">
                  <label><b>Zip code:</b></label>
                  <input type="text" id="zipcode-input-box" value="94132"/>
                  <label className="label-padding"><b>Email:</b></label>
                  <input type="email" value="psmith05@mail.sfsu.edu"/>

                  <label className="label-padding"><b>Phone number:</b></label>
                  <input type="text" value="(415) 111-1111"/>
                </div>

                <div className="padding-between-inputs">
                  <label><b>Allergies:</b></label>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="checked"/>
                    Yes
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    No
                  </label>
                </div>

                <div className="padding-between-inputs">
                  <label style={{ verticalAlign: "top" }}><b>If yes, please state them here:</b></label>
                  <textarea rows="5" cols="30" name="text" value="Peanuts"></textarea>
                </div>

                <div className="padding-between-inputs">
                  <div>
                    <label style={{ paddingBottom: "10px" }}><b>Ethnicity:</b></label>
                    <div id="ethnicity-options">
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        Asian
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        Black
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        Hispanic
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="checked"/>
                        White
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        Other
                      </label>
                      <br></br>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        Prefer not to answer
                      </label>
                    </div>
                  </div>
                </div>

                <div className="padding-between-inputs">
                  <label><b>Mental Illness:</b></label>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    Yes
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    No
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    Not sure
                  </label>

                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="checked"/>
                    Prefer not to answer
                  </label>
                </div>

                <div className="padding-between-inputs">
                  <label style={{ verticalAlign: "top" }}><b>If yes, please state them here:</b></label>
                  <textarea rows="5" cols="30" name="text"></textarea>
                </div>

                <div className="d-flex justify-content-center  mx-4 ">
                  <a type="submit" className="w-20 btn mt-3" id="button-color" onClick={navigateSubmittedHealthRecords}>Submit</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <Footer></Footer>
    </div>
  );
};

export default Healthrecords;
