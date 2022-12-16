import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Container from 'react-bootstrap/Container';

function SearchBar({ setField, handleSearch,popup }) {
  return (
    <Container>
      <Row>
        <Col className='ps-0 pe-0 col-md-12 col-lg-12 col-xs-12'>
          <Form className="d-flex" onSubmit={(e) => handleSearch(e)}>
            <Form.Control
              type="search"
              placeholder="Search Classes"
              aria-label="Search Classes"
              onChange={(e) => setField(e.target.value)}
              list="navbar-classes"
              className="navbar-search-input"
            />
            <datalist id="navbar-classes">
              {popup.map((data)=>(
                <option value={data}>{data}</option>
              ))}
            </datalist>
            <Button className="navbar-search-button btn-outline-dark" type="submit">
              <span className="input-group-addon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default SearchBar