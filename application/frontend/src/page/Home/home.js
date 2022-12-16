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
import React, { useState } from 'react'
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'
import ClassSchedule from '../../components/Home/ClassSchedule'
import ImportantDates from '../../components/Home/ImportantDates'
import ToDoList from '../../components/Home/ToDoList'
import StudentRecords from '../../components/Home/StudentRecords'
import Finances from '../../components/Home/Finances'
import Resources from '../../components/Home/Resources'
import StudentInfo from '../../components/Home/StudentInfo'
import { Navigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './home.css'
function fetchData(response, importantDate, studentInfo, studentClass, setStudentClass, setStudentInfo, setImportantDate, setResponse, body) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const return_data = JSON.parse(this.responseText)

            if (return_data.status.message === "success") {
                studentInfo.result.push(return_data.status.result.degree)
                return_data.status.result.calendar.forEach((data) => {
                    importantDate.result.push(data)

                })
                if (Array.isArray(return_data.status.result.courses)) {
                    return_data.status.result.courses.forEach((data) => {
                        if (data.enrollments[0].enrollment_status == 0) {
                            response.result.push(data)
                        }

                    })
                    return_data.status.result.courses.forEach((data) => {
                        if (data.enrollments[0].enrollment_status == 4) {
                            studentClass.completed_classes.push(data)
                        }

                        if (data.major != null) {
                            studentClass.major_classes.push(data)
                        } else {
                            studentClass.GE_classes.push(data)
                        }
                    })
                }


            } else {
                setResponse({ ...response, message: return_data.message })
                setImportantDate({ ...importantDate, message: return_data.message })
                setStudentInfo({ ...studentInfo, message: return_data.message })
                setStudentClass({ ...studentClass, message: return_data.message })
            }
            setResponse({ ...response, isFinishLoading: true })
            setImportantDate({ ...importantDate, isFinishLoading: true })
            setStudentInfo({ ...studentInfo, isFinishLoading: true })
            setStudentClass({ ...studentClass, isFinishLoading: true })

        }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/home");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
}
function Home() {
    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }
    const [response, setResponse] = useState({
        message: "",
        isFinishLoading: false,
        result: []
    })
    const [importantDate, setImportantDate] = useState({
        message: "",
        isFinishLoading: false,
        result: []
    })
    const [studentInfo, setStudentInfo] = useState({
        message: "",
        isFinishLoading: false,
        result: []
    })
    const [studentClass, setStudentClass] = useState({
        message: "",
        isFinishLoading: false,
        completed_classes: [],
        major_classes: [],
        GE_classes: []
    })
    const [isFirstTime, setIsFirstTime] = useState(true)
    let body = {
        "token": user_token
    }
    if (isFirstTime) {
        fetchData(response, importantDate, studentInfo, studentClass, setStudentClass, setStudentInfo, setImportantDate, setResponse, body)
        setIsFirstTime(false)
    }
    // get the user information from local storage
    let user = null
    if (localStorage.getItem("user") === null || localStorage.getItem("user") === "") {
        user = sessionStorage.getItem("user");
    } else {
        user = localStorage.getItem("user")
    }
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
            <Container className='mt-4 px-4'>
                <Row className='mb-4'>
                    {/* Class Schedule Section */}
                    <ClassSchedule response={response}></ClassSchedule>
                    {/* Important Dates Section */}
                    <ImportantDates response={importantDate}></ImportantDates>
                    {/* To-Do List Section */}
                    {/*<ToDoList></ToDoList>*/}
                    {/* Student Info Section */}
                    <StudentInfo response={studentInfo}></StudentInfo>
                </Row>
                <Row className='mb-4'>
                    {/* Student Records Section */}
                    <StudentRecords response={studentClass}></StudentRecords>
                    {/* Resources Section */}
                    <Resources></Resources>
                </Row>
                <Row className='mb-4'>
                    {/* Finances Section */}
                    <Finances></Finances>


                </Row>
            </Container>
            {/* Footer */}

            <Footer></Footer>

        </div>
    )
}
export default Home;