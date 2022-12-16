import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLock } from 'react-icons/fa'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';

function Password({ setLoginForm, loginForm }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Row className='align-items-center gx-5'>
        {/* password icon */}
        <Col className="ps-0 pe-0" md="2" sm="2" lg="2" xs="2">
          <FaLock size={"2em"} />
        </Col>
        {/* password field */}
        <Col className="ps-0 pe-0" md="10" sm="10" lg="10" xs="10">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
          >
            <Form.Control type="password" onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Minimum eight characters, at least one letter and one number " placeholder="name@example.com" required />
          </FloatingLabel>
        </Col>
      </Row>
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
    </Form.Group>
  )
}
export default Password