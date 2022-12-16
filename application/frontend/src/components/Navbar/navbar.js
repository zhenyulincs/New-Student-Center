import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import SearchFilter from './components/SearchFilter';
import Notification from './components/Notification';
import UserAccountOption from './components/UserAccountOption';
function Navbars({argFilter="Course",refresh=false}) {
  const [field, setField] = useState('');
  const [category, setCategory] = useState(argFilter);
  const [searchFilter, setSearchFilter] = useState({
    filters:["Course", "Professor"],
    default_filter : argFilter,
    popup:[["English","Math","Chinese"],["Michael","Ada"]]
  });
  const navigate = useNavigate();
  const search_filter = (filter) => {
    setSearchFilter({...searchFilter,default_filter:filter})
    
    setCategory(filter.toLowerCase())
  }
  const navigateHome = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user")
    navigate('/login');
  };
  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `./SearchResults?category=${category}&field=${field}`;
  }
  return (
    <Navbar expand="lg" className="not-nav">
      <Container className=''>
        {/* Logo */}
        <Logo></Logo>
        {/* Different Modules */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Search filter */}
            <SearchFilter default_filter={searchFilter.default_filter} filters={searchFilter.filters} search_filter={search_filter} ></SearchFilter>
            {/* Search Bar */}
            <SearchBar popup={searchFilter.popup[searchFilter.filters.indexOf(searchFilter.default_filter)]}setField={setField} handleSearch={handleSearch}></SearchBar>
            {/* Notification */}
            <Notification refresh={refresh}></Notification>
            {/* user account option */}
            <UserAccountOption navigateHome={navigateHome}></UserAccountOption>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbars;