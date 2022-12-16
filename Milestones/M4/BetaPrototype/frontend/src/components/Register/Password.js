import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiLockPasswordFill } from 'react-icons/ri'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';

function basePassword(passwordComponents, passwordHelper) {
  return (
    <Form.Group className="mb-3" controlId="register-password">
      <Row className='align-items-center gx-5'>
        {/* Password Icon */}
        <Col className="ps-0 pe-0" md="2" sm="2" lg="2" xs="2">
          <RiLockPasswordFill size={"2em"} />
        </Col>
        {/* Password field */}
        {passwordComponents}
      </Row>
      {passwordHelper != "" ? passwordHelper : ""}
    </Form.Group>
  )
}



function ConfirmPassword({ setRegisterForm, registerForm }) {
  const confirmPasswordHTML =
    <>
      {/* input field */}
      <Col className="ps-0 pe-0" md="10" sm="10" lg="10" xs="10">
        <FloatingLabel
          controlId="floatingInput"
          label="ReEnter Password"
        >
          <Form.Control type="password" onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Minimum eight characters, at least one letter and one number " placeholder="name@example.com" required />
        </FloatingLabel>
      </Col></>
  return (
    basePassword(confirmPasswordHTML, "")
  )

}


function Password({ setRegisterForm, registerForm }) {
  const passwordHTML =
    <>
      {/* password field */}
      <Col className="ps-0 pe-0" md="10" sm="10" lg="10" xs="10">
        <FloatingLabel
          controlId="floatingInput"
          label="Password"
        >
          <Form.Control type="password" onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Minimum eight characters, at least one letter and one number " placeholder="name@example.com" required />
        </FloatingLabel>
      </Col>
    </>
  const passwordHelperHTML =
    <>
      {/* password helper */}
      <Row className='gx-5'>
        <Col className="ps-0 pe-0" md="2" sm="2" lg="2" xs="2">
        </Col>
        <Col className="ps-0 pe-0" md="10" sm="10" lg="10" xs="10">
          <Form.Text>
            <a href='./registration'>Forgot password?</a>
          </Form.Text>
        </Col>
      </Row>
    </>
  return (
    basePassword(passwordHTML, passwordHelperHTML)
  )
}
export { Password, ConfirmPassword }