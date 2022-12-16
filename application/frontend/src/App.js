import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/home";
import Login from "./page/Login/login";
import Registration from "./page/Register/registration";
import ErrorPage from './page/Error/ErrorPage';
import SearchResults from './page/SearchResult/SearchResults';
import Front from './page/Front/front';
import Studentrecords from './page/StudentRecord/studentrecords';
import Healthrecords from './page/HealthRecord/healthrecords';
import Financialaid from './page/Finances/financialaid';
import Notifications from "./page/Notifications/notifications"
import Enroll from "./page/Enrollment/enroll"
import CourseDescription from "./page/CourseDescription/coursedescription";
import SchoolCalendar from "./page/SchoolCalendar/schoolcalendar";
import ProfessorReview from "./page/ProfessorReview/professorReview";
import ProfessorDescription from './page/ProfessorDescription/ProfessorDescription';
function App() {
  return (
    <div>
      <Routes>
      <Route index element={<Home/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Registration" element={<Registration/>} />
      <Route path="SearchResults" element={<SearchResults/>} />
      <Route path='ErrorPage' element={<ErrorPage/>} />
      <Route path='Front' element={<Front/>} />
      <Route path='Notifications' element={<Notifications/>}/>
      <Route path='Enroll' element={<Enroll/>}/>
      <Route path='Studentrecords' element={<Studentrecords/>}/>
      <Route path='Healthrecords' element={<Healthrecords/>}/>
      <Route path='Financialaid' element={<Financialaid/>}/>
      <Route path='CourseDescription' element={<CourseDescription/>}/>
      <Route path='SchoolCalendar' element={<SchoolCalendar/>}/>
      <Route path='ProfessorReview' element={<ProfessorReview/>}></Route>
      <Route path='ProfessorDescription' element={<ProfessorDescription/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
