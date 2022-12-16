// cloud photo
// Photo by Miguel Á. Padriñán: https://www.pexels.com/photo/white-clouds-on-blue-sky-19670/


import "./registration.css";
import React from 'react'
import { Navigate } from 'react-router-dom';
import Navbars from '../components/Navbar/navbar'
import Footer from "../components/Navbar/Footer";

function Registration() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [studentId, setStudentId] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleRegistration = (e) => {
    e.preventDefault();
    if (confirmPassword != password) {
      setError("password and confirm password doesn't match")
      return
    }
    setError("Working on it! please be patient")
    const body = {
      username: username,
      student_id: studentId,
      email: email,
      password: password,
    };

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const return_data = JSON.parse(this.responseText)
        if (return_data.register_status == "insert success") {
          localStorage.setItem("user", return_data.register_status)
          window.location.href = "./";
        } else {
          setError(return_data.register_status);
        }
      }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/register");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());

  };



  const user = localStorage.getItem("user");

  if (user != null && user != '') {
    return <Navigate to="/" />
  }

  const background = {
    background: "no-repeat url(../assets/sfsufountain.JPG)",
    backgroundSize: "100vw 100vh",
    overflow: "scroll"
  }

  return (
    <><section className="vh-100 overflow-auto" style={background}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-5 col-xl-5">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              {/* <div className="card-body p-md-5"> */}
              <div className="row justify-content-center">
                {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1"> */}
                {/* <div className="container">
          <div className="row">
            <img src="../assets/signup.png" className="img-fluid" alt="Sample image" />
          </div>
          <div className="row">
          <div className="userAction">
          existing user? log in <a href="./Login">here</a>
        </div>
            
          </div>
        </div> */}

                {/* </div> */}
                <div>

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>
                  <p className="text-center" style={{ color: '#cc3300' }}>{error == null ? "" : "Message: " + error}</p>
                  <form className="mx-1 mx-md-4" onSubmit={handleRegistration}>

                    <div className="d-flex flex-row align-items-center mb-2">
                      {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                      </svg>

                      &nbsp;
                      &nbsp;


                      <div className="form-outline flex-fill mb-0">
                        {/* enter username */}
                        <div className="form-floating">
                          <input required className="form-control" id="floatingInput"
                            placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)} />
                          <label htmlFor="floatingInput">Username</label>
                        </div>
                      </div>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>                   
                    </div>

                    <div className="d-flex flex-row align-items-center mb-2">
                      {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                      </svg>

                      &nbsp;
                      &nbsp;

                      <div className="form-outline flex-fill mb-0">
                        {/* enter email */}
                        <div className="form-floating">
                          <input required type="email" className="form-control" id="floatingInput" placeholder="name@example.com"

                            onChange={(e) => setEmail(e.target.value)} />
                          <label htmlFor="floatingInput">Email</label>
                        </div>
                      </div>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                    </div>


                    <div className="d-flex flex-row align-items-center mb-2">
                      {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-check-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                      </svg>

                      &nbsp;
                      &nbsp;

                      <div className="form-outline flex-fill mb-0">
                        {/* confirm email */}
                        <div className="form-floating">
                          <input required pattern="^\d{9}$" title="Please Enter 9 digits student Id" className="form-control" id="floatingInput" placeholder="920123456"

                            onChange={(e) => setStudentId(e.target.value)} />
                          <label htmlFor="floatingInput">Student Id</label>
                        </div>                        </div>
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                        </div>

                    <div className="d-flex flex-row align-items-center mb-2">
                      {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                      </svg>

                      &nbsp;
                      &nbsp;

                      <div className="form-outline flex-fill mb-0">
                        {/* enter password */}
                        <div className="form-floating">
                          <input required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Minimum eight characters, at least one letter and one number: " type="password" className="form-control" id="floatingPassword" placeholder="Password"

                            onChange={(e) => setPassword(e.target.value)} />
                          <label htmlFor="floatingPassword">Password</label>
                        </div>
                      </div>
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>                 
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>

                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      </svg>

                      &nbsp;
                      &nbsp;

                      <div className="form-outline flex-fill mb-0">
                        {/* confirm password */}
                        <div className="form-floating">
                          <input required type="password" className="form-control" id="floatingPassword" placeholder="Password"

                            onChange={(e) => setConfirmPassword(e.target.value)} />
                          <label htmlFor="floatingPassword">Confirm Password</label>
                        </div>
                      </div>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input required className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree to the <a className="link" href="./ErrorPage">Terms of Service</a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button className="btn btn-lg" id="register-button" type="submit">register</button>
                      {/* <button type="button" className="btn btn-primary btn-lg">Register</button> */}
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <label className="form-check-label" htmlFor="form2Example3">
                        Existing user? Sign in <a className="link" href="./login"> here</a>
                      </label>
                    </div>

                  </form>

                </div>

              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>


    </section><div><Footer></Footer></div></>
    // <div className="container h-100">
    //   <div className="row justify-content-center align-items-center h-100">
    //     <div className="col-4">sign in</div>
    //     <div className="col-6">
    //     <div className="header">Register</div>

    //       

    //       <div className="errorMessage">{error}</div>

    //       </div>

    //     </div>
    //     {/* <div className="col-sm-2">sign in</div> */}
    //   </div>
    // </div>

  )
}

export default Registration