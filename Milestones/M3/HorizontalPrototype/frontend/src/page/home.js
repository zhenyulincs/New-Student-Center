/* 
File Description: This file response to render the home page.

Home page contains the following module:
- Class Schedule
- Important Dates
- To-Do List
- Student Records
- Student Info
- Finances
- Resources

The home page contains the hyperlink to the following website:
- Error Page
- enroll Page
- important date page
- student record page

This file will verify the user login statue, if the user haven't login, redirect to the login page


*/
// import necessary files
import React from 'react'
import Navbars from '../components/Navbar/navbar'
import Footer from '../components/Navbar/Footer'
import ClassSchedule from './homePageComponents/ClassSchedule'
import ImportantDates from './homePageComponents/ImportantDates'
import ToDoList from './homePageComponents/ToDoList'
import StudentRecords from './homePageComponents/StudentRecords'
import Finances from './homePageComponents/Finances'
import Resources from './homePageComponents/Resources'
import { Navigate } from 'react-router-dom'
import './home.css'

const Home = () => {
  // get the user information from local storage
  const user = localStorage.getItem("user");
  // check if the user login or not
  if (user === null || user === '') {
    // return to login page if the user haven't login
    return <Navigate to="/login" />
  }
  // HTML content about the home page
  return (
    <div className='main-wrap'>
      {/* NavBar */}
      <Navbars></Navbars>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container px-4">
        <div className="row">
          {/* Class Schedule Section */}
          <ClassSchedule></ClassSchedule>
          {/* Important Dates Section */}
          <ImportantDates></ImportantDates>
          {/* To-Do List Section */}
          <ToDoList></ToDoList>
          {/* Student Records Section */}
          <StudentRecords></StudentRecords>
          {/* Finances Section */}
          <Finances></Finances>
          {/* Resources Section */}
          <Resources></Resources>
        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home;