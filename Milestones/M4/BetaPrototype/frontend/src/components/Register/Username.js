import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUserCircle } from 'react-icons/fa'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';

function Username({ setRegisterForm, registerForm }) {
    return (
        <Form.Group className="mb-3" controlId="register-username">

            <Row className='align-items-center gx-5'>
                {/* Username Icon */}
                <Col className="ps-0 pe-0" md="2" sm="2" lg="2" xs="2">
                    <FaUserCircle size={"2em"}></FaUserCircle>
                </Col>
                {/* Input Field */}
                <Col className="ps-0 pe-0" md="10" sm="10" lg="10" xs="10">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                    >
                        <Form.Control className="register-username" type="text" required placeholder="Username" onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
        </Form.Group>
    )
}
export default Username