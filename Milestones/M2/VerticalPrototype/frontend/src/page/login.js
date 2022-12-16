import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'
import Navbars from '../components/Navbar/navbar'
import { Navigate } from 'react-router-dom';
import Footer from '../components/Navbar/Footer';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("Logging in, please be patient")
    const body = {
      email: email,
      password: password,
    };
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const return_data = JSON.parse(this.responseText)
        if (return_data.login_status != false) {
          setIsLoggedIn(true)
          localStorage.setItem("user", return_data.login_status)
          window.location.href = "./";
        } else {
          setError(return_data.login_status);
          setIsLoggedIn(false)
        }
      }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/login");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());

  };

  const background = {
    background: "no-repeat url(../assets/sfsufountain.JPG)",
    backgroundSize: "100vw 100vh",
    overflow: "scroll"
  }

  const user = localStorage.getItem("user");

  if (user != null && user != '') {
    return <Navigate to="/" />
  }

  if (!isLoggedIn) {

    return (
      <><section className="vh-100 overflow-auto" style={background}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-5 col-xl-5">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="row justify-content-center">
                  <div>
                    <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">Login</p>
                    <p className="text-center" style={{ color: '#cc3300' }}>{error == null ? "" : "Message: " + error}</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                      <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle " viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>

                        &nbsp;

                        &nbsp;
                        <div className="form-outline flex-fill mb-0">
                          {/* enter Email */}
                          <div className=" form-floating">
                            <input required type="email" className="form-control" id="floatingInput"
                              placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInput">Email</label>
                          </div>
                        </div>
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>

                      </div>
                      <div className="d-flex flex-row align-items-center mb-0">
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" bi bi-lock-fill" viewBox="0 0 16 16">
                          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        </svg>
                        &nbsp;
                        &nbsp;
                        <div className=" form-outline flex-fill mb-0">
                          {/* enter password */}

                          <div className=" form-floating">
                            <input required type="password" className=" w-100 form-control mb-2" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            <label htmlFor='floatingPassword'>Password</label>

                          </div>
                        </div>

                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>

                      </div>
                      <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <i className="fas fa-key fa-lg me-2 fa-fw"></i>
                        <label className=" form-floating">
                          <a className="link" href="./ErrorPage">Forgot password?</a>
                        </label>
                      </div>

                      <div className="form-check d-flex mb-4" style={{ paddingLeft: '126px' }}>
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          Keep me signed in
                        </label>
                      </div>

                      <div className="d-flex justify-content-center  mx-4 mb-3 mb-lg-4">
                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>

                        <button type="submit" id="login-button" className="btn btn-lg">Login</button>

                        <i className="fas fa-key fa-lg me-5 fa-fw"></i>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn" id="button-outline"><a id="file-import">Import Existing Information</a></button>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-4">
                        <label className="form-check-label" htmlFor="form2Example3">
                          New? Sign up <a className="link" href="./registration"> here</a>
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



    )
  }
}



export default Login