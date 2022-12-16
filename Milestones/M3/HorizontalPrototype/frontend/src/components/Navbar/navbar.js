import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/dropdown'
import { useNavigate } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import logo from "../../assets/logo.jpg"
function Navbars() {
  const [field, setField] = useState('');
  const [filter, setFilter] = useState('Course');


  const user = localStorage.getItem("user");

  const navigate = useNavigate();

  const search_filter = (filter) => {
    setFilter(filter)
  }
  const navigateHome = () => {
    localStorage.setItem("user", '');

    navigate('/login');
  };
  const navigateSearch = () => {
    navigate('./SearchResults');
  }
  const navigateError = () => {
    navigate('/ErrorPage');
  };
  const nvigateNotifiction = () => {
    navigate('/notifications');
  };

  const handleSearch = (e) => {
    e.preventDefault();

    window.location.href = `./SearchResults?category=course&field=${field}`;

  }

  return (
    <Navbar expand="lg" className="not-nav fixed-top">

      <Container className=''>
        <Navbar.Brand href="./">
          <img src={logo} id="logo-size" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Dropdown>
              <Dropdown.Toggle split className='not-nav' variant="outline-dark" id="dropdown-autoclose-true">
                Search for {filter}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ right: 0, left: "auto" }}>
                <Dropdown.Item onClick={()=>{search_filter("Course")}}>Course</Dropdown.Item>
                <Dropdown.Item onClick={()=>{search_filter("Professor")}}>Professor</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
            <form className="form-inline d-flex my-2 my-lg-0">
              <div className="input-group">
                <input className="form-control mr-sm-2 border-dark" list="classes" type="search" placeholder="Search Classes" value={field} onChange={(e) => setField(e.target.value)} aria-label="Search" />
                <datalist id="classes">
                  <option value="Chinese">Class: Chinese</option>
                  <option value="English">Class: English</option>
                  <option value="Math">Class: Math</option>
                </datalist>
                <button className="btn btn-outline-dark me-2 my-2 my-sm-0" id="search-button" onClick={handleSearch} type="submit">
                  <span className="input-group-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                </button>
              </div>
              
            </form>
            <Dropdown>
              <Dropdown.Toggle split className='not-nav' variant="outline-dark" id="dropdown-custom-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25a" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
                <Badge pill>4</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ right: 0, left: "auto" }}>
                <p className='pe-2 ps-2 notification mb-0'>You Owe $10,000</p>
                <p className='pe-2 ps-2 notification mb-0'>Graduation application due 10/21</p>
                <p className='pe-2 ps-2 notification mb-0'> Drop classes by 11/2</p>
                <p className='pe-2 ps-2 notification mb-0'> Drop classes by 11/2</p>
                <Dropdown.Divider />
                <Dropdown.Item href='./notifications'> Notifications</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle split className='not-nav' variant="outline-dark" id="dropdown-custom-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30s" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ right: 0, left: "auto" }}>
                <Dropdown.Item onClick={navigateHome} id="logout-button">Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
}

export default Navbars;