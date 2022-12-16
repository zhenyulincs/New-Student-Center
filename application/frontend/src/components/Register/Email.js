import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdEmail } from 'react-icons/md'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';

function Email({setRegisterForm,registerForm}) {
    return (
        <Form.Group className="mb-3" controlId="register-email">

            <Row className='align-items-center gx-5'>
                {/* Email Icon */}
                <Col className="ps-0 pe-0" md="2" sm="2" lg="2" xs="2">
                    <MdEmail size={"2em"}></MdEmail>
                </Col>
                {/* Input Field */}
                <Col className="ps-0 pe-0" md="10" sm="10" lg="10" xs="10">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                    >
                        <Form.Control className="register-email" type="email" placeholder="name@example.com" required onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            {/* Helper message */}
            <Row className="gx-5">
                <Col md="2" sm="2" lg="2" xs="2">
                </Col>
                <Col className="ps-0 pe-0" md="10" sm="10" lg="10" xs="10">
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Col>
            </Row>
        </Form.Group>
    )
}
export default Email