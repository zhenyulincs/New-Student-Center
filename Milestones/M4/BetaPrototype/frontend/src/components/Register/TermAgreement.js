import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
function TermAgreement() {
    return (
        <Form.Group className="mb-3" controlId="register-term-agreement">
            <Row className='gx-5'>
                <Col className="ps-0 pe-0" md="2" sm="2" lg="2" xs="2">
                </Col>
                <Col className="ps-0 pe-0" md="1" sm="1" lg="1" xs="1">
                    <Form.Check type="checkbox" 
                    label="" 
                    required
                    />
                    
                </Col>
                <Col className="ps-0 pe-0" md="9" sm="9" lg="9" xs="9">
                I agree to the <a href='./ErrorPage'>Terms of Service</a>
                </Col>
            </Row>
        </Form.Group>
    )
}
export default TermAgreement