import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
function Remember({setLoginForm,loginForm}) {
    return (
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Row className='gx-5'>
                <Col className="ps-0 pe-0" md="2" sm="2" lg="2" xs="2">
                </Col>
                <Col className="ps-0 pe-0" md="10" sm="10" lg="10" xs="10">
                    <Form.Check type="checkbox" label="Remember Me" onChange={(e) => setLoginForm({ ...loginForm, remember: !loginForm.remember })} />
                </Col>
            </Row>
        </Form.Group>
    )
}
export default Remember