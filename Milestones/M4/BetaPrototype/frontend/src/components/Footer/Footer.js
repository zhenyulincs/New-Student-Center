/* 
File Description: This file response to render the footer components.
*/
// import necessary files
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'

function baseFooter(pageName, content) {
  if (pageName == "Login" || pageName == "Register") {
    return (
      <>
        <Container fluid className='login-footer py-3 border-top'>
          {content}
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Container fluid className='footer py-3 border-top'>
          {content}
        </Container>
      </>
    )
  }
}

function Footer({ pageName }) {
  // HTML content about the footer
  const footerHTML =
    <>
      <Row className='align-items-center justify-content-center'>
        <Col className="col-md-12 col-sm-12 col-lg-12 align-items-center text-center">
          <a href="http://52.146.22.198/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" target="_blank">
            About the team
          </a>
          <span className="mb-3 mb-md-0 text-muted col-md-8 ">&copy; Copyright &copy; 2022 Artificial Incompetence</span>
        </Col>
      </Row>
    </>
  return (baseFooter(pageName,footerHTML))
}

export default Footer