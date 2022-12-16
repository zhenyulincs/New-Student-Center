/* 
File Description: This page handles the login page - such as checking the username/password and 
                  retrieving the info from the database.

Login page contains the following modules:
- Email
- Password
- Remember Me checkbox
- Login button

The login page contains a hyperlink to the following page(s):
- Forgot password
- Registration

The login page will redirect the user to the home page if the login is successful. 
If not, it will prompt the user to re-enter their credentials. 
This page also allows the user to go to the registration page if they are not an existing user.
*/

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './login.css'
import Email from '../../components/Login/Email';
import Password from '../../components/Login/Password';
import Remember from '../../components/Login/Remember';
import { Navigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    remember: false
  })
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginForm({ email: loginForm.email, password: loginForm.password });
    setError("Logging in, please be patient")
    const body = {
      email: loginForm.email,
      password: loginForm.password,
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const return_data = JSON.parse(this.responseText)
        if (return_data.status.message === "success") {
          setError("Login Success")
          if (loginForm.remember) {
            localStorage.setItem("user", return_data.status.result)
          }
          else {
            sessionStorage.setItem("user", return_data.status.result)
          }
          window.location.href = "./";
        } else {
          setError(return_data.status.message+return_data.status.result);
        }
      }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/login");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
  };
  const user = localStorage.getItem("user");
  if (user != null && user != '') {
    return <Navigate to="/" />
  }
  return (
    <><Container fluid className='login-height-100'>
      <Row className="login-background justify-content-center align-items-center flex-column">
        <Col className="login-form rounded-4" md="auto" lg="auto" sm="auto">
          <h2 className='text-center'>Login</h2>
          <p className='text-center'>{error}</p>
          <Form onSubmit={handleSubmit}>

            <Container className="px-4">
              {/* Email */}
              <Email setLoginForm={setLoginForm} loginForm={loginForm}></Email>
              {/* Password */}
              <Password setLoginForm={setLoginForm} loginForm={loginForm}></Password>
              {/* Remember me */}
              <Remember setLoginForm={setLoginForm} loginForm={loginForm}></Remember>
              <Row>
                <Button className="login-button mb-3" type="submit">
                  Login
                </Button>
              </Row>
              <Row>
                <Col className='text-center'>
                  <Form.Label>
                    New?Sign up <a href='./registration'>here</a>
                  </Form.Label>
                </Col>
              </Row>
            </Container>
          </Form>
        </Col>
      </Row>
      <Footer pageName={"Login"}></Footer>

    </Container></>
  )
}
export default Login