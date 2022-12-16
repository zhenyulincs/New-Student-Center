import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiIdentification } from 'react-icons/hi'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';

function Username({ setRegisterForm, registerForm }) {
    return (
        <Form.Group className="mb-3" controlId="register-studentid">

            <Row className='align-items-center gx-5'>
                {/* StudentId Icon */}
                <Col className="ps-0 pe-0" md="2" sm="2" lg="2" xs="2">
                    <HiIdentification size={"2em"}></HiIdentification>
                </Col>
                {/* Input Field */}
                <Col className="ps-0 pe-0" md="10" sm="10" lg="10" xs="10">
                <FloatingLabel
                        controlId="floatingInput"
                        label="Student ID"
                    >
                        <Form.Control pattern='^\d{9}$' title="Please Enter 9 digits student Id" className="register-studentid" type="text" placeholder="Student ID" required onChange={(e) => setRegisterForm({ ...registerForm, studentID: e.target.value })}
                        />
                    </FloatingLabel>
                </Col>
            </Row>

        </Form.Group>
    )
}
export default Username