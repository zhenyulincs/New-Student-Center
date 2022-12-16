/* 
File Description: This page handles the registration page - such as sending the user info to the database and storing it

Registration page contains the following modules:
- Username
- Email
- Student ID
- Password
- Confirm Password
- Terms of Service
- Register button

The registration page contains a hyperlink to the following page(s):
- Terms of Service
- Login

The registration page will take the user to the home page upon successful sign up.
This page also allows a user to go to the login page if they are an existinf user.
*/

// cloud photo
// Photo by Miguel Á. Padriñán: https://www.pexels.com/photo/white-clouds-on-blue-sky-19670/
import "./registration.css";
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Email from '../../components/Register/Email';
import { Password, ConfirmPassword } from '../../components/Register/Password';
import StudentId from '../../components/Register/StudentId';
import Username from '../../components/Register/Username';
import TermAgreement from "../../components/Register/TermAgreement";
import { Navigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Registration() {
  const [error, setError] = React.useState(null);
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
    studentID: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerForm.confirmPassword != registerForm.password) {
      setError("password and confirm password doesn't match")
      return
    }
    setError("Working on it! please be patient")
    const body = {
      username: registerForm.username,
      student_id: registerForm.studentID,
      email: registerForm.email,
      password: registerForm.password,
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const return_data = JSON.parse(this.responseText)
        if (return_data.status.result == "insert success") {
          window.location.href = "./login";
        } else {
          setError("Error: "+return_data.status.result);
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
  return (
    <><Container fluid className='register-height-100'>
      <Row className="register-background justify-content-center align-items-center flex-column">
        <Col className="register-form rounded-4" md="auto" lg="auto" sm="auto">
          <h2 className='text-center'>Register</h2>
          <p className='text-center'>{error}</p>
          <Form onSubmit={handleSubmit}>
            <Container className="px-4">
              {/* Username */}
              <Username setRegisterForm={setRegisterForm} registerForm={registerForm}></Username>
              {/* Email */}
              <Email setRegisterForm={setRegisterForm} registerForm={registerForm}></Email>
              {/* StudentId */}
              <StudentId setRegisterForm={setRegisterForm} registerForm={registerForm}></StudentId>
              {/* Password */}
              <Password setRegisterForm={setRegisterForm} registerForm={registerForm}></Password>
              {/* ConfirmPassword */}
              <ConfirmPassword setRegisterForm={setRegisterForm} registerForm={registerForm}></ConfirmPassword>
              {/* TermAgreement */}
              <TermAgreement></TermAgreement>
              <Row>
                <Button className="register-button mb-3" type="submit">
                  Register
                </Button>
              </Row>
              <Row>
                <Col className='text-center'>
                  <Form.Label>
                    Existing user? Sign in <a href='./login'>here</a>
                  </Form.Label>
                </Col>
              </Row>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container><Footer pageName="Register"></Footer></>
  )
}
export default Registration