import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/dropdown'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav, Navbar, NavLink } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import "./navbar.css"

function Navbars() {
  //const [category, setCategory] = useState('');
  const [field, setField] = useState('');
  

  // let user= JSON.parse(localStorage.getItem('user'))
  const user = localStorage.getItem("user");

  const navigate = useNavigate();

  /*const navigateLogin = () => {
    navigate('/login');
  };*/
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

  const handleSearch = (e) => {
    e.preventDefault();
    
    window.location.href = `./SearchResults?category=course&field=${field}`;
    
  }

  return (
    <nav className="color-nav navbar fixed-top navbar-expand-lg" id="navBarColor" >
      <a className="navbar-brand px-4" href='./'><img src="../assets/sfsuStudentCenterLogo.jpg" id="logo-size" /></a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      {/* <div className="justify-content-end flex-grow-1 pe-3 collapse navbar-collapse" id="navbarSupportedContent"> */}
      
      <Navbar collapseOnSelect expand="sm">
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <ul className="navbar-nav mr-auto">

          {(user !== null && user !== '') &&
            <form className="form-inline d-flex my-2 my-lg-0">
              <div className="input-group">
              <input className="form-control mr-sm-2 border-dark" list="classes" type="search" placeholder="Search" value={field} onChange={(e) => setField(e.target.value)} aria-label="Search" />
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
          }

          {(user !== null && user !== '') &&
            <form className="form-inline d-flex my-2 my-lg-0">
              <Dropdown>
                <Dropdown.Toggle split className='not-nav' variant="outline-dark" id="dropdown-custom-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25a" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                  <Badge pill>4</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{right:0,left:"auto"}}>
                  <Dropdown.Item onClick={navigateError}>You Owe $10,000</Dropdown.Item>
                  <Dropdown.Item onClick={navigateError}>Graduation application due 10/21</Dropdown.Item>
                  <Dropdown.Item onClick={navigateError} > Drop classes by 11/2</Dropdown.Item>
                  <Dropdown.Item onClick={navigateError}> Change grading option by 12/9</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </form>

          }

          {(user === null || user === '') &&
            <li className="nav-item form-inline d-flex my-2 my-lg-0">
              {/* <button className="btn btn-outline-primary  me-2 my-2 my-sm-0 " onClick={navigateLogin}>Login</button> */}
            </li>
          }
          {(user !== null && user !== '') &&
            <form className="form-inline d-flex my-2 my-lg-0">
              <Dropdown>
                <Dropdown.Toggle split className='not-nav' variant="outline-dark" id="dropdown-custom-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30s" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{right:0,left:"auto"}}>
                  <Dropdown.Item onClick={navigateError}>Account</Dropdown.Item>
                  <Dropdown.Item onClick={navigateError}>Help </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={navigateHome} id="logout-button"> Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </form>
          }
        </ul>
        </Navbar.Collapse>
      </Navbar>
      {/* </div> */}
    </nav>
  );
}

export default Navbars;